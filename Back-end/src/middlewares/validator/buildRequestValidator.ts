import Joi from 'joi';
import { RequestValidatorAdapter } from '../../plugins';
import { NextFunction, Request, Response } from 'express';

export const buildRequestValidator = (validator: RequestValidatorAdapter) => {
  return (schemaValidator: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        validator.validate(req, schemaValidator);
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
