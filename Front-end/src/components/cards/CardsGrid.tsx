import { useEffect, useState } from 'react';

import { useLogin } from '@/providers/auth/UseLogin';
import { getTokenJwt } from '@/utils/getTokenJwt';
import { useGetCards } from '@/hooks/useGetCards';
import { StateMessage } from '../layout/StateMessage';

import { Card } from './Card';
import { StateMessage } from '@/components/layout/StateMessage';

import { AuthContextType } from '@/@types/types';

export const CardsGrid = () => {
  const [cardFlipped, setCardFlipped] = useState<string>('');

  const { isLogged } = useLogin() as AuthContextType;
  const { loading, error, data: cards, fetchCards, setError } = useGetCards();

  useEffect(() => {
    if (isLogged) {
      getCards();
    }
  }, [isLogged]);

  const onClickHandler = (id: string) => {
    setCardFlipped(id);
  };

  const getCards = async () => {
    try {
      const refreshToken = await getTokenJwt();
      await fetchCards(refreshToken);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <>
      <StateMessage error={error} loading={loading} cards={!!cards?.length} />
      <section className="grid md:grid-cols-cardsGrid2 xl:grid-cols-cardsGrid3 w-full gap-10">
        {isLogged &&
          cards &&
          cards?.map(({ response, question, _id }) => (
            <Card
              key={_id}
              id={_id}
              response={response}
              question={question}
              clickHandler={onClickHandler}
              showIt={cardFlipped === _id}
            />
          ))}
      </section>
    </>
  );
};
