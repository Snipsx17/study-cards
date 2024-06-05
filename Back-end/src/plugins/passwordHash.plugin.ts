import bcrypt from 'bcrypt';

export const hashPassword = (
  password: string,
  saltRounds: number
): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
