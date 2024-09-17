import { SubmitButton } from './button/SubmitButton';

export const CreateCardForm = () => {
  return (
    <div className="m-12 mb-20">
      <h3 className="text-center text-4xl font-bold py-10">Create new card</h3>
      <form>
        <SubmitButton isFetching={false} type="submit">
          Create
        </SubmitButton>
      </form>
    </div>
  );
};
