import { FC } from 'react';

interface Props {
  error: string | null;
  loading: boolean;
  cards: boolean;
}

export const StateMessage: FC<Props> = ({ error, loading, cards }) => {
  return (
    <section>
      {error && (
        <p className="text-center">
          Ups, something went wrong, please try again later...
        </p>
      )}
      {loading && <span className="text-center">'loading....'</span>}
      {!cards && !error && (
        <p className="text-center">Create your first card...</p>
      )}
    </section>
  );
};
