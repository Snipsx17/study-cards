import { FC } from 'react';

interface Props {
  userName: string;
}

export const UserName: FC<Props> = ({ userName }) => {
  return (
    <div>
      <span className="block font-bold text-4xl uppercase mb-5">{`👋 ${userName}`}</span>
      <hr className="block mb-5" />
    </div>
  );
};
