import React from "react";
import "./ContactIcons.css";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import icon7 from "./icon7.png";

const ContactIcons = () => {
  return (
    <div className="icons-contacts">
      <img className="icon" src={icon4} alt="facebook"></img>
      <img className="icon" src={icon5} alt="twitter"></img>
      <img className="icon" src={icon6} alt="instagram"></img>
      <img className="icon" src={icon7} alt="tumblr"></img>
    </div>
  );
};

export default ContactIcons;
