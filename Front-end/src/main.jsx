import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './providers/auth/LoginContext.jsx';
import storage from './utils/localStorage.jsx';

const isLogged = storage.get('auth');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider initiallyLogged={isLogged}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
