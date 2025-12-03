import React from "react";
import "./StatCard.css";

export default function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <h2 className="stat-value">{value}</h2>
      <p className="stat-title">{title}</p>
    </div>
  );
}
