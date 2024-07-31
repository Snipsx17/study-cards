import { useOverlayContext, useLogin } from '../../providers';
import Button from '../UI/Button';
import UserProfile from '../UI/UserProfile';
import { Login } from '../forms/Login';

const NavBar = () => {
  const { isLogged } = useLogin() ?? {};
  const { showOverlay = () => {} } = useOverlayContext() ?? {};

  return (
    <>
      <nav className="hidden content-center md:flex h-24 ">
        <Button
          text="Create"
          principal
          onClick={() => showOverlay(<p>Create</p>)}
        />
        {!isLogged ? (
          <UserProfile userName="Uberth" />
        ) : (
          <Button text="Login" onClick={() => showOverlay(<Login />)} />
        )}
      </nav>
    </>
  );
};

export default NavBar;
