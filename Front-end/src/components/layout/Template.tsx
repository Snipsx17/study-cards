import { FC, ReactNode } from 'react';
import { Header } from './Header';
import { Main } from './Main';

export const Template: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
