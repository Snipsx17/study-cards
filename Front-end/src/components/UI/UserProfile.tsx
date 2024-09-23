import { FC } from 'react';

import { useAsideMenuContext } from '@/providers/asideMenu/useContextAsideMenu';

import { MenuContext, UserProfileProps } from '@/@types/types';

import avatar from '@/assets/user-avatar.png';

export const UserProfile: FC<UserProfileProps> = ({ userName }) => {
  const { showAsideMenu } = useAsideMenuContext() as MenuContext;
  return (
    <div
      onClick={showAsideMenu}
      className="flex gap-5 justify-center items-center cursor-pointer"
    >
      <span className="text-white uppercase text-xxl">{userName}</span>
      <span
        className="rounded-full w-14 h-14 bg-auto bg-white"
        style={{
          background: `#fff url(${avatar}) no-repeat center`,
          backgroundSize: '25px',
        }}
      ></span>
    </div>
  );
};
