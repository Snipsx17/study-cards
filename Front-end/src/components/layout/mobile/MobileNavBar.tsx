import { useLogin, useOverlayContext } from '@/providers';
import { useUserData } from '@/providers/user/UseUserData';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Login } from '../../forms/Login';
import { UserName } from './UserName';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showOverlay = () => {} } = useOverlayContext() ?? {};
  const { user } = useUserData() ?? {};
  const { isLogged } = useLogin() ?? {};
  const { logout = () => {} } = useLogin() ?? {};

  return (
    <div className="md:hidden z-10">
      <Hamburger color="#fff" toggled={isOpen} toggle={setIsOpen} size={35} />
      {
        <ul
          className="fixed top-[85px] right-0 w-full bg-slate-100 text-center h-screen p-10 transition-all duration-300 drop-shadow-md"
          style={{ right: `${isOpen ? '0' : '-100vw'}` }}
        >
          {isLogged ? <UserName userName={user as string} /> : null}
          <li className="mb-5">
            <a
              className="text-4xl text-black uppercase"
              onClick={() => {
                showOverlay(<p>Create</p>);
                setIsOpen(false);
              }}
            >
              Create
            </a>
          </li>
          <li className="mb-5">
            {isLogged ? (
              <a
                className="text-4xl text-black uppercase"
                onClick={async () => {
                  await logout();
                  setIsOpen(false);
                }}
              >
                Logout
              </a>
            ) : (
              <a
                className="text-4xl text-black uppercase"
                onClick={() => {
                  showOverlay(<Login />);
                  setIsOpen(false);
                }}
              >
                Login
              </a>
            )}
          </li>
        </ul>
      }
    </div>
  );
};

export default NavMobile;
