/// <reference types="vite-plugin-svgr/client" />
import Logo from '../../assets/logo.svg';
import '../../App.css';
import NavBar from './NavBar';

import NavMobile from './MobileNavBar';

const Header = () => {
  return (
    <header className="bg-purple px-14 py-5 flex items-center justify-between">
      <Logo width="200" />
      <NavBar />
      <NavMobile />
    </header>
  );
};

export default Header;
