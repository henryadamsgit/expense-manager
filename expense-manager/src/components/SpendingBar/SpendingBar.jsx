import React from "react";
import "./SpendingBar.scss";

const SpendingBar = () => {
  return (
    <div className="spendingBar">
      <div className="spendingBar--a">
        <div className="icon">
          <img src="icon_a.png" alt="" />
        </div>
        <p className="companyName">Company A</p>
        <h3 className="price">$123</h3>
      </div>
      <div className="spendingBar--b">
        <div className="icon">
          <img src="icon_b.png" alt="" />
        </div>
        <p className="companyName">Company B</p>
        <h3 className="price">$56</h3>
      </div>
    </div>
  );
};

export default SpendingBar;
