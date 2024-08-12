import { Router } from 'express';
import { validateTokenMiddleware } from '../../middlewares';

export const cardsRouter = Router();

cardsRouter.get(
  '/getcards/:?token',
  validateTokenMiddleware,
  (req, res, next) => {
    console.log(req.headers);
    res.status(200);
  }
);
