import { FC } from 'react';

import { useOverlayContext } from '@/providers';
import { CategorySelectorProps, OverlayProviderProps } from '@/@types/types';

import { AddCategory } from './AddCategory';

export const CategorySelector: FC<CategorySelectorProps> = ({
  categories,
  label,
}) => {
  const { showOverlay } = useOverlayContext() as OverlayProviderProps;
  return (
    <div>
      <label
        htmlFor="answer"
        className="block font-medium leading-6 text-gray-900 text-2xl mb-3"
      >
        {label}
      </label>
      <div className="flex gap-3">
        <select className="block w-4/5 text-2xl border-[1px] rounded-xl border-[purple]/50 p-3 text-gray-900 ring-[purple] placeholder:text-gray-400 outline-none focus:border-[purple] focus:border-b-2">
          {categories.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
        <button
          title="Create new Category"
          className="w-1/5 bg-purpleButton text-4xl rounded-md text-white"
          onClick={() => showOverlay(<AddCategory />)}
        >
          +
        </button>
      </div>
    </div>
  );
};
