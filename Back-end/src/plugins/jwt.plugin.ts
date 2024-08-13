import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
import { TokenParams } from '../types';

export const createToken = ({ data, exp }: TokenParams): string => {
  const jwtSecret = process.env.JWT_TOKEN_SECRET || 'secret';
  const token = jwt.sign(
    {
      data,
    },
    jwtSecret,
    { expiresIn: exp }
  );
  return token;
};

export const validateToken = (token: string): boolean => {
  const secret = process.env.JWT_TOKEN_SECRET || 'secret';
  let isValid = false;
  jwt.verify(token, secret, (error, decoded) => {
    isValid = decoded ? true : false;
  });
  return isValid;
};
