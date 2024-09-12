import { FC, ReactNode } from 'react';

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="my-8 mx-10 xl:mx-32 flex flex-col justify-center z-0">
      {children}
    </main>
  );
};
