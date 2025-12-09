import React from "react";
import "./sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { id: "dashboard", label: "Dashboard", route: "/dashboard", icon: "📊" },
    {
      id: "admin",
      label: "Admin Management",
      route: "/admin-management",
      icon: "👥",
    },
    {
      id: "payment",
      label: "Payment Management",
      route: "/payment-management",
      icon: "💳",
    },
    { id: "settings", label: "Settings", route: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="side-root">
      <div className="side-logo-area">
        {/* Menu (hamburger) icon like figma */}
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="side-menu">
        {items.map((item) => {
          const active = location.pathname === item.route;
          return (
            <div
              key={item.id}
              className={active ? "side-item active" : "side-item"}
              onClick={() => navigate(item.route)}
            >
              <span className="side-icon">{item.icon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
