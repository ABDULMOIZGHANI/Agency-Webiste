import React from "react";
import "./Review.css";
import STARS from "/STARS.png";
import Client_Review from "../Client_Review/Client_Review";

const Review = () => {
  return (
    <div className="review">
      <h1>
        Loved by <span>Entrepreneurs</span>. Loved by <span>Enteprises</span>.
      </h1>
      <p>
        Businesses of all sizes trust Goodspeed to launch and grow their product
      </p>

      <div className="button-review">
        <h4>5.0</h4>
        <div className="review-img">
          <img src={STARS} alt="" />
          <p>15+ Reviews</p>
        </div>
      </div>

      <Client_Review />
    </div>
  );
};

export default Review;
