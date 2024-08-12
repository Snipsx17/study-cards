import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

type RequestValidator = (req: Request, schema: Joi.ObjectSchema) => void;

export const buildRequestValidator = (validator: RequestValidator) => {
  return (schemaValidator: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        validator(req, schemaValidator);
      } catch (error) {
        if (error instanceof Error) {
          res.status(400);
          throw new Error(error.message);
        }
      }
      next();
    };
  };
};
