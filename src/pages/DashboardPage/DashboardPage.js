import React, { useState } from "react";
import "./DashboardPage.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryCards from "./components/SummaryCards";
import FiltersRow from "./components/FiltersRow";
import NotificationPanel from "./components/NotificationPanel";

export default function DashboardPage() {
  const [showNotif, setShowNotif] = useState(false);

  return (
    <div className="dash-root">
      <Sidebar />

      <div className="dash-main">
        <Topbar onBellClick={() => setShowNotif(!showNotif)} />

        <div className="dash-inner">
          <h1 className="dash-title">Dashboard</h1>

          <SummaryCards />

          <FiltersRow />

          <div className="dash-bottom-row">
            <div className="dash-large-card" />
            <div className="dash-large-card" />
          </div>
        </div>
      </div>

      {showNotif && <NotificationPanel />}
    </div>
  );
}
