import React from "react";
import "./Main_Button.css";

const Main_Buton = ({ text }) => {
  return (
    <div>
      <button className="button">
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Main_Buton;
