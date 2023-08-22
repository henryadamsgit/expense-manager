import React from "react";
import "./TransactionsBar.scss";

const TransactionBar = ({ expenses }) => {
  const sortedTransactions = expenses.sort((a, b) =>
    b.transaction_date.localeCompare(a.transaction_date)
  );

  const recentTransactions = sortedTransactions.slice(0, 2);

  return (
    <div className="transaction-bar">
      {recentTransactions.map((transaction, index) => (
        <div key={index} className="transBar">
          <span className="company">{transaction.company}</span>
          <span className="price">£{transaction.price}</span>
        </div>
      ))}
    </div>
  );
};

export default TransactionBar;

// import React from "react";
// import "./TransactionsBar.scss";

// const TransactionsBar = () => {
//   return (
//     <>
//       <div className="transBar">TransactionsBar</div>
//       <div className="transBar--b">TransactionsBar</div>
//     </>
//   );
// };

// export default TransactionsBar;
