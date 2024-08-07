import { NextFunction, Request, Response } from 'express';

interface resBody {
  message: string;
  stack?: string;
  error: boolean;
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  const resBody: resBody = {
    message: err.message,
    error: true,
  };

  if (process.env.ENV !== 'PRODUCTION') {
    resBody.stack = err.stack;
  }

  res.json(resBody);
};
