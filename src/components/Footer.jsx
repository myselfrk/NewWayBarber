import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <Link to="">About Us</Link>
        <Link to="">Blog</Link>
        <Link to="">Contact Us</Link>
        <span></span>
        <span></span>
      </div>
      <div className="icons"></div>
      <div>
        <p>©NewWayBarber 2020-2021</p>
      </div>
    </div>
  );
};

export default Footer;
