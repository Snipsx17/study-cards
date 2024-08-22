import bcrypt from 'bcrypt';
import { validateUserInterface } from '../types';
import { rejects } from 'assert';

export const hashPassword = (
  password: string,
  saltRounds: number
): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const validateUser = async ({
  requestEmail,
  requestPassword,
  userEmail,
  userPassword,
}: validateUserInterface): Promise<boolean> => {
  const isValidPassword = await bcrypt.compare(requestPassword, userPassword);
  const isValidEmail = requestEmail === userEmail;
  return isValidEmail && isValidPassword ? true : false;
};
