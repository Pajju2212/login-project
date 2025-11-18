import React, { useState } from 'react';
import { Eye, EyeOff, Menu, Bell, Search, Plus } from 'lucide-react'; 
import Sidebar from './components/Layout/Sidebar';
import AdminTable from './components/AdminTable'; 
import './index.css'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // 1. SIDEBAR STATE
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 2. LANGUAGE STATE
  const [language, setLanguage] = useState('EN'); // 'EN' or 'KN'

  // --- LOGIN PAGE ---
  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-banner">
          <div className="circle-large"></div>
          <div className="circle-yellow"></div>
          <div className="banner-text">KyoSync</div>
        </div>

        <div className="login-container">
          {/* Fixed EN Badge Position */}
          <div className="lang-badge-container">
             <span className="lang-badge">EN</span>
          </div>
          
          <h1 className="login-title">Hi Administrator</h1>

          <div className="input-group">
            <input type="text" placeholder="Admin ID" className="login-input" />
          </div>

          <div className="input-group">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Admin Password" 
              className="login-input" 
            />
            <div className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <div className="form-footer">
             <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                <input type="checkbox" id="rem" style={{cursor:'pointer'}} />
                <label htmlFor="rem" style={{fontSize:'14px', color:'#555', cursor:'pointer'}}>Remember me</label>
             </div>
             <button className="signin-btn" onClick={() => setIsLoggedIn(true)}>Sign In</button>
          </div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD ---
  return (
    <div className="dashboard-layout">
      {/* Sidebar receives the Open state */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isOpen={isSidebarOpen} 
      />

      {/* Main Wrapper shifts when Sidebar expands */}
      <div className={`main-wrapper ${isSidebarOpen ? 'expanded' : ''}`}>
        
        {/* TOP HEADER */}
        <header className="top-header">
          <div className="header-left">
             {/* MENU BUTTON: Toggles Sidebar */}
             <Menu 
               size={26} 
               className="hamburger-icon" 
               onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
             />
             <h2 style={{fontSize:'20px', fontWeight:'bold'}}>
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'admin' && 'Admin Management'}
                {activeTab === 'payment' && 'Payment Management'}
                {activeTab === 'settings' && 'Settings'}
             </h2>
          </div>

          <div className="header-right">
             {/* LANGUAGE SWITCHER (EN / KN) */}
             <div style={{display:'flex', gap:'5px'}}>
                <button 
                    className={`lang-toggle-btn ${language === 'EN' ? 'active' : ''}`}
                    onClick={() => setLanguage('EN')}
                >EN</button>
                <button 
                    className={`lang-toggle-btn ${language === 'KN' ? 'active' : ''}`}
                    onClick={() => setLanguage('KN')}
                >KN</button>
             </div>
             
             <Bell size={24} style={{cursor:'pointer'}} />
          </div>
        </header>

        {/* CONTENT */}
        <main className="content-area">
          
          {/* VIEW 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div>
               <div className="dashboard-grid">
                 <div className="stat-card">
                    <span style={{color:'#888'}}>Total Revenue</span>
                    <h2>$8,800</h2>
                 </div>
                 <div className="stat-card">
                    <span style={{color:'#888'}}>Rewards Points</span>
                    <h2>62000 RP</h2>
                 </div>
                 <div className="stat-card">
                    <span style={{color:'#888'}}>Referrals</span>
                    <h2>542</h2>
                 </div>
              </div>
            </div>
          )}

          {/* VIEW 2: ADMIN */}
          {activeTab === 'admin' && (
            <div>
              <div style={{borderBottom:'1px solid #009ef7', margin:'20px 0'}}></div>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
                 <span style={{color:'#009ef7', fontWeight:'bold', alignSelf:'center'}}>Selected : None</span>
                 <div style={{display:'flex', gap:'10px'}}>
                    <div style={{border:'1px solid #ddd', borderRadius:'4px', padding:'5px 10px', display:'flex', width:'300px', background:'white'}}>
                        <input style={{border:'none', outline:'none', width:'100%'}} placeholder="Search Business Name..." />
                        <Search size={18} color="#999"/>
                    </div>
                    <button style={{background:'#007bff', border:'none', borderRadius:'4px', width:'35px', color:'white', cursor:'pointer'}}>
                        <Plus size={20} />
                    </button>
                 </div>
              </div>
              <AdminTable />
            </div>
          )}

          {/* VIEW 3: PAYMENT */}
          {activeTab === 'payment' && (
            <div>
               <div style={{borderBottom:'1px solid #009ef7', margin:'20px 0'}}></div>
               <div className="payment-row">
                  <div className="pay-pill">Today Total Payout : <b>$1092</b></div>
                  <div className="pay-pill">Today Revenue : <b>$703</b></div>
                  <div className="pay-pill">Next Release In : <b>2 hours</b></div>
               </div>
               
               <div style={{marginTop:'30px', background:'white', padding:'40px', borderRadius:'8px', textAlign:'center', color:'#888'}}>
                  Payment Table Component will go here...
               </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;