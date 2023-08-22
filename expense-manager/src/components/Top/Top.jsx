import React from "react";
import "./Top.scss";
import Add from "../../assets/images/plus.png";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top">
      <h1 className="top--title">Money Manager</h1>
      <Link to="/add">
        <div className="top--box">
          <img src={Add} alt="Add Expense" className="top--img" />
        </div>
      </Link>
    </div>
  );
};

export default Top;
