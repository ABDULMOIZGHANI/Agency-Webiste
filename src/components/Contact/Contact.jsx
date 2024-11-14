import React from "react";
import "./Contact.css";

const Contact = ({ handleForm, formDisplay }) => {
  return (
    <div className="Contact-Body" style={{ display: formDisplay }}>
      <div className="Contact">
        <i class="fa-solid fa-xmark" onClick={handleForm}></i>
        <input type="email" placeholder="Enter your Email" />
        <textarea name="" placeholder="Enter your message" id=""></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
