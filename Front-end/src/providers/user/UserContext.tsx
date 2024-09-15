import { createContext, FC, useState } from 'react';

interface User {
  user: string | null;
}

export interface UserContextProps {
  user: string | null;
  loadUserData?: (user: { user: string }) => void;
}

export const userContext = createContext<UserContextProps | null>(null);

export const UserContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setDataUser] = useState<User>({
    user: null,
  });

  const loadUserData = async (user: User) => {
    setDataUser(user);
  };

  return (
    <userContext.Provider value={{ user: userData.user, loadUserData }}>
      {children}
    </userContext.Provider>
  );
};
