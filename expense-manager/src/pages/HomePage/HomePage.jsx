import React from "react";
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import Balance from "../../components/Balance/Balance";
import Analytics from "../../components/Analytics/Analytics";
import Transactions from "../../components/Transactions/Transactions";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Balance />
      <Analytics />
      <Transactions />
      <Footer />
    </div>
  );
};
