import React from "react";

const Button = (props) => {
  return (
    <button
      className="btn btn-outline-success my-2 my-sm-0"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
