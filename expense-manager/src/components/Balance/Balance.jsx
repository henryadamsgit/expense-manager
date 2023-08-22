import React from "react";
import "./Balance.scss";

const Balance = ({ expenses }) => {
  const totalBalance = expenses.reduce(
    (total, expenses) => total + expenses.price,
    0
  );

  return (
    <div className="balance">
      <p className="text">Your Current Balance:</p>
      <div className="balance--value">
        <h1 className="text">£{totalBalance}</h1>
      </div>
    </div>
  );
};

export default Balance;
