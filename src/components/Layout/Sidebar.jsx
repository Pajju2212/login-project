import React from 'react';
import { LayoutDashboard, ShieldCheck, Landmark, Settings } from 'lucide-react';

const Sidebar = ({ activeTab, onTabChange, isOpen }) => {
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={24} /> },
    { id: 'admin',     name: 'Admin Mgmt', icon: <ShieldCheck size={24} /> },
    { id: 'payment',   name: 'Payments',   icon: <Landmark size={24} /> },
    { id: 'settings',  name: 'Settings',   icon: <Settings size={24} /> },
  ];

  return (
    // Dynamically add 'expanded' class based on isOpen prop
    <div className={`sidebar-container ${isOpen ? 'expanded' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-circle"></div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div 
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
            title={isOpen ? '' : item.name} // Tooltip if collapsed
          >
            {/* The Icon Box */}
            <div className="icon-box">
              {item.icon}
            </div>
            
            {/* The Text Label (Visible only when isOpen is true via CSS) */}
            <span className="nav-label">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;