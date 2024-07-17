import useLogin from '../../providers/auth/useLogin';
import { useOverlayContext } from '../../providers/overlay/useOverlay';
import Button from '../UI/Button';
import UserProfile from '../UI/UserProfile';
import { Login } from '../forms/Login';

type Props = {
  overlayHandler: (isVisible: boolean, content: React.ReactNode) => void;
};

const NavBar = () => {
  const auth = useLogin();
  const { showOverlay = () => {} } = useOverlayContext() ?? {};

  return (
    <>
      <nav className="hidden content-center md:flex h-24 ">
        <Button
          text="Create"
          principal
          onClick={() => showOverlay(<p>Create</p>)}
        />
        {auth?.isLogged ? (
          <UserProfile userName="Uberth" />
        ) : (
          <Button text="Login" onClick={() => showOverlay(<Login />)} />
        )}
      </nav>
    </>
  );
};

export default NavBar;
