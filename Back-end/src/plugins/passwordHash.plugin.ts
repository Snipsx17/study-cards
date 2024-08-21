import bcrypt from 'bcrypt';
import { validateUserInterface } from '../types';
import { rejects } from 'assert';

export const hashPassword = (
  password: string,
  saltRounds: number
): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const validateUser = ({
  RequestEmail,
  RequestPassword,
  userEmail,
  userPassword,
}: validateUserInterface): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt
      .compare(RequestPassword, userPassword)
      .then(() => {
        RequestEmail === userEmail ? resolve(true) : reject(false);
      })
      .catch((err) => reject(err));
  });

  // (
  //
  // );
};
