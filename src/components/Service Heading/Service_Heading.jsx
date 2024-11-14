import React from "react";

const Service_Detail = ({ img, heading, isSelected, onClick }) => {
  return (
    <div className="service-name" onClick={onClick}>
      <div className="left-container">
        <img src={img} alt="" />
        <p>{heading} </p>
      </div>
      <div className="icon" style={{ display: isSelected ? "block" : "none" }}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Service_Detail;
