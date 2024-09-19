import { ReactNode } from 'react';

type Props = {
  type: string;
  placeHolder?: string;
  label?: string;
  value: string;
  name: string;
  Icon?: ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, label, value, onChange, name, Icon }: Props) => {
  return (
    <div className="pb-5">
      <label
        htmlFor={name}
        className="block font-medium leading-6 text-gray-900 text-2xl"
      >
        {label}
      </label>
      <div className=" relative mt-2">
        <span className="absolute top-4 left-3">{Icon}</span>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete="email"
          required
          className={`block w-[300px] text-2xl ${
            Icon ? 'pl-10' : null
          } border-b-[1px] border-[purple]/50 p-3 text-gray-900 ring-[purple] placeholder:text-gray-400 outline-none focus:border-[purple] focus:border-b-2`}
        />
      </div>
    </div>
  );
};
