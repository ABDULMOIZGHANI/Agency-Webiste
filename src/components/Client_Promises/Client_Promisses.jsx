import React from "react";
import "./Client_Promisses.css";
import Single_Promise from "../Single_Promise/Single_Promise";
import data from "../../assets/data";

const Client_Promisses = () => {
  return (
    <div className="two_promisses">
      <h1>
        We Make Every <span>Client</span> Two Simple Promises
      </h1>
      <div className="promise-div">
        {data.map((item) => {
          return (
            <Single_Promise
              key={item.id}
              number_img={item.number_img}
              top_heading={item.top_heading}
              para={item.para}
              software_intro={item.software_intro}
              user_img={item.user_img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Client_Promisses;
