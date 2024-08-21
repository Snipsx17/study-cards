import { Router } from 'express';
import { authRouter } from './v1/auth/auth';
import { cardsRouter } from './v1/cards/cards';

export const apiV1 = Router();

apiV1.use('/auth', authRouter);

apiV1.use('/card', cardsRouter);
