type Props = {
  visible: boolean;
  handleClick: (isVisible: boolean) => void;
};

const Overlay = ({ visible, handleClick }: Props) => {
  return visible ? (
    <>
      <div
        onClick={() => handleClick(false)}
        className={`w-screen h-full bg-black/50 absolute top-0 left-0`}
      ></div>
    </>
  ) : null;
};

export default Overlay;
