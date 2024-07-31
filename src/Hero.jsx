import React from "react";
import "./Hero.css";
import profile_img from "./assets/claudiah1.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Claudiah Wanjiru,</span> frontend developer based in Kenya.{" "}
      </h1>
      <p>
        I am a frontend developer from Nairobi, Kenya with 4 years experience in
        frontend technologies.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
