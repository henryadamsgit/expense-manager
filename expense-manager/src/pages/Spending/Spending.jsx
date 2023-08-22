import React from "react";
import "./Spending.scss";
import Footer from "../../components/Footer/Footer";
import Transactions from "../../components/Transactions/Transactions";
import TimeBar from "../../components/TimeBar/TimeBar";
import AnalyticsSpending from "../../components/AnalyticsSpending/AnalyticsSpending";
import SpendingBar from "../../components/SpendingBar/SpendingBar";
import Top from "../../components/Top/Top";

const Spending = ({ expenses }) => {
  return (
    <div className="homepage">
      <h1 className="title">Spending</h1>
      <Top />
      <TimeBar />
      <AnalyticsSpending />
      {/* <SpendingBar /> */}
      <Transactions expenses={expenses} />
      <Footer />
    </div>
  );
};

export default Spending;
