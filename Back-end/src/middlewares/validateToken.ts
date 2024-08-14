import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../plugins';
import { RequestWithUser, User } from '../types';

export const validateTokenMiddleware = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers?.authorization;
  const params = req.query?.token;

  try {
    if (!authorization?.includes('Bearer') && !params) {
      throw new Error(`Not token provided`);
    }

    const UserData = validateToken(
      authorization?.split(' ')[1] || (params as string)
    );

    if (!UserData) {
      throw new Error(`Invalid token`);
    }

    req.user = UserData;
    next();
  } catch (err) {
    res.status(401);
    throw err;
  }
};
