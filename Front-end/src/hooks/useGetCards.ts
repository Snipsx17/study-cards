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

interface getCardsState {
  loading: boolean;
  error: null | string;
  data: null | Card[];
}

interface userCardsI extends getCardsState {
  setError: (error: string) => void;
  fetchCards: (refreshToken: string) => Promise<void>;
}

export const useGetCards = (): userCardsI => {
  const [userData, setUserData] = useState<getCardsState>({
    loading: false,
    error: null,
    data: null,
  });

  const { loadUserData = () => {} } = useUserData() ?? {};

  async function fetchCards(refreshToken: string) {
    try {
      setLoading();
      const response = await fetch(
        `http://localhost:4000/api/v1/card/getcards?token=${refreshToken}`
      );

      if (!response.ok) {
        setError('Error getting cards');
        return;
      }

      const data: userData = await response.json();
      setCards(data.cards);
      loadUserData(data.user);
    } catch (error) {
      setError('Failed to get cards');
    }
  }

  function setError(error: string) {
    setUserData({ loading: false, error, data: null });
  }

  const setLoading = () =>
    setUserData({ loading: true, error: null, data: null });

  const setCards = (cards: Card[]) =>
    setUserData({ data: cards, error: null, loading: false });

  return { ...userData, setError, fetchCards };
};
