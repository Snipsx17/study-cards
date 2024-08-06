import Joi from 'joi';
import { RequestValidatorAdapter } from '../../plugins';
import { NextFunction, Request, Response } from 'express';

type RequestValidator = (req: Request, schema: Joi.ObjectSchema) => any;

export const buildRequestValidator = (validator: RequestValidator) => {
  return (schemaValidator: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        validator(req, schemaValidator);
      } catch (error) {
        if (error instanceof Error) {
          res.status(400);
          next({ message: error.message });
          return;
        }
      }
      next();
    };
  };
};
