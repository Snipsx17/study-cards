import { FormEvent, useState } from 'react';

import { useFetch } from '@/hooks/useFetch';

import { SubmitButton } from './button/SubmitButton';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { CategorySelector } from './CategorySelector';
import { Message } from '../UI/Message';

import QuestionIcon from '@/assets/question-solid.svg?react';

export const CreateCardForm = () => {
  const [formData, setFormData] = useState({ question: '', answer: '' });
  const { hasError, error, getFetch } = useFetch();

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = 'http://localhost:4000/api/v1/cards/create';
    ('post');
    await getFetch(url, 'post', formData);
  };

  return (
    <div className="m-12 mb-20">
      <h3 className="text-center text-4xl font-bold py-10">Create new card</h3>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="question"
          value={formData.question}
          label="Question"
          onChange={onchange}
          Icon={<QuestionIcon width="10" fill="#874ccc" />}
        />
        <TextArea
          value={formData.answer}
          name="answer"
          label="Answer"
          size={5}
          onChange={onchange}
        />
        <CategorySelector
          categories={['frances', 'ingles', 'aws']}
          label="Category"
        />
        {hasError && <Message>{error?.message}</Message>}
        <SubmitButton isFetching={true} type="submit">
          Create
        </SubmitButton>
      </form>
    </div>
  );
};
