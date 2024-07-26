import { useCallback, useState } from 'react';

type DataFetch = {
  [key: string]: any;
};

type errorMessage = {
  message: string;
};

interface FetchI {
  data: null | DataFetch;
  isFetching: boolean;
  hasError: boolean;
  error: null | errorMessage;
  getFetch: (url: string, body?: {}) => Promise<void>;
}

export const useFetch = () => {
  const getFetch = useCallback(async function (url: string, body?: {}) {
    try {
      setFetching();
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setFetchState({
        data,
        isFetching: false,
        hasError: false,
        error: null,
        getFetch,
      });
      return fetchState;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }, []);
  const [fetchState, setFetchState] = useState<FetchI>({
    data: null,
    isFetching: false,
    hasError: false,
    error: null,
    getFetch,
  });

  function setFetching() {
    setFetchState({
      data: null,
      isFetching: true,
      hasError: false,
      error: null,
      getFetch,
    });
  }

  function setError(errorMessage: string) {
    setFetchState({
      data: null,
      isFetching: false,
      hasError: true,
      error: { message: errorMessage },
      getFetch,
    });
  }

  return fetchState;
};
