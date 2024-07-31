import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/mylogo1.svg";
import underline from "./assets/underline.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li><p>Home</p></li>
        <li><p>About Me</p></li>
        <li><p>Services</p></li>
        <li><p>Portfolio</p></li>
        <li><p>Contact</p></li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
