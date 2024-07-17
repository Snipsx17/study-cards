import { Children, useState } from 'react';
import { useOverlayContext } from '../../providers/overlay/useOverlay';
import { Modal } from './Modal';

type Props = {
  visible: boolean;
  handleClick?: (isVisible: boolean) => void;
  children?: React.ReactNode;
};

const Overlay = ({ children, visible }: Props) => {
  const { hideOverlay = () => {} } = useOverlayContext() ?? {};

  return visible ? (
    <>
      <div
        onClick={hideOverlay}
        className={`w-screen h-full bg-black/50 absolute top-0 left-0 flex justify-center items-center`}
      >
        <Modal onClose={hideOverlay}>{children}</Modal>
      </div>
    </>
  ) : null;
};

export default Overlay;
