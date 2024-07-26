import { FC, ReactNode } from 'react';

interface MessageProp {
  children: ReactNode;
}

export const Message: FC<MessageProp> = ({ children }) => {
  return <span className="text-sm text-[purple]">{children}</span>;
};
