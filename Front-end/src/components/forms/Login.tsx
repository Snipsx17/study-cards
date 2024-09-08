import { FormEvent, useEffect, useState } from 'react';
import { Input } from './Input';
import { useFetch } from '../../hooks/useFetch';
import { useOverlayContext, useLogin } from '../../providers';
import { SubmitButton } from './button/SubmitButton';
import { Message } from '../UI/Message';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { data, isFetching, hasError, error, getFetch } = useFetch();
  const { hideOverlay = () => {} } = useOverlayContext() ?? {};
  const { login = () => {} } = useLogin() ?? {};

  useEffect(() => {
    if (!hasError && data) {
      hideOverlay();
      login(data.userId);
    }
  }, [hasError, data]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getFetch('http://localhost:4000/api/v1/auth/login', formData);
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

      {hasError && <Message>{error?.message}</Message>}

      <SubmitButton isFetching={isFetching} type="submit">
        Login
      </SubmitButton>
    </form>
  );
};
