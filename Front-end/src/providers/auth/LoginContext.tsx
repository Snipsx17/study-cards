import { ReactNode, createContext, useState } from 'react';

type Props = {
  children: ReactNode;
  initiallyLogged: boolean;
};

type AuthContextType = {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider = ({ children, initiallyLogged }: Props) => {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const authentication: AuthContextType = {
    isLogged,
    login: () => setIsLogged(true),
    logout: () => setIsLogged(false),
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};
