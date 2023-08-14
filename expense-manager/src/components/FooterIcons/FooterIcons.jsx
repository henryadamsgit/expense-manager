import React from "react";
import "./FooterIcons.scss";
import Home from "../../assets/images/home.png";
import Calendar from "../../assets/images/calendar.png";
import Spending from "../../assets/images/sales.png";
import Profile from "../../assets/images/user.png";

const FooterIcons = () => {
  return (
    <div className="footerIcons">
      <div className="footerIconsHome">
        <img src={Home} alt="home" />
      </div>
      <div className="footerIconsCalendar">
        <img src={Calendar} alt="calendar" />
      </div>
      <div className="footerIconsSpending">
        <img src={Spending} alt="spending" />
      </div>
      <div className="footerIconsProfile">
        <img src={Profile} alt="" />
      </div>
    </div>
  );
};

export default FooterIcons;
