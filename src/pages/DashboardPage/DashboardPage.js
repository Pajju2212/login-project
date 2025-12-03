import React, { useState } from "react";
import "./dashboard.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryCards from "./components/SummaryCards";
import FiltersRow from "./components/FiltersRow";
import NotificationPanel from "./components/NotificationPanel";

export default function DashboardPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dash-container">
      <Sidebar />

      <div className="dash-main">
        <Topbar toggleNotif={() => setOpen(!open)} />

        <h1 className="dash-title">Dashboard</h1>

        <SummaryCards />
        <FiltersRow />

        <div className="row">
          <div className="panel-box"></div>
          <div className="panel-box"></div>
        </div>
      </div>

      {open && <NotificationPanel />}
    </div>
  );
}
