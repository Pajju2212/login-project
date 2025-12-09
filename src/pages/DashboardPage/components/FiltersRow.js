import React, { useState } from "react";
import "./filtersrow.css";

export default function FiltersRow() {
  const [active, setActive] = useState("today");

  return (
    <div className="filters-root">
      <button
        className={active === "today" ? "filt-btn active" : "filt-btn"}
        onClick={() => setActive("today")}
      >
        Today
      </button>

      <button
        className={active === "week" ? "filt-btn active" : "filt-btn"}
        onClick={() => setActive("week")}
      >
        Last 7 Days
      </button>

      <button
        className={active === "month" ? "filt-btn active" : "filt-btn"}
        onClick={() => setActive("month")}
      >
        Monthly
      </button>
    </div>
  );
}
