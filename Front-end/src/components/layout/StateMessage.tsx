import { FC } from 'react';

import { StateMessageProps } from '@/@types/types';

export const StateMessage: FC<StateMessageProps> = ({
  error,
  loading,
  cards,
}) => {
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
