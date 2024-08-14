import { Router } from 'express';
import { authRouter } from './auth/auth';
import { cardsRouter } from './cards/cards';

export const apiV1 = Router();

apiV1.use('/auth', authRouter);

apiV1.use('/card', cardsRouter);
