import { config } from 'dotenv';
config();

import { Router } from 'express';
import {
  buildRequestValidator,
  registerUserValidationSchema,
  loginUserLoginValidationSchema,
} from '../../../middlewares';
import {
  RequestValidatorAdapter,
  hashPassword,
  createToken,
  validateUser,
  validateRefreshToken,
} from '../../../plugins';

import { generateSaltRounds } from '../../../utils';
import { DBClient } from '../../../db/DBClient';

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
      const user = await dbClient.findUserByEmail(email);
      if (!user) {
        res.status(404);
        throw new Error(`Invalid username or password`);
      }

      const isValidUser = await validateUser({
        requestEmail: email,
        requestPassword: password,
        userEmail: user.email,
        userPassword: user.password,
      });

      if (!isValidUser) {
        res.status(404);
        throw new Error(`Invalid username or password`);
      }

      const refreshTokenExpiration =
        process.env.EXPIRATION_REFRESH_TOKEN || '15d';

      const refreshToken = createToken({
        data: {
          _id: String(user._id),
          username: user.username,
          email: user.email,
        },
        exp: refreshTokenExpiration,
      });

      res.cookie('refreshToken', refreshToken, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),

        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        domain: process.env.REFRESH_TOKEN_DOMAIN || 'localhost',
      });

      res.send({ login: 'OK' });
    } catch (error) {
      next(error);
    }
  }
);

authRouter.post('/refresh-token', async (req, res, next) => {
  let { refreshToken } = req.cookies as { refreshToken: string };

  const isValidToken = validateRefreshToken(refreshToken);

  if (!isValidToken) {
    res.status(401);
    throw new Error('Invalid refresh token');
  }

  const { user } = isValidToken;
  const userExists = await dbClient.findUserById(user._id);
  if (!userExists) {
    res.status(401);
    throw new Error('User not found');
  }

  const refreshTokenExpiration = process.env.EXPIRATION_TOKEN || '15m';
  const tokenJWT = createToken({
    data: {
      _id: String(user._id),
      username: user.username,
      email: user.email,
    },
    exp: refreshTokenExpiration,
  });

  res.send({ tokenJWT });
});
