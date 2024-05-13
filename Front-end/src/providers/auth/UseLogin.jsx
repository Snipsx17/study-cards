import { useContext } from 'react';
import { AuthContext } from './LoginContext';

const useLogin = () => useContext(AuthContext);

export default useLogin;
