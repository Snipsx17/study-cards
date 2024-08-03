/// <reference types="vite-plugin-svgr/client" />

import '../../App.css';
import { useOverlayContext } from '../../providers/overlay/useOverlay';

import Overlay from '../UI/Overlay';
import { Menu } from './Menu';

import Logo from '@/assets/logo.svg?react';

const Header = () => {
  const { content, isVisible } = useOverlayContext() ?? {};

  return (
    <>
      <header className="bg-purple px-14 py-5 flex items-center justify-between">
        <Logo width="200" />
        <Menu />
      </header>
      {isVisible && <Overlay visible={isVisible}>{content}</Overlay>}
    </>
  );
};

export default Header;
