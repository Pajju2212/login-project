import React from "react";
import "./summarycards.css";

export default function SummaryCards() {
  return (
    <div className="sum-row">
      <div className="sum-card">
        <div className="sum-label">Total Revenue</div>
        <div className="sum-value">₹ 4,20,000</div>
      </div>

      <div className="sum-card">
        <div className="sum-label">Reward Points</div>
        <div className="sum-value">1,800</div>
      </div>

      <div className="sum-card">
        <div className="sum-label">Referrals</div>
        <div className="sum-value">67</div>
      </div>

      <div className="sum-card add-card">
        <span className="add-plus">+</span>
      </div>
    </div>
  );
}
