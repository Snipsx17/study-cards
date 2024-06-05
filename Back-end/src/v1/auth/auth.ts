import { Router } from 'express';
import { buildRequestValidator } from '../../middlewares/validator/buildRequestValidator';
import { RequestValidatorAdapter } from '../../plugins/requestValidator.plugin';
import { userValidationSchema } from '../../middlewares/validator/Schemas';
import { generateSaltRounds } from '../../utils';
import { DBClient } from '../../db/DBClient';
import { hashPassword } from '../../plugins/passwordHash.plugin';
export const authRouter = Router();

const requestValidator = new RequestValidatorAdapter();
const requestValidatorMiddleware = buildRequestValidator(requestValidator);
const dbClient = new DBClient();

authRouter.post(
  '/register',
  requestValidatorMiddleware(userValidationSchema),
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
