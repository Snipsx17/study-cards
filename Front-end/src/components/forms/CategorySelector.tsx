import { FC } from 'react';

interface Props {
  label: string;
  categories: string[];
}

export const CategorySelector: FC<Props> = ({ categories, label }) => {
  return (
    <div>
      <label
        htmlFor="answer"
        className="block font-medium leading-6 text-gray-900 text-2xl mb-3"
      >
        {label}
      </label>
      <select className="block w-[300px] text-2xl border-[1px] rounded-xl border-[purple]/50 p-3 text-gray-900 ring-[purple] placeholder:text-gray-400 outline-none focus:border-[purple] focus:border-b-2">
        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
    </div>
  );
};
