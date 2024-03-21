/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {props.text} {count}
    </button>
  );
};

export default Button;
