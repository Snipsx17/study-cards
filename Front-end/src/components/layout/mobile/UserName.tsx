import { FC } from 'react';

import { UserNameProps } from '@/@types/types';

export const UserName: FC<UserNameProps> = ({ userName }) => {
  return (
    <div>
      <span className="block font-bold text-4xl uppercase mb-5">{`👋 ${userName}`}</span>
      <hr className="block mb-5" />
    </div>
  );
};
