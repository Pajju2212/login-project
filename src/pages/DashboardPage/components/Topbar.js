import React from "react";
import "./topbar.css";

export default function Topbar({ toggleNotif }) {
  return (
    <div className="topbar">
      <div className="top-title"></div>

      <div className="top-right">
        <span className="icon" onClick={toggleNotif}>🔔</span>
        <span className="icon">🧑‍💼</span>
      </div>
    </div>
  );
}
