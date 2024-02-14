import classes from "./Button.module.css";
import ArrowIcon from "../../assets/GeneralIcons/arrow.svg?react";

const Button = ({ text, backgroundColor, color, arrowColor }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor ?? "#292f36",
        color: color ?? "white",
      }}
      className={classes.button}
    >
      {text}
      <ArrowIcon stroke={arrowColor ?? "#CDA274"} className={classes.icon} />
    </button>
  );
};

export default Button;
