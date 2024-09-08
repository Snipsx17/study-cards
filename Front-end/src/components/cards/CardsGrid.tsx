import { useLogin } from '@/providers/auth/UseLogin';
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { getTokenJwt } from '@/utils/getTokenJwt';
import { useGetCards } from '@/hooks/useGetCards';

export const CardsGrid = () => {
  const [cardFlipped, setCardFlipped] = useState<string>('');

  const { isLogged } = useLogin() ?? {};
  const { loading, error, data: cards, fetchCards, setError } = useGetCards();

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

  useEffect(() => {
    if (isLogged) {
      getCards();
    }
  }, [isLogged]);

  return (
    <section className="grid md:grid-cols-cardsGrid2 xl:grid-cols-cardsGrid3 w-full gap-10">
      {error && <p>{error}</p>}
      {loading && <span>'loading....'</span>}

      {isLogged ? (
        cards?.cards?.map(({ response, question, _id }) => (
          <Card
            key={_id}
            id={_id}
            response={response}
            question={question}
            clickHandler={onClickHandler}
            showIt={cardFlipped === _id}
          />
        ))
      ) : (
        <p>Create your first card...</p>
      )}
    </section>
  );
};
