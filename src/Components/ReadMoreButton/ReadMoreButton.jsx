import arrowIcon from "../../assets/GeneralIcons/arrow.svg";
import classes from "./ReadMoreButton.module.css";

const ReadMoreButton = () => {
  return (
    <button className={classes.readMoreBtn}>
      Read More
      <img className={classes.icon} src={arrowIcon} />
    </button>
  );
};

export default ReadMoreButton;
