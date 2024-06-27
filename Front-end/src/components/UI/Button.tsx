type Props = {
  principal?: boolean;
  text: string;
  onClick: () => void;
};

const Button = ({ text, principal = false, onClick }: Props) => {
  return (
    <>
      <button
        className={` rounded-full uppercase font-bold ${
          principal
            ? 'border-0 text-purple px-[30px] py-[9.5px] bg-white hover:bg-slate-100'
            : ' text-white bg-transparent border-2 px-11 py-3'
        }  text-xl  border-white m-4 box-border flex-initial hover:bg-white hover:text-purple`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
