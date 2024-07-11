import React from "react";
import "./Contact.css";
import theme_pattern from "./assets/cloudbackup.svg";
import mail_icon from "./assets/emailicon.svg";
import location_icon from "./assets/locationicon.svg";
import call_icon from "./assets/phoneicon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message regarding anything you want me to work on. You can
            contact me anytime.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>codewithclaude@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>(+254)-701-223-456</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
<label htmlFor="">Your Name</label>
<input type="text" placeholder="Enter your name" name="name"/>
<label htmlFor="">Your Email</label>
<input type="email" placeholder="Enter your email" name="email"/>
<label htmlFor="">Write Your Message Here</label>
<textarea name="message" rows="8" id="" placeholder="Enter your message"></textarea>
<button type="submit" className="contact-submit">Submit</button>
        </form>


      </div>
    </div>
  );
};

export default Contact;
