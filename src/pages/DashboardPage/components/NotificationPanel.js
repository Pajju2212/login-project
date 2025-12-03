import React from "react";
import "./NotificationPanel.css";

export default function NotificationPanel() {
  return (
    <div className="notif-panel">
      <div className="notif-header">
        <h3>Notifications</h3>
        <span className="clear">Clear All</span>
      </div>

      <div className="notif-body">
        <p>No notifications right now.</p>
      </div>
    </div>
  );
}
