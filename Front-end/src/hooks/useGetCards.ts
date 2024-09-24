import { useState } from 'react';

import { useUserData } from '@/providers/user/UseUserData';

import { Card, getCardsState, userCardsI, userData } from '../@types/types';

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
