import { useContext } from 'react';
import { userContext } from './UserContext';

export const useUserData = () => useContext(userContext);
