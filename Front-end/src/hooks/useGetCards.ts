import { useState } from 'react';
import { useUserData } from '@/providers/user/UseUserData';

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

interface userData {
  user: User;
  cards: Card[];
}

interface userDataState {
  loading: boolean;
  error: null | string;
  data: null | userData;
}

interface userCardsI extends userDataState {
  setError: (error: string) => void;
  fetchCards: (refreshToken: string) => Promise<void>;
}

export const useGetCards = (): userCardsI => {
  const [userData, setUserData] = useState<userDataState>({
    loading: false,
    error: null,
    data: null,
  });

  const { loadUserData = () => {} } = useUserData() ?? {};

  async function fetchCards(refreshToken: string) {
    try {
      setLoading();
      const data = await fetch(
        `http://localhost:4000/api/v1/card/getcards?token=${refreshToken}`
      );

      if (!data.ok) {
        setError('Error getting cards');
        return;
      }

      const cards = await data.json();
      setData(cards);
      loadUserData(cards.user);
    } catch (error) {
      setError('Failed to get cards');
    }
  }

  function setError(error: string) {
    setUserData({ loading: false, error, data: null });
  }

  const setLoading = () =>
    setUserData({ loading: true, error: null, data: null });

  const setData = (newState: userData) =>
    setUserData({ ...userData, data: newState });

  return { ...userData, setError, fetchCards };
};
