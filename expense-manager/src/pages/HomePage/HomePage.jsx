import React from "react";
import "./HomePage.scss";
import Footer from "../../components/Footer/Footer";
import Balance from "../../components/Balance/Balance";
import Analytics from "../../components/Analytics/Analytics";
import Transactions from "../../components/Transactions/Transactions";
import Top from "../../components/Top/Top";

const HomePage = ({ expenses, barData }) => {
  return (
    <div className="homepage">
      <h1 className="title">HomePage</h1>
      <Top />
      <Balance expenses={expenses} />
      <Analytics expenses={expenses} barData={barData} />
      <Transactions expenses={expenses} />
      <Footer />
    </div>
  );
};

export default HomePage;
