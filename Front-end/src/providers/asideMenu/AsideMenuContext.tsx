import { createContext, FC, ReactNode, useState } from 'react';

import { MenuContext } from '@/@types/types';

export const asideMenuContext = createContext<null | MenuContext>(null);

export const AsideMenuContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [asideMenuIsVisible, setAsideMenuIsVisible] = useState<boolean>(false);
  const showAsideMenu = () => setAsideMenuIsVisible(true);
  const hideAsideMenu = () => setAsideMenuIsVisible(false);
  return (
    <asideMenuContext.Provider
      value={{ showAsideMenu, hideAsideMenu, asideMenuIsVisible }}
    >
      {children}
    </asideMenuContext.Provider>
  );
};
