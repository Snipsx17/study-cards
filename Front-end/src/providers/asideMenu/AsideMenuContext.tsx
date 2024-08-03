import { createContext, FC, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

export interface menuContextI {
  showAsideMenu: () => void;
  hideAsideMenu: () => void;
  asideMenuIsVisible: boolean;
}

export const asideMenuContext = createContext<null | menuContextI>(null);

export const AsideMenuContextProvider: FC<Props> = ({ children }) => {
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
