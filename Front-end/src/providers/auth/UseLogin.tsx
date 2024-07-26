import { useContext } from 'react';
import { AuthContext } from './LoginContext';

export const useLogin = () => useContext(AuthContext);
