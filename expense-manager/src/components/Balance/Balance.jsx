import React from "react";
import "./Balance.scss";

const Balance = () => {
  return (
    <div className="balance">
      <p className="text">Your Current Balance:</p>
      <div className="balance--value">
        <h1 className="text">£1234.01</h1>
      </div>
    </div>
  );
};

export default Balance;
