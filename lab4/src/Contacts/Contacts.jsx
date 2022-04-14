import React from "react";
import ContactFirst from "./ContactFirst/ContactFirst";
import ContactIcons from "./ContactIcons/ContactIcons";
import "./Contacts.css";
import ContactSecond from "./ContactSecond/ContactSecond";

const Contacts = () => {
  return (
    <div className="contacts">
      <h3>Contacts</h3>
      <div className="contacts-blocks">
        <ContactFirst />
        <ContactSecond />
      </div>
      <ContactIcons />
    </div>
  );
};

export default Contacts;
