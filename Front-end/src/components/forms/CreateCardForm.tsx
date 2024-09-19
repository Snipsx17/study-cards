import { useState } from 'react';
import { SubmitButton } from './button/SubmitButton';
import { Input } from './Input';
import QuestionIcon from '@/assets/question-solid.svg?react';
// import { useFetch } from '@/hooks/useFetch';
import { TextArea } from './TextArea';
import { CategorySelector } from './CategorySelector';

export const CreateCardForm = () => {
  const [formData, setFormData] = useState({ question: '', answer: '' });
  //   const { data, isFetching, hasError, error, getFetch } = useFetch();

  const onchange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="m-12 mb-20">
      <h3 className="text-center text-4xl font-bold py-10">Create new card</h3>
      <form>
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
        <SubmitButton isFetching={false} type="submit">
          Create
        </SubmitButton>
      </form>
    </div>
  );
};
