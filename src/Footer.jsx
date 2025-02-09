import React from "react";
import "./Footer.css";
import footer_logo from "./assets/cicon.png";
import user_icon from "./assets/profileicon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a front end developer with four years experience in front end
            development. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Corrupti, obcaecati sint ipsum rem voluptas, eveniet,
            architecto odio ut praesentium eos quas. Iure ab dolores ipsum porro
            similique, quisquam amet a?
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe"> Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2024 Code With Claude.All rights reserved
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
