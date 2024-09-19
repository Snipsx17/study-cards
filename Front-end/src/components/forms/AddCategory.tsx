import { useState } from 'react';
import { SubmitButton } from './button/SubmitButton';
import { Input } from './Input';
import ArrowBack from '@/assets/arrow-left-solid.svg?react';
import { useOverlayContext } from '@/providers';
import { CreateCardForm } from './CreateCardForm';
import { instanceOf } from 'prop-types';

export const AddCategory = () => {
  const [formData, setFormData] = useState({ category: '' });
  const { showOverlay = () => {} } = useOverlayContext() ?? {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    showOverlay(<CreateCardForm />);
  };

  return (
    <div className="m-12 mb-20">
      <span
        className="absolute top-8 left-8 text-4xl text-black cursor-pointer"
        onClick={() => {
          showOverlay(<CreateCardForm />);
        }}
      >
        {<ArrowBack fill="#000" width="18" />}
      </span>
      <h3 className="text-center text-4xl font-bold py-10">Add new category</h3>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="category"
          onChange={onChange}
          value={formData.category}
        />
        <SubmitButton type="submit">Create</SubmitButton>
      </form>
    </div>
  );
};
