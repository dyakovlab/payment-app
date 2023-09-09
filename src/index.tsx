import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStateProvider} from './context/GlobalStateProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App/>
    </GlobalStateProvider>
  </React.StrictMode>
);

reportWebVitals();
