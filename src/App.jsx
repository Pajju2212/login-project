import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff, Bell, Search, Plus, Menu } from "lucide-react";
import Sidebar from "./components/Layout/Sidebar";
import Admin from "./pages/Admin"; 
import Settings from "./pages/Settings";
import "./index.css";
import Login from "./pages/Login";


function App() {
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sidebar open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [language, setLanguage] = useState("en");

  // Login state
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // Change i18n language when language state changes
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "kr" : "en");
  };

 // ---------------------------------------
// LOGIN PAGE
// ---------------------------------------
if (!isLoggedIn) {
  return (
    <Login
      onSuccess={() => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      }}
      language={language}
      toggleLanguage={toggleLanguage}
      t={t}
    />
  );
}

  // ---------------------------------------
  // DASHBOARD PAGE
  // ---------------------------------------
  return (
    <div className={`dashboard-layout ${darkMode ? 'dark' : ''}`}>
      
      {/* SIDEBAR */}
      <Sidebar
      activeTab={activeTab}
      onTabChange={setActiveTab}
      isOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      t={t}   /* pass translator */
      />

      {/* MAIN CONTENT */}
      <div className={`main-wrapper ${isSidebarOpen ? "expanded" : ""}`}>
        
        {/* TOP HEADER */}
        <header className="top-header">
          <div className="header-left">
            {/* This hamburger is only for mobile or small screens if needed */}
            

            <h2 className="header-title">
              {activeTab === "dashboard" && t("dashboard")}
              {activeTab === "admin" && t("adminManagement")}
              {activeTab === "payment" && t("paymentManagement")}
              {activeTab === "settings" && t("settings")}
            </h2>
          </div>

          <div className="header-right">
            <div className="lang-switcher">
              <button className="lang-toggle-btn" onClick={toggleLanguage}>
                {language.toUpperCase()}
              </button>
            </div>

            <Bell size={24} className="notification-icon" />
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="content-area">

          {/* VIEW: DASHBOARD */}
          {activeTab === "dashboard" && (
            <div>
              <div className="dashboard-grid">
                <div className="stat-card">
                  <span>{t("totalRevenue")}</span>
                  <h2>$8,800</h2>
                </div>

                <div className="stat-card">
                  <span>{t("rewardsPoints")}</span>
                  <h2>62,000 RP</h2>
                </div>

                <div className="stat-card">
                  <span>{t("referrals")}</span>
                  <h2>542</h2>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: ADMIN */}
          {activeTab === "admin" && (
            <div>
              <div className="section-divider"></div>

              <div className="admin-header">
                <span className="selected-count">Selected : None</span>

                <div className="admin-actions">
                  <div className="search-box">
                    <input
                      placeholder={t("searchBusinessName")}
                      className="search-input"
                    />
                    <Search size={18} className="search-icon" />
                  </div>

                  <button className="add-btn">
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <Admin/>
            </div>
          )}

          {/* VIEW: PAYMENT */}
          {activeTab === "payment" && (
            <div>
              <div className="section-divider"></div>

              <div className="payment-row">
                <div className="pay-pill">
                  {t("todayTotalPayout")}: <b>$1092</b>
                </div>
                <div className="pay-pill">
                  {t("todayRevenue")}: <b>$703</b>
                </div>
                <div className="pay-pill">
                  {t("nextReleaseIn")}: <b>2 hours</b>
                </div>
              </div>

              <div className="payment-placeholder">
                Payment Table Component will go here...
              </div>
            </div>
          )}

          {/* VIEW: SETTINGS */}
          {activeTab === "settings" && (
            <div>
              <div className="section-divider"></div>

              <Settings onLogout={() => {
                setIsLoggedIn(false);
                localStorage.removeItem('isLoggedIn');
              }} darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
