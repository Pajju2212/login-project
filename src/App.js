import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PaymentsPage from "./pages/PaymentsPage/PaymentsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />

      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Main sections */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin-management" element={<UsersPage />} />
        <Route path="/payment-management" element={<PaymentsPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;