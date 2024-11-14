import React from "react";
import STARS from "/STARS.png";
import FIVERR from "/FIVERR.png";

const Single_Promise = ({
  number_img,
  top_heading,
  para,
  software_intro,
  user_img,
}) => {
  return (
    <div className="promise">
      <div className="top-heading">
        <img src={number_img} alt="" />
        <h3>{top_heading}</h3>
      </div>
      <p>{para}</p>

      <div className="promise-card">
        <p>{software_intro}</p>

        <div className="bottom">
          <div className="review-card">
            REVIEWED ON <img src={STARS} alt="Review's Rating" />
          </div>

          <div className="fiver-img">
            <img src={FIVERR} alt="Fiverr Logo" />
            <p>5.0 Ratings</p>
          </div>

          <img src={user_img} alt="Client Image" />
        </div>
      </div>
    </div>
  );
};

export default Single_Promise;
