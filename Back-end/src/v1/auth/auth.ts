import { config } from 'dotenv';
config();

import { Router } from 'express';
import {
  buildRequestValidator,
  registerUserValidationSchema,
  loginUserLoginValidationSchema,
} from '../../middlewares';
import {
  RequestValidatorAdapter,
  comparePassword,
  hashPassword,
  TokenParams,
  createToken,
  TokenExpirationTimes,
} from '../../plugins';

import { generateSaltRounds } from '../../utils';
import { DBClient } from '../../db/DBClient';

export const authRouter = Router();

const requestValidatorMiddleware = buildRequestValidator(
  RequestValidatorAdapter.validate
);
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

      const expirationTime =
        (process.env.EXPIRATION_TOKEN as TokenExpirationTimes) || '1h';

      const tokenParams: TokenParams = {
        data: {
          _id: String(userExist._id),
          username: userExist.username,
          email: userExist.email,
        },
        exp: expirationTime,
      };

      const token = createToken(tokenParams);

      res.send({ token });
    } catch (error) {
      next(error);
    }
  }
);
