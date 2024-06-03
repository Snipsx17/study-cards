import { Router } from 'express';
import { buildRequestValidator } from '../../middlewares/validator/buildRequestValidator';
import { RequestValidatorAdapter } from '../../plugins/requestValidator.plugin';
import { userValidationSchema } from '../../middlewares/validator/Schemas';
import { generateSaltRounds } from '../../utils';
export const authRouter = Router();

const requestValidator = new RequestValidatorAdapter();
const requestValidatorMiddleware = buildRequestValidator(requestValidator);

authRouter.get(
  '/register',
  requestValidatorMiddleware(userValidationSchema),
  (req, res) => {
    // recibe data { name, email, password }
    const { userName, email, password } = req.body;
    // validate user doesn't exist

    // generate salt round
    const saltRounds = generateSaltRounds(5);
    // hash password

    // save user
    // generate token
    // send token
    res.send('Hello User');
  }
);
