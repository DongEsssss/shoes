import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './asset/style/global.css'
import Pageup from 'component/pageup';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Pageup />
    </BrowserRouter>
  </React.StrictMode>
);
