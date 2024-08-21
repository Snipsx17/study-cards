import Joi from 'joi';

export const registerUserValidationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.string().valid(Joi.ref('password')).required(),
});

export const loginUserLoginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const newCardValidationSchema = Joi.object({
  question: Joi.string().required(),
  response: Joi.string().required(),
  category: Joi.string().required(),
});
