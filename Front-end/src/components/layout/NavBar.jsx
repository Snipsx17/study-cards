import useLogin from '../../providers/auth/UseLogin';
import Button from '../UI/Button';
import UserProfile from '../UI/UserProfile';

const NavBar = () => {
  const auth = useLogin();

  return (
    <nav className="hidden content-center md:flex h-24 ">
      <Button text="Create" principal />
      {auth.isLogged ? (
        <UserProfile userName="Uberth" />
      ) : (
        <Button text="Login" />
      )}
    </nav>
  );
};

export default NavBar;
