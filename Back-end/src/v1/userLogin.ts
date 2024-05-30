import { Router } from 'express';

export const userLogin = Router();

userLogin.get('/', (req, res) => {
  res.send('Hello User');
});
