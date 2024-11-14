import React from "react";
import "./Our_Work.css";
import Work from "../Work/Work";
import Main_Buton from "../Main Button/Main_Buton";

const Our_Work = () => {
  return (
    <div className="Work-Container">
      <h1>Our Work</h1>
      <p>
        Every project is a unique journey. Take a look at what we've achieved so
        far!
      </p>
      <Work />

      <Main_Buton text="Book Now" />
    </div>
  );
};

export default Our_Work;
