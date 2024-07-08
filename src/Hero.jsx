import React from "react";
import "./Hero.css";
import profile_img from "./assets/claudiah1.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>I'm Claudiah Wanjiru, frontend developer based in Kenya. </h1>
      <p>
        I am a frontend developer from Nairobi, Kenya with 4 years experience in
        frontend technologies
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me!</div>
        <div className="hero-resume">My Resume</div>

      </div>
    </div>
  );
};

export default Hero;
