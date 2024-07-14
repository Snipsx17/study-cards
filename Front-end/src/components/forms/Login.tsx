import { FormEvent, useState } from 'react';
import Button from '../UI/Button';
import { Input } from './Input';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="email"
        name="email"
        onChange={onChange}
        value={formData.email}
      />
      <Input
        type="password"
        name="password"
        onChange={onChange}
        value={formData.password}
      />
      <Button
        text="Login"
        type="submit"
        principal
        styles="border border-purple bg-purple"
      />
    </form>
  );
};
