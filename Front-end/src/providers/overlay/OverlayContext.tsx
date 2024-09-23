import { createContext, FC, ReactNode, useState } from 'react';

import { OverlayContextProps, OverlayProviderProps } from '@/@types/types';

export const OverlayContext = createContext<OverlayProviderProps | null>(null);

export const OverlayContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [overlayData, setOverlayData] = useState<OverlayContextProps>({
    isVisible: false,
    content: null,
  });

  const showOverlay = (content: ReactNode) => {
    setOverlayData({ isVisible: true, content });
  };

  const hideOverlay = () => {
    setOverlayData({ content: null, isVisible: false });
  };

  return (
    <OverlayContext.Provider
      value={{ ...overlayData, showOverlay, hideOverlay }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
