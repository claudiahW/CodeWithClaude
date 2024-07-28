import React from "react";
import "./About.css";
import theme_pattern from "./assets/cloudbackup.svg";
import profile_img from "./assets/claudiah2.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced frontend developer with a passion for web
              development.{" "}
            </p>
            <p>
              I have a strong background in web development, having worked as
              both a front-end and back-end developer for several years. My
              skills include HTML, CSS, JavaScript, ReactJS,Python, PHP, and
              MySQL. I am also familiar with popular frameworks such as
              Bootstrap, Tailwind CSS and Angular.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
