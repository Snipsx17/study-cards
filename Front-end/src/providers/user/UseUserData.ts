import { useContext } from 'react';
import { userContext } from './userContext';

export const useUserData = () => useContext(userContext);
