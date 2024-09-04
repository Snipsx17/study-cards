import Storage from '@/utils/localStorage';
import { ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
  initiallyLogged: boolean;
};

type AuthContextType = {
  isLogged: boolean;
  login: (id: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider = ({ children, initiallyLogged }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(initiallyLogged);

  const authentication: AuthContextType = {
    isLogged,
    login: (id: string) => {
      setIsLogged(true);
      Storage.set('isLogged', id);
    },
    logout: () => {
      setIsLogged(false);
      Storage.remove('isLogged');
    },
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};
