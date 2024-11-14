import React from "react";
import Main_Buton from "../Main Button/Main_Buton";
import "./Hero_Section.css";

const Hero_Section = () => {
  return (
    <div className="hero-section">
      <h1>
        Your Trusted No-Code <br />
        <span>Partner</span> for Design and <br />
        Development
      </h1>
      <p>
        Over 1,000 innovative companies rely on Airdev’s no-code platform to
        build beautiful, scalable products 5x faster and more affordably than
        traditional development.
      </p>
      <Main_Buton text="Book Now" />
    </div>
  );
};

export default Hero_Section;
