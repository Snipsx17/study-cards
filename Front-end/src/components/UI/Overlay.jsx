import PropType from 'prop-types';

const Overlay = ({ visible, handleClick }) => {
  return visible ? (
    <>
      <div
        onClick={() => handleClick(false)}
        className={`w-screen h-full bg-black/50 absolute top-0 left-0`}
      ></div>
    </>
  ) : null;
};

Overlay.propTypes = {
  visible: PropType.bool,
  setIsVisible: PropType.func,
};

export default Overlay;
