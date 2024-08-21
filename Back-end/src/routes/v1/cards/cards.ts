import { Router } from 'express';
import {
  buildRequestValidator,
  newCardValidationSchema,
  validateTokenMiddleware,
} from '../../../middlewares';
import { RequestWithUser } from '../../../types';
import { DBClient } from '../../../db/DBClient';
import { RequestValidatorAdapter } from '../../../plugins';

export const cardsRouter = Router();
const dbClient = new DBClient();

const requestValidatorMiddleware = buildRequestValidator(
  RequestValidatorAdapter.validate
);

cardsRouter.get(
  '/getcards/:token?',
  validateTokenMiddleware,
  (req: RequestWithUser, res, next) => {
    const { user } = req.user || {};

    res.status(200).send(user);
  }
);

cardsRouter.post(
  '/newcard/:token?',
  requestValidatorMiddleware(newCardValidationSchema),
  validateTokenMiddleware,
  async (req: RequestWithUser, res, next) => {
    const { question, response, category } = req.body;
    const { user } = req.user || {};
    const { _id: owner } = user || {};
    try {
      const userExists = await dbClient.findUserById(owner);
      if (!userExists) throw new Error('User not exist');

      await dbClient.addCategory({ owner, category });

      const newCard = await dbClient.createCard({
        question,
        response,
        category,
        owner,
      });

      res.json(newCard);
    } catch (error) {
      if (error instanceof Error)
        next({ message: `Error creating new card: ${error.message}` });
    }
  }
);
