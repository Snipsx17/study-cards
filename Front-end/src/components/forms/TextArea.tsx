import { FC } from 'react';

import { TextAreaProps } from '@/@types/types';

export const TextArea: FC<TextAreaProps> = ({
  label,
  value,
  name,
  size,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor="answer"
        className="block font-medium leading-6 text-gray-900 text-2xl mb-3"
      >
        {label}
      </label>

      <textarea
        id="answer"
        value={value}
        name={name}
        onChange={onChange}
        rows={size}
        className="block w-full bg-[#fbf8ff] text-2xl border-b-[1px] border-[purple]/50 p-3 text-gray-900 ring-[purple] placeholder:text-gray-400 outline-none focus:border-[purple] focus:border-b-2 mb-5"
      ></textarea>
    </div>
  );
};
