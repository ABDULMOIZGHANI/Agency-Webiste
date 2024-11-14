import React from "react";
import "./Client_Review.css";
import CLIENT_REVIEW1 from "/CLIENT_REVIEW1.png";
import CLIENT_REVIEW2 from "/CLIENT_REVIEW2.png";
import CLIENT_REVIEW3 from "/CLIENT_REVIEW3.png";
import CLIENT_REVIEW4 from "/CLIENT_REVIEW4.png";
import CLIENT_REVIEW5 from "/CLIENT_REVIEW5.png";
import CLIENT_REVIEW6 from "/CLIENT_REVIEW6.png";
const review = [
  CLIENT_REVIEW1,
  CLIENT_REVIEW2,
  CLIENT_REVIEW3,
  CLIENT_REVIEW4,
  CLIENT_REVIEW5,
  CLIENT_REVIEW6,
  CLIENT_REVIEW1,
  CLIENT_REVIEW2,
  CLIENT_REVIEW3,
  CLIENT_REVIEW4,
  CLIENT_REVIEW5,
  CLIENT_REVIEW6,
];

const Client_Review = () => {
  return (
    <div className="scroller" data-speed="slow" data-animated="true">
      <div className="tag-list scroller__inner">
        {review.map((item) => {
          return (
            <div className="review-box">
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Client_Review;
