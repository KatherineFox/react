import React from "react";
import "./ContactSecond.css";

const ContactSecond = () => {
  return (
    <div>
      <div className="second-contact">
        <h6>Store Hours</h6>
        <div className="worktime">
          <div className="days">
            <span className="contact-text">Monday-Friday</span>
            <span className="contact-text">Saturday</span>
            <span className="contact-text">Sunday</span>
          </div>
          <div className="time">
            <span className="contact-text">8:30 AM To 3:00 PM</span>
            <span className="contact-text">9:00 AM To 12:00 PM</span>
            <span className="contact-text">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSecond;
