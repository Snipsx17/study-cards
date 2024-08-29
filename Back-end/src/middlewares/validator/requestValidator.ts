import { Request } from 'express';
import Joi from 'joi';

export const validatorFunction = (
  { body }: Request,
  validationSchema: Joi.ObjectSchema
) => {
  const validation = validationSchema.validate(body);
  if (validation.error) {
    throw new Error(validation.error.details[0].message);
  }
  return validation.value;
};
