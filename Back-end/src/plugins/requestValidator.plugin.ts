import { Request } from 'express';
import Joi from 'joi';

export class RequestValidatorAdapter {
  validate({ body }: Request, schema: Joi.ObjectSchema) {
    const validation = schema.validate(body);
    if (validation.error) {
      throw new Error(validation.error.details[0].message);
    }
    return validation.value;
  }
}
