import React from "react";
import "./Balance.scss";

const Balance = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.price),
    0
  );

  return (
    <div className="balance">
      <p className="text">Total Spent:</p>
      <div className="balance--value">
        <h1 className="text">£{totalExpenses.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Balance;
