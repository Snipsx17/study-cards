import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';

export enum TokenExpirationTimes {
  '1H' = '1h',
  '2H' = '2h',
  '6H' = '6h',
  '12H' = '12h',
  '1D' = '1d',
}

export interface TokenParams {
  data: {
    _id: string;
    username?: string;
    email?: string;
  };
  exp: TokenExpirationTimes;
}

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
