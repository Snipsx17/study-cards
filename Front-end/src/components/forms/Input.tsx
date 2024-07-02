type Props = {
  type: string;
  placeHolder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ type, placeHolder, value, onChange }: Props) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeHolder || ''}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
