import React, { useRef } from "react";
import "./Navbar.css";
import logo from "./assets/navlogo.svg";
import underline_icon from "./assets/emailicon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "./assets/letter-c.png";
import menu_close from "./assets/letter-c.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" id="navicon"/>

      <ul className="nav-menu">
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
        </li>
        <li>
          <p onClick={() => setMenu("about")}>About Me</p>
        </li>
        <li>
          <p onClick={() => setMenu("services")}>Services</p>
        </li>
        <li>
          <p onClick={() => setMenu("home")}>Porfolio</p>
        </li>
        <li>
          <p onClick={() => setMenu("contact")}>Contact</p>
        </li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
