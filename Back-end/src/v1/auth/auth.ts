import { config } from 'dotenv';
config();
import { Router } from 'express';
import { buildRequestValidator } from '../../middlewares/validator/buildRequestValidator';
import { RequestValidatorAdapter } from '../../plugins/requestValidator.plugin';
import {
  registerUserValidationSchema,
  loginUserLoginValidationSchema,
} from '../../middlewares/validator/Schemas';
import { generateSaltRounds } from '../../utils';
import { DBClient } from '../../db/DBClient';
import {
  comparePassword,
  hashPassword,
} from '../../plugins/passwordHash.plugin';
import { TokenParams, createToken } from '../../plugins/jwt.plugin';
export const authRouter = Router();

const requestValidator = new RequestValidatorAdapter();
const requestValidatorMiddleware = buildRequestValidator(requestValidator);
const dbClient = new DBClient();

authRouter.post(
  '/register',
  requestValidatorMiddleware(registerUserValidationSchema),
  async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
      const userExists = await dbClient.findUserByEmail(email);
      if (userExists) {
        res.status(400);
        throw new Error(`A user with email: ${email} exists`);
      }

      const passwordHashed = await hashPassword(
        password,
        generateSaltRounds(Number(process.env.MAX_SALT_LENGTH) || 5)
      );
      // save user
      await dbClient
        .createUser({
          username,
          email,
          password: passwordHashed,
        })
        .then((user) => {
          res.send({ message: 'User created successfully' });
          return;
        })
        .catch((err) => {
          throw new Error('Error creating user');
        });
    } catch (error) {
      next(error);
      return;
    }
  }
);

authRouter.post(
  '/login',
  requestValidatorMiddleware(loginUserLoginValidationSchema),
  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      // check if the user exists
      const userExist = await dbClient.findUserByEmail(email);
      if (!userExist) {
        res.status(404);
        throw new Error(`Invalid username or password`);
      }

      // check the password
      const isPasswordValid = await comparePassword(
        password,
        userExist.password
      );

      if (!isPasswordValid) {
        res.status(404);
        throw new Error(`Invalid username or password`);
      }

      const tokenParams: TokenParams = {
        data: {
          _id: String(userExist._id),
          username: userExist.username,
          email: userExist.email,
        },
        exp: process.env.EXPIRATION_TOKEN || '1h',
      };

      const token = createToken(tokenParams);

      res.send({ token });
    } catch (error) {
      next(error);
    }
  }
);
