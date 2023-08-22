import React from "react";
import "./TransactionsBar.scss";

const TransactionBar = ({ expenses }) => {
  const sortedTransactions = expenses.sort((a, b) =>
    b.transaction_date.localeCompare(a.transaction_date)
  );

  const recentTransactions = sortedTransactions.slice(0, 10);

  return (
    <div className="transaction-bar-container">
      <div className="transaction-bar">
        {recentTransactions.map((transaction, index) => (
          <div key={index} className="transBar">
            <span className="company">{transaction.company}</span>
            <span className="price">£{transaction.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionBar;
