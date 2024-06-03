import { Router } from 'express';
import { buildRequestValidator } from '../../middlewares/validator/buildRequestValidator';
import { RequestValidatorAdapter } from '../../plugins/requestValidator.plugin';
import { userValidationSchema } from '../../middlewares/validator/Schemas';
import { generateSaltRounds } from '../../utils';
import { DBClient } from '../../db/DBClient';
import {
  comparePassword,
  hashPassword,
} from '../../plugins/passwordHash.plugin';
export const authRouter = Router();
const requestValidator = new RequestValidatorAdapter();
const requestValidatorMiddleware = buildRequestValidator(requestValidator);
const dbClient = new DBClient();

authRouter.get(
  '/register',
  requestValidatorMiddleware(userValidationSchema),
  async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await dbClient.findUserByEmail(email);
    if (userExists) {
      res.status(400);
      res.send('User already exists');
      return;
    }
    // generate salt round
    const saltRounds = generateSaltRounds(5);
    // hash password
    const passwordHashed = await hashPassword(password, saltRounds);
    // save user
    // generate token
    // send token
    res.send('Hello User');
  }
);
