import React from "react";
import "./summarycards.css";

export default function SummaryCards() {
  return (
    <div className="summary-row">
      <div className="card">
        <p className="label">Total Revenue</p>
        <h2 className="value">₹ 4,20,000</h2>
      </div>

      <div className="card">
        <p className="label">Reward Points</p>
        <h2 className="value">1,800</h2>
      </div>

      <div className="card">
        <p className="label">Referrals</p>
        <h2 className="value">67</h2>
      </div>

      <div className="card add">
        <span className="plus">+</span>
      </div>
    </div>
  );
}
