import React, { useState } from "react";
import "./TimeBar.scss";

const TimeBar = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("daily");

  const handleTimePeriodChange = (timePeriod) => {
    setSelectedTimePeriod(timePeriod);
  };

  return (
    <div className="timeBar">
      <div
        className={`timeBar--text ${
          selectedTimePeriod === "daily" ? "selected" : ""
        }`}
        onClick={() => handleTimePeriodChange("daily")}
      >
        Daily
      </div>
      <div
        className={`timeBar--text ${
          selectedTimePeriod === "weekly" ? "selected" : ""
        }`}
        onClick={() => handleTimePeriodChange("weekly")}
      >
        Weekly
      </div>
      <div
        className={`timeBar--text ${
          selectedTimePeriod === "monthly" ? "selected" : ""
        }`}
        onClick={() => handleTimePeriodChange("monthly")}
      >
        Monthly
      </div>
      <div
        className={`timeBar--text ${
          selectedTimePeriod === "yearly" ? "selected" : ""
        }`}
        onClick={() => handleTimePeriodChange("yearly")}
      >
        Yearly
      </div>
    </div>
  );
};

export default TimeBar;
