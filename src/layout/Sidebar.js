import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-icons">

        {/* Dashboard icon */}
        <div className="icon active">
          <svg width="26" height="26" viewBox="0 0 24 24">
            <rect x="3" y="3" width="8" height="8" rx="2" fill="black"/>
            <rect x="13" y="3" width="8" height="5" rx="2" fill="black"/>
            <rect x="13" y="10" width="8" height="11" rx="2" fill="black"/>
            <rect x="3" y="13" width="8" height="8" rx="2" fill="black"/>
          </svg>
        </div>

        {/* Users icon */}
        <div className="icon">
          <svg width="26" height="26" viewBox="0 0 24 24">
            <circle cx="9" cy="8" r="4" fill="black"/>
            <circle cx="17" cy="10" r="3" fill="black"/>
            <rect x="3" y="14" width="14" height="7" rx="3" fill="black"/>
            <rect x="14" y="15" width="7" height="6" rx="3" fill="black"/>
          </svg>
        </div>

        {/* Payments */}
        <div className="icon">
          <svg width="26" height="26" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="12" rx="3" fill="black"/>
            <rect x="4" y="10" width="6" height="2" rx="1" fill="white"/>
          </svg>
        </div>

        {/* Settings */}
        <div className="icon">
          <svg width="26" height="26" viewBox="0 0 24 24">
            <path fill="black"
              d="M12 8a4 4 0 100 8 4 4 0 000-8zm7.5 4a1 1 0 01-.7.95l-1.5.5a6.96 6.96 0 01-.6 1.4l.8 1.3a1 1 0 01-.1 1.2l-1.5 1.5a1 1 0 01-1.2.1l-1.3-.8c-.45.25-.92.45-1.4.6l-.5 1.5a1 1 0 01-.95.7h-2a1 1 0 01-.95-.7l-.5-1.5a6.96 6.96 0 01-1.4-.6l-1.3.8a1 1 0 01-1.2-.1L2.5 17a1 1 0 01-.1-1.2l.8-1.3a7 7 0 010-2.8l-.8-1.3a1 1 0 01.1-1.2L4.5 7a1 1 0 011.2-.1l1.3.8c.45-.25.92-.45 1.4-.6l.5-1.5A1 1 0 0110 5h2a1 1 0 01.95.7l.5 1.5c.48.15.95.35 1.4.6l1.3-.8a1 1 0 011.2.1l1.5 1.5a1 1 0 01.1 1.2l-.8 1.3c.25.45.45.92.6 1.4l1.5.5c.42.14.7.52.7.95z"
            />
          </svg>
        </div>

      </div>
    </aside>
  );
}
