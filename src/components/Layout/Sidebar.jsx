import React from "react";
import {
  LayoutDashboard,
  ShieldCheck,
  Landmark,
  Settings,
  Menu
} from "lucide-react";

const Sidebar = ({ activeTab, onTabChange, isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: <LayoutDashboard size={22} /> },
    { id: "admin", name: "Admin Mgmt", icon: <ShieldCheck size={22} /> },
    { id: "payment", name: "Payments", icon: <Landmark size={22} /> },
    { id: "settings", name: "Settings", icon: <Settings size={22} /> },
  ];

  return (
    <div className={`sidebar-container ${isOpen ? "expanded" : ""}`}>
      
      {/* TOP AREA — Hamburger instead of Logo */}
      <div className="sidebar-top">
        <Menu
          size={26}
          className="sidebar-hamburger"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />
      </div>
      
      <p></p>
      <p></p>
      <p></p>

      {/* NAVIGATION MENU */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => onTabChange(item.id)}
            title={isOpen ? "" : item.name}
          >
            <div className="icon-box">{item.icon}</div>
            <span className="nav-label">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
