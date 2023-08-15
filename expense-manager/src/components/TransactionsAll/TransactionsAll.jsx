import React from "react";
import "./TransactionsAll.scss";
import { NavLink } from "react-router-dom";

const TransactionsAll = () => {
  return (
    <NavLink to="/spending">
      <div className="all--text">See All</div>
    </NavLink>
  );
};

export default TransactionsAll;
