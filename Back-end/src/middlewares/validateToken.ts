import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../plugins';

export const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers?.authorization;
  const params = req.query?.token;

  try {
    if (!authorization?.includes('Bearer') && !params) {
      throw new Error(`Not token provided`);
    }

    const isValidToken = validateToken(
      authorization?.split(' ')[1] || (params as string)
    );

    if (!isValidToken) {
      throw new Error(`Invalid token`);
    }

    next();
  } catch (err) {
    res.status(401);
    throw err;
  }
};
