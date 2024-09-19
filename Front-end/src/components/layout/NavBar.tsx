import { useUserData } from '@/providers/user/UseUserData';
import { useOverlayContext, useLogin } from '../../providers';
import Button from '../UI/Button';
import UserProfile from '../UI/UserProfile';
import { Login } from '../forms/Login';
import { CreateCardForm } from '../forms/CreateCardForm';

const NavBar = () => {
  const { isLogged } = useLogin() ?? {};
  const { showOverlay = () => {} } = useOverlayContext() ?? {};
  const { user } = useUserData() ?? {};

  return (
    <>
      <nav className="hidden content-center md:flex h-24 ">
        <Button
          text="Create"
          principal
          onClick={() => showOverlay(<CreateCardForm />)}
        />
        {isLogged ? (
          <UserProfile userName={user as string} />
        ) : (
          <Button text="Login" onClick={() => showOverlay(<Login />)} />
        )}
      </nav>
    </>
  );
};

export default NavBar;
