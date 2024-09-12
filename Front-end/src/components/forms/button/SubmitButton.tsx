import { Loader } from '../../UI/loader/Loader';

type Props = {
  principal?: boolean;
  children: string;
  type?: string;
  onClick?: () => void;
  isFetching: boolean;
};

export const SubmitButton = ({ children, isFetching }: Props) => {
  return (
    <>
      <button
        className={`block w-[200px] h-16 rounded-full uppercase font-bold text-white px-[30px] py-[9.5px] bg-purple  text-xl mt-4 box-border flex-initial  hover:bg-purple/90 m-auto mb-10`}
      >
        {isFetching ? <Loader /> : children}
      </button>
    </>
  );
};
