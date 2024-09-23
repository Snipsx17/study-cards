import { OverlayProps, OverlayProviderProps } from '@/@types/types';
import { useOverlayContext } from '../../providers/overlay/useOverlay';
import { Modal } from './Modal';
import { FC } from 'react';

export const Overlay: FC<OverlayProps> = ({ children }) => {
  const { hideOverlay } = useOverlayContext() as OverlayProviderProps;

  return (
    <>
      <div
        onClick={hideOverlay}
        className={`w-screen h-full bg-black/50 absolute top-0 left-0 flex justify-center items-center z-50 backdrop-blur-sm`}
      >
        <Modal onClose={hideOverlay}>{children}</Modal>
      </div>
    </>
  );
};
