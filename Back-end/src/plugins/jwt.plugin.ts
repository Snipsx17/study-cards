import { config } from 'dotenv';
config();
import jwt, { JwtPayload } from 'jsonwebtoken';
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

export const createRefreshToken = ({ data, exp }: TokenParams): string => {
  const refreshTokenSecret = process.env.REFRESH_JWT_TOKEN_SECRET || 'secret';
  const token = jwt.sign(
    {
      data,
    },
    refreshTokenSecret,
    { expiresIn: exp }
  );
  return token;
};

export const validateToken = (token: string) => {
  const secret = process.env.JWT_TOKEN_SECRET || 'secret';
  try {
    const tokenDecoded = jwt.verify(token, secret) as JwtPayload;

    const userData = {
      user: tokenDecoded.data,
      iat: tokenDecoded.iat,
      exp: tokenDecoded.exp,
    };

    return userData;
  } catch (error) {
    throw new Error('Invalid Token');
  }
};

export const validateRefreshToken = (token: string) => {
  const secret = process.env.REFRESH_JWT_TOKEN_SECRET || 'secret';
  try {
    const tokenDecoded = jwt.verify(token, secret) as JwtPayload;

    const userData = {
      user: tokenDecoded.data,
      iat: tokenDecoded.iat,
      exp: tokenDecoded.exp,
    };

    return userData;
  } catch (error) {
    return null;
  }
};
