import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

export interface TokenParams {
  data: {
    _id: string;
    username?: string;
    email?: string;
  };
  exp: '1h' | '2h' | '6h' | '12h' | '1d';
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
