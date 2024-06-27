import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './providers/auth/LoginContext.js';
import storage from './utils/localStorage.js';

const isLogged = storage.get('auth');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider initiallyLogged={isLogged}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
