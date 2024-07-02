type Props = {
  visible: boolean;
  handleClick: (isVisible: boolean) => void;
  children?: React.ReactNode;
};

const Overlay = ({ visible, handleClick, children }: Props) => {
  return visible ? (
    <>
      <div
        onClick={() => {
          handleClick(false);
        }}
        className={`w-screen h-full bg-black/50 absolute top-0 left-0 flex justify-center items-center`}
      >
        <div
          className="max-w-[300px] max-h-[200px] bg-white rounded-md	p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  ) : null;
};

export default Overlay;
