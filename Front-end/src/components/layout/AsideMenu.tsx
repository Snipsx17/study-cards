/// <reference types="vite-plugin-svgr/client" />
import { useLogin } from '@/providers';
import { useAsideMenuContext } from '@/providers/asideMenu/useContextAsideMenu';
import LogoutIcon from '@/assets/logout-icon.svg?react';

export const AsideMenu = () => {
  const { logout = () => {} } = useLogin() ?? {};
  const { hideAsideMenu, asideMenuIsVisible } = useAsideMenuContext();

  return (
    <nav
      className={`fixed w-[350px] h-full z-40 ${
        asideMenuIsVisible ? 'right-0' : '-right-[350px]'
      } top-0 bg-white text-center py-24 px-16 drop-shadow-lg transition-all`}
    >
      <div
        onClick={hideAsideMenu}
        className="absolute left-9 top-7 text-4xl cursor-pointer"
      >
        X
      </div>
      <ul>
        <li
          onClick={() => {
            logout();
            hideAsideMenu();
          }}
          className="flex justify-center gap-4 cursor-pointer"
        >
          <span className="text-3xl">Logout</span>
          <LogoutIcon width="20" />
        </li>
      </ul>
    </nav>
  );
};
