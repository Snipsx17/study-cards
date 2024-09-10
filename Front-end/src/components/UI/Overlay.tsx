import { useOverlayContext } from '../../providers/overlay/useOverlay';
import { Modal } from './Modal';

type Props = {
  visible: boolean;
  handleClick?: (isVisible: boolean) => void;
  children?: React.ReactNode;
};

const Overlay = ({ children }: Props) => {
  const { hideOverlay = () => {} } = useOverlayContext() ?? {};

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

export default Overlay;
