import Button from '../UI/Button';
import { Input } from './Input';

export const Login = () => {
  return (
    <form>
      <Input type="email" onChange={() => {}} value="" />
      <input type="password" />
      <Button text="Login" principal onClick={() => {}} />
    </form>
  );
};
