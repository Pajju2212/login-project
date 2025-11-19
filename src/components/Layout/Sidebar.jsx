// src/components/Layout/Sidebar.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Shield, Landmark, Settings, Menu } from "lucide-react";
import "./sidebar.css";

const navItems = [
  { key: "dashboard", labelKey: "dashboard", Icon: Grid },
  { key: "admin", labelKey: "adminManagement", Icon: Shield },
  { key: "payment", labelKey: "paymentManagement", Icon: Landmark },
  { key: "settings", labelKey: "settings", Icon: Settings }
];

export default function Sidebar({ isOpen, toggleSidebar, activeTab, onTabChange }) {
  const { t } = useTranslation(); // <--- use i18n inside component

  return (
    <aside className={`kyos-sidebar ${isOpen ? "open" : "collapsed"}`} aria-expanded={isOpen}>
      <div className="sidebar-top">
        <button className="hamburger" onClick={toggleSidebar} aria-label={t('menu') || 'Toggle menu'}>
          <Menu size={20} />
        </button>
      </div>

      <nav className="sidebar-nav" role="navigation" aria-label={t('mainNavigation') || 'Main'}>
        {navItems.map((item, idx) => {
          const Active = activeTab === item.key;
          const delay = `${idx * 60}ms`;
          return (
            <button
              key={item.key}
              className={`nav-item ${Active ? "active" : ""}`}
              onClick={() => onTabChange(item.key)}
              style={{ transitionDelay: isOpen ? delay : "0ms" }}
              aria-current={Active ? "page" : undefined}
            >
              <div className="icon-wrap" aria-hidden>
                <item.Icon size={18} />
              </div>

              <span
                className="label"
                aria-hidden
                style={{ transitionDelay: isOpen ? `${idx * 80 + 80}ms` : "0ms" }}
              >
                {t(item.labelKey)}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
