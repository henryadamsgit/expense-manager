import React from "react";
import "./Transactions.scss";
import TransactionsBar from "../TransactionsBar/TransactionsBar";
import TransactionsCurrent from "../TransactionsCurrent/TransactionsCurrent";
import TransactionsAll from "../TransactionsAll/TransactionsAll";

const Transactions = ({ expenses }) => {
  return (
    <div className="transactions">
      <TransactionsCurrent expenses={expenses} />
      <TransactionsAll expenses={expenses} />
      <TransactionsBar expenses={expenses} />
    </div>
  );
};

export default Transactions;
