import { FC } from 'react';

import { Loader } from '../../UI/loader/Loader';

import { SubmitButtonProps } from '@/@types/types';

export const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  isFetching,
}) => {
  return (
    <>
      <button
        className={`block w-[200px] h-16 rounded-full uppercase font-bold text-white px-[30px] py-[9.5px] bg-purple  text-xl mt-4 box-border flex-initial  hover:bg-purple/90 m-auto mb-10`}
        disabled={isFetching}
      >
        {isFetching ? <Loader /> : children}
      </button>
    </>
  );
};
