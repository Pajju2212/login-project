import React from "react";
import "./NotificationPanel.css";

export default function NotificationPanel() {
  return (
    <div className="notif-root">
      <div className="notif-header">
        <span className="notif-title">Notifications</span>
        <span className="notif-clear">Clear all</span>
      </div>

      <div className="notif-content">
        <p>No new alerts</p>
      </div>
    </div>
  );
}
