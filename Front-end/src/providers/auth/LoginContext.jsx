import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children, initiallyLogged }) => {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const authentication = {
    isLogged,
    login: () => setIsLogged(true),
    logout: () => setIsLogged(false),
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
  initiallyLogged: PropTypes.bool,
};
