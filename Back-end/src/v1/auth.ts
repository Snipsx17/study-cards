import { Router } from 'express';

export const router = Router();

router.get('/auth', (req, res) => {
  res.send('Hello User');
});
