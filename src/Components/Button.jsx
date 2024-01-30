import classes from "./Button.module.css";
import arrowIcon from "../assets/arrow.svg"
const Button = ({ text }) => {
  return (
    <button className={classes.button}>
      {text}
      <img className={classes.icon}src={arrowIcon} />
    </button>
  );
};

export default Button;
