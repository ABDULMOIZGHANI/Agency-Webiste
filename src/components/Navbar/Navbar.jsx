import React, { useState } from "react";
import "./Navbar.css";
import LOGO from "/LOGO.png";
import Button from "../Button/Button";
import Contact from "../Contact/Contact";

const Navbar = ({ showContact, toggleContact, handleForm, formDisplay }) => {
  return (
    <div className="main-Navbar">
      <div className="Navbar">
        <div className="logo-img">
          <img src={LOGO} alt="" />
        </div>

        <div className="menu-list">
          <ul>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Resource <i className="fa-solid fa-angle-down"></i>
            </li>
            <li>
              LOGO <i className="fa-solid fa-angle-down"></i>
            </li>
          </ul>
        </div>

        <div className="talk-button" onClick={toggleContact}>
          <Button text="Let's Talk" />
        </div>
      </div>

      {showContact && (
        <Contact handleForm={handleForm} formDisplay={formDisplay} />
      )}
    </div>
  );
};

export default Navbar;
