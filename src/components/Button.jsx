/* eslint-disable react/prop-types */
import "./Button.css";

const Button = (props) => {
  return (
    <button className="custom-button" onClick={props.onClicking}>
      {props.text}
    </button>
  );
};

export default Button;
