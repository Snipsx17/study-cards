import React from 'react';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: Props) => {
  return (
    <div
      className=" bg-white rounded-md relative ease-in-out duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="absolute top-6 right-8 cursor-pointer text-3xl"
        onClick={onClose}
      >
        X
      </span>
      {children}
    </div>
  );
};
