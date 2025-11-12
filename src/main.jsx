import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Import our styles
import 'antd/dist/reset.css';
import './index.css'; 

// 1. Import the provider and our config
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // <-- Import the instance

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the App component with the provider */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);