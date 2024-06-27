import { useState } from 'react';
import useLogin from '../../providers/auth/UseLogin';
import Button from '../UI/Button';
import Overlay from '../UI/Overlay';
import UserProfile from '../UI/UserProfile';

const NavBar = () => {
  const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);
  const auth = useLogin();

  return (
    <>
      <nav className="hidden content-center md:flex h-24 ">
        <Button
          text="Create"
          principal
          onClick={() => setIsVisibleOverlay(true)}
        />
        {auth?.isLogged ? (
          <UserProfile userName="Uberth" />
        ) : (
          <Button text="Login" onClick={() => {}} />
        )}
      </nav>
      <Overlay visible={isVisibleOverlay} handleClick={setIsVisibleOverlay} />
    </>
  );
};

export default NavBar;
