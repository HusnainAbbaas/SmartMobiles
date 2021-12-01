import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <h1>SmartMobiles</h1>
        <p>High Quality is our first priority</p>

        <p>
          Copyright © 2021 www.smartmobiles.com.pk. smart Mobile Pakistan All
          Rights Reserved.
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
