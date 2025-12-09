import React from "react";
import "./topbar.css";

export default function Topbar({ onBellClick }) {
  return (
    <div className="topbar-root">
      <div></div>
      <div className="topbar-right">
        <div className="topbar-bell" onClick={onBellClick}>
          🔔
        </div>
        
      </div>
    </div>
  );
}
