import { NextFunction, Request, Response } from 'express';

export interface ServerOptions {
  port: string | undefined;
  publicDir: string | undefined;
  errorHandler: (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
}

export interface TokenParams {
  data: {
    _id: string;
    username?: string;
    email?: string;
  };
  exp: TokenExpirationTimes;
}

export interface UserInterface {
  username: string;
  email: string;
  password: string;
}

export interface userDataFromToken {
  user: User;
  iat: number | undefined;
  exp: number | undefined;
}

export interface RequestWithUser extends Request {
  user?: userDataFromToken;
}

export interface resBody {
  message: string;
  stack?: string;
  error: boolean;
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface CardInterface {
  question: string;
  response: string;
  category: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
}

export interface CategoryInterface {
  name: string;
  userId: Schema.Types.ObjectId;
}

export enum TokenExpirationTimes {
  '1H' = '1h',
  '2H' = '2h',
  '6H' = '6h',
  '12H' = '12h',
  '1D' = '1d',
}

export type RequestValidator = (req: Request, schema: Joi.ObjectSchema) => void;
