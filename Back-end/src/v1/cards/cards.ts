import { Router } from 'express';
import { validateTokenMiddleware } from '../../middlewares';
import { RequestWithUser } from '../../types';

export const cardsRouter = Router();

cardsRouter.get(
  '/getcards/:token?',
  validateTokenMiddleware,
  (req: RequestWithUser, res, next) => {
    const { user } = req.user || {};

    res.status(200).send(user);
  }
);
