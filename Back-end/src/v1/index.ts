import { Router } from 'express';

export const apiV1 = Router();

apiV1.get('/auth', (req, res) => {
  res.send('Hello User');
});

apiV1.get('/card', (req, res) => {
  res.send('Hello Card');
});
