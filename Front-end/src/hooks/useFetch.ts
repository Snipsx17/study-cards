import { useState } from 'react';

import { DataFetch, FetchI, requestMethods } from '../@types/types';

export const useFetch = () => {
  const [fetchState, setFetchState] = useState<FetchI>({
    data: null,
    isFetching: false,
    hasError: false,
    error: null,
    getFetch,
    setError,
  });

  async function getFetch(url: string, method: requestMethods, body?: {}) {
    try {
      setFetching();
      const response = await fetch(url, {
        method: method || 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: body && JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data: null | DataFetch = await response.json();

      const newState = {
        data,
        isFetching: false,
        hasError: false,
        error: null,
        getFetch,
        setError,
      };

      setFetchState(newState);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  function setFetching() {
    setFetchState({
      data: null,
      isFetching: true,
      hasError: false,
      error: null,
      getFetch,
      setError,
    });
  }

  function setError(errorMessage: string) {
    setFetchState({
      data: null,
      isFetching: false,
      hasError: true,
      error: { message: errorMessage },
      getFetch,
      setError,
    });
  }

  return fetchState;
};
