import "./Button.css";

const Button = (props) => {
  console.log(props);
  return <button className="custom-button">{props.text}</button>;
};

export default Button;
