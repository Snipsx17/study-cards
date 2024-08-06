import { useContext } from 'react';
import { asideMenuContext, menuContextI } from './AsideMenuContext';

export const useAsideMenuContext = () =>
  useContext<menuContextI>(asideMenuContext);
