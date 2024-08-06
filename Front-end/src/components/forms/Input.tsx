type Props = {
  type: string;
  placeHolder?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, placeHolder, value, onChange, name }: Props) => {
  return (
    <div className="w-full">
      <input
        className="border  border-purple"
        type={type}
        placeholder={placeHolder || ''}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
