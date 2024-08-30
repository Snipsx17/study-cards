import { createContext, FC, useState } from 'react';

interface Card {
  _id: string;
  question: string;
  response: string;
  category: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface User {
  user: string | null;
  email: string | null;
}

interface UserDataI {
  user: User | null;
  cards: Card[] | null;
}

export interface UserContextProps {
  user: User | null;
  cards: Card[] | null;
  loadUserData?: (data: UserDataI) => void;
}

// crear context
export const userContext = createContext<UserContextProps | null>(null);

// crear provider para el context
export const UserContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setDataUser] = useState<UserDataI>({
    user: null,
    cards: null,
  });

  const loadUserData = async (data: UserDataI) => {
    setDataUser(data);
  };

  return (
    <userContext.Provider
      value={{ user: userData.user, cards: userData.cards, loadUserData }}
    >
      {children}
    </userContext.Provider>
  );
};
// crear customHook para el context
