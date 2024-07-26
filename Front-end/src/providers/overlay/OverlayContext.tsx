import { createContext, FC, ReactNode, useState } from 'react';

interface OverlayContextProps {
  isVisible: boolean;
  content: ReactNode | null;
}

// !! remove null
export interface OverlayProviderProps extends OverlayContextProps {
  showOverlay: (content: ReactNode) => void;
  hideOverlay: () => void;
}

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
