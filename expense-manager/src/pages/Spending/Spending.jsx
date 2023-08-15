import React from "react";
import "./Spending.scss";
import Footer from "../../components/Footer/Footer";
import Transactions from "../../components/Transactions/Transactions";
import TimeBar from "../../components/TimeBar/TimeBar";
import AnalyticsSpending from "../../components/AnalyticsSpending/AnalyticsSpending";
import SpendingBar from "../../components/SpendingBar/SpendingBar";

const Spending = () => {
  return (
    <div className="homepage">
      <h1>Spending</h1>
      <TimeBar />
      <AnalyticsSpending />
      <SpendingBar />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Spending;
