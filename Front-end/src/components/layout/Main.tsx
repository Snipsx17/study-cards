import { FC, ReactNode } from 'react';

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="my-8 mx-16 flex justify-center">{children}</main>;
};
