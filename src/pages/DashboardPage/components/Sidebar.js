import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="side-item active" onClick={() => navigate("/dashboard")}>
        📊
      </div>

      <div className="side-item" onClick={() => navigate("/users")}>
        👥
      </div>

      <div className="side-item" onClick={() => navigate("/payments")}>
        💳
      </div>

      <div className="side-item" onClick={() => navigate("/settings")}>
        ⚙️
      </div>
    </div>
  );
}
