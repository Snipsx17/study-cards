import { useState } from 'react';
import { Loader } from './Loader';

type Props = {
  principal?: boolean;
  children: string;
  type?: string;
  onClick?: () => void;
  isFetching: boolean;
};

export const SubmitButton = ({ children, onClick, isFetching }: Props) => {
  return (
    <>
      <button
        // disabled={isFetching}
        className={`w-[200px] h-16 rounded-full uppercase font-bold text-white px-[30px] py-[9.5px] bg-purple  text-xl m-4 box-border flex-initial  hover:bg-purple/90`}
        // onClick={onClick}
      >
        {isFetching ? <Loader /> : children}
      </button>
    </>
  );
};
