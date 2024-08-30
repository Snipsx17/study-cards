import Storage from '@/utils/localStorage';
import { AuthContextProvider } from './auth/LoginContext';
import { OverlayContextProvider } from './overlay/OverlayContext';
import { AsideMenuContextProvider } from './asideMenu/AsideMenuContext';
import { FC } from 'react';
import { UserContextProvider } from './user/UserContext';

interface Props {
  children: React.ReactNode;
}
const isLogged = !!Storage.get('isLogged');

export const Providers: FC<Props> = ({ children }) => {
  return (
    <AuthContextProvider initiallyLogged={isLogged}>
      <OverlayContextProvider>
        <AsideMenuContextProvider>
          <UserContextProvider>{children}</UserContextProvider>
        </AsideMenuContextProvider>
      </OverlayContextProvider>
    </AuthContextProvider>
  );
};
