import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./FooterIcons.scss";
import Home from "../../assets/images/home.png";
import Calendar from "../../assets/images/calendar.png";
import Spending from "../../assets/images/sales.png";
import Profile from "../../assets/images/user.png";

const FooterIcons = () => {
  return (
    <div className="footerIcons">
      <div className="footerIconsHome">
        <Link to="/">
          <img src={Home} alt="home" />
        </Link>
      </div>
      <div className="footerIconsCalendar">
        <Link to="/calendar">
          <img src={Calendar} alt="calendar" />
        </Link>
      </div>
      <div className="footerIconsSpending">
        <Link to="/spending">
          <img src={Spending} alt="spending" />
        </Link>
      </div>
      <div className="footerIconsProfile">
        <Link to="/profile">
          <img src={Profile} alt="profile" />
        </Link>
      </div>
    </div>
  );
};

export default FooterIcons;
