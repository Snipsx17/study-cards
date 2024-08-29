import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import { validatorFunction } from './requestValidator';

export const requestValidatorBuilder = () => {
  return (validationSchema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const validation = validatorFunction(req, validationSchema);
        if (validation.error) {
          throw new Error(validation.error.details[0].message);
        }
      } catch (error) {
        next(error);
      }
      next();
    };
  };
};
