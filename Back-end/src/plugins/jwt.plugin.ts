import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
import { TokenParams, User } from '../types';

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

export const validateToken = (token: string) => {
  const secret = process.env.JWT_TOKEN_SECRET || 'secret';
  try {
    let decodedToken = jwt.verify(token, secret);

    return decodedToken as User;
  } catch (error) {
    throw new Error('Invalid Token');
  }
};
