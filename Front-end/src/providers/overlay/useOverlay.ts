import { useContext } from 'react';
import { OverlayContext } from './OverlayContext';

export const useOverlayContext = () => useContext(OverlayContext);
