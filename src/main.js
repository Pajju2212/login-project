import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import Welcome from './Welcome.jsx';

// Import our styles
import 'antd/dist/reset.css';
import './index.css';

// 1. Import the provider and our config
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // <-- Import the instance

createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(I18nextProvider, {
  i18n: i18n
}, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
  path: "/",
  element: /*#__PURE__*/React.createElement(App, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/welcome",
  element: /*#__PURE__*/React.createElement(Welcome, null)
}))))));
