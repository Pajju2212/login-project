import React, { useState } from "react";
import "./filtersrow.css";

export default function FiltersRow() {
  const [active, setActive] = useState("today");

  return (
    <div className="filter-row">
      <button
        className={active === "today" ? "f-btn active" : "f-btn"}
        onClick={() => setActive("today")}
      >
        Today
      </button>

      <button
        className={active === "week" ? "f-btn active" : "f-btn"}
        onClick={() => setActive("week")}
      >
        Last 7 Days
      </button>

      <button
        className={active === "month" ? "f-btn active" : "f-btn"}
        onClick={() => setActive("month")}
      >
        Monthly
      </button>
    </div>
  );
}
