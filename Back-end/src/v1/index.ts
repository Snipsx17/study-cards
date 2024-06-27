import { Router } from 'express';
import { authRouter } from './auth/auth';

export const apiV1 = Router();

apiV1.use('/auth', authRouter);

apiV1.get('/card', (req, res) => {
  res.send('Hello Card');
});
