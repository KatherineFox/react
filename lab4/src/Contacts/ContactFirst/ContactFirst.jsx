import React from "react";
import "./ContactFirst.css";
import icon8 from "./icon8.png";
import icon9 from "./icon9.png";
import icon10 from "./icon10.png";

const ContactFirst = () => {
  return (
    <div>
      <div className="first-contact">
        <h6>Contact Us</h6>
        <div className="contact-block">
          <img className="contact-icon" src={icon8} alt="phone"></img>
          <span className="contact-text">(123)456-7890</span>
        </div>
        <div className="contact-block">
          <img className="contact-icon" src={icon9} alt="gmail"></img>
          <span className="contact-text">mrsflowers@gmail.com</span>
        </div>
        <div className="contact-block">
          <img className="contact-icon" src={icon10} alt="map"></img>
          <span className="contact-text">
            242 Millbury Ave Millbury, MA 01527
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactFirst;
