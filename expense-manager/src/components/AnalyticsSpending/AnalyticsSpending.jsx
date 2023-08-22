import React from "react";
import "./AnalyticsSpending.scss";
import { Bar } from "react-chartjs-2";

const AnalyticsSpending = ({ barData }) => {
  return (
    <div className="analyticsSpending">
      <Bar data={barData} />
    </div>
  );
};

export default AnalyticsSpending;
