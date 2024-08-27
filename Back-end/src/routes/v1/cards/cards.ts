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
  async (req: RequestWithUser, res, next) => {
    const { user } = req.user || {};
    try {
      const userExists = await dbClient.findUserById(user?._id);

      if (!userExists) {
        res.status(401);
        throw new Error('Unauthorized');
      }

      const cards = await dbClient.getCards(String(userExists._id));

      const responseData = {
        user: { user: user?.username, email: user?.email },
        cards,
      };

      res.send(responseData);
    } catch (error) {
      next({ message: `Error getting cards: ${error}` });
    }
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
