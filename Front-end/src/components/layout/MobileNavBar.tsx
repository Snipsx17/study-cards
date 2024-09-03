import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden z-10">
      <Hamburger color="#fff" toggled={isOpen} toggle={setIsOpen} size={35} />
      {
        <ul
          className="fixed top-[85px] right-0 w-full bg-slate-100 text-center h-screen p-10 transition-all duration-300 drop-shadow-md"
          style={{ right: `${isOpen ? '0' : '-100vw'}` }}
        >
          <li className="mb-5">
            <a className="text-4xl text-black uppercase">Create</a>
          </li>
          <li className="mb-5">
            <a className="text-4xl text-black uppercase">Login</a>
          </li>
        </ul>
      }
    </div>
  );
};

export default NavMobile;
