import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div>
      <a className="effect effect-3" href="#" title={props.text}>
        {props.text}
      </a>
    </div>
  );
};

export default Button;
