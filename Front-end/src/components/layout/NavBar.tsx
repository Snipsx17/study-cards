import useLogin from '../../providers/auth/UseLogin';
import Button from '../UI/Button';
import UserProfile from '../UI/UserProfile';
import { Login } from '../forms/Login';

type Props = {
  overlayHandler: (isVisible: boolean, content: React.ReactNode) => void;
};

const NavBar = ({ overlayHandler }: Props) => {
  const auth = useLogin();

  return (
    <>
      <nav className="hidden content-center md:flex h-24 ">
        <Button
          text="Create"
          principal
          onClick={() => overlayHandler(true, <p>Create card</p>)}
        />
        {auth?.isLogged ? (
          <UserProfile userName="Uberth" />
        ) : (
          <Button
            text="Login"
            onClick={() => overlayHandler(true, <Login />)}
          />
        )}
      </nav>
    </>
  );
};

export default NavBar;
