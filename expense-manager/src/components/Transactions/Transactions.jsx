import React from "react";
import "./Transactions.scss";
import TransactionsBar from "../TransactionsBar/TransactionsBar";
import TransactionsCurrent from "../TransactionsCurrent/TransactionsCurrent";
import TransactionsAll from "../TransactionsAll/TransactionsAll";

const Transactions = () => {
  return (
    <div className="transactions">
      <TransactionsCurrent />
      <TransactionsAll />
      <TransactionsBar />
    </div>
  );
};

export default Transactions;
