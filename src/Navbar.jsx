import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/mylogo1.svg";
import underline from "./assets/underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>

          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>

          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>

          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>

          {menu === "work" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>

          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
