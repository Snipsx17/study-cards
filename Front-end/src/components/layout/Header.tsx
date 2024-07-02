/// <reference types="vite-plugin-svgr/client" />
import Logo from '../../assets/logo.svg';
import '../../App.css';
import NavBar from './NavBar';

import NavMobile from './MobileNavBar';
import Overlay from '../UI/Overlay';
import { ReactNode, useState } from 'react';

const Header = () => {
  const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);
  const [overlayContent, setOverlayContent] = useState<ReactNode | null>(null);

  const overlayHandler = (isVisible: boolean, content: ReactNode) => {
    setIsVisibleOverlay(isVisible);
    setOverlayContent(content);
  };

  return (
    <>
      <header className="bg-purple px-14 py-5 flex items-center justify-between">
        <Logo width="200" />
        <NavBar overlayHandler={overlayHandler} />
        <NavMobile />
      </header>
      <Overlay visible={isVisibleOverlay} handleClick={setIsVisibleOverlay}>
        {overlayContent}
      </Overlay>
    </>
  );
};

export default Header;
