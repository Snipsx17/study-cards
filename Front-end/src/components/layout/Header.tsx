/// <reference types="vite-plugin-svgr/client" />
import Logo from '../../assets/logo.svg';
import '../../App.css';
import NavBar from './NavBar';

import NavMobile from './MobileNavBar';
import Overlay from '../UI/Overlay';
import { useEffect, useState } from 'react';
import Button from '../UI/Button';
import { useOverlayContext } from '../../providers/overlay/useOverlay';

const Header = () => {
  const { content, isVisible } = useOverlayContext() ?? {};

  return (
    <>
      <header className="bg-purple px-14 py-5 flex items-center justify-between">
        <Logo width="200" />
        <NavBar />
        <NavMobile />
      </header>
      {/* <Overlay visible={isVisible} children={content} /> */}
      {isVisible && <Overlay visible={isVisible} children={content} />}
    </>
  );
};

export default Header;
