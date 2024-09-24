import { FC, createContext, useState } from 'react';

import { useFetch } from '@/hooks/useFetch';
import Storage from '@/utils/localStorage';

import { AuthContextProps, AuthContextType } from '@/@types/types';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: FC<AuthContextProps> = ({
  children,
  initiallyLogged,
}) => {
  const [isLogged, setIsLogged] = useState<boolean>(initiallyLogged);
  const { getFetch } = useFetch();

  const login = (id: string) => {
    setIsLogged(true);
    Storage.set('isLogged', id);
  };

  const logout = async () => {
    await getFetch('http://localhost:4000/api/v1/auth/logout', 'get');
    Storage.remove('isLogged');
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
