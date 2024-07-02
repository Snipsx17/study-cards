import React from 'react';

type Props = {
  children: React.ReactNode;
  onClose: (isVisible: boolean) => void;
};

export const Modal = ({ children, onClose }: Props) => {
  return (
    <div
      className="max-w-[300px] max-h-[200px] bg-white rounded-md p-8 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="absolute top-4 right-5 cursor-pointer text-3xl"
        onClick={() => {
          onClose(false);
        }}
      >
        X
      </span>
      {children}
    </div>
  );
};
