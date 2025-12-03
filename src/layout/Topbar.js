import React from "react";
import "./Topbar.css";

export default function Topbar({ openNotif }) {
  return (
    <div className="topbar">
      <div className="left">
        <svg width="28" height="28" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="2" fill="black"/>
          <rect x="3" y="11" width="18" height="2" fill="black"/>
          <rect x="3" y="16" width="18" height="2" fill="black"/>
        </svg>
        <h2>Dashboard</h2>
      </div>

      <div className="right">
        <svg onClick={openNotif} width="26" height="26" viewBox="0 0 24 24" className="notif-icon">
          <path fill="black"
            d="M12 2a6 6 0 016 6v3.5l1.8 3a1 1 0 01-.86 1.5H5.06a1 1 0 01-.86-1.5l1.8-3V8a6 6 0 016-6z"
          />
        </svg>

        <div className="profile-circle"></div>
      </div>
    </div>
  );
}
