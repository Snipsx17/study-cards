import { FC } from 'react';

import { MessageProp } from '@/@types/types';

export const Message: FC<MessageProp> = ({ children }) => {
  return <span className="text-sm text-[purple]">{children}</span>;
};
