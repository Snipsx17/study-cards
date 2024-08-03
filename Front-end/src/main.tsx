import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './providers/auth/LoginContext.js';
import storage from './utils/localStorage.js';
import { OverlayContextProvider } from './providers/overlay/OverlayContext.js';

const isLogged = !!storage.get('isLogged');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider initiallyLogged={isLogged}>
      <OverlayContextProvider>
        <App />
      </OverlayContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
