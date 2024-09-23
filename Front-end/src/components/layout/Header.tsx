/// <reference types="vite-plugin-svgr/client" />

import { useOverlayContext } from '../../providers/overlay/useOverlay';

import { Overlay } from '../UI/Overlay';
import { Menu } from './Menu';

import { OverlayProviderProps } from '@/@types/types';

import Logo from '@/assets/logo.svg?react';

export const Header = () => {
  const { content, isVisible } = useOverlayContext() as OverlayProviderProps;

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
