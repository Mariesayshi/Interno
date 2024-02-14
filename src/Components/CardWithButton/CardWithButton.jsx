import classes from "./CardWithButton.module.css";
import Button from "../Button/Button";
const CardWithButton = ({
  heading,
  text,
  buttonText,
  imgSrc,
  imgReverse = false,
}) => {
  return (
    <div
      className={classes.card}
      style={{ flexDirection: imgReverse ? "row-reverse" : "row" }}
    >
      <div className={classes.textAndButton}>
        <h2 className={classes.heading}>{heading}</h2>
        <p className={classes.text}>{text}</p>
        <Button text={buttonText} />
      </div>
      <img className={classes.cardImg} src={imgSrc} />
    </div>
  );
};

export default CardWithButton;
