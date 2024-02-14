import quoteBorder from "../../assets/Aboutus/quoteBorder.png";
import classes from "./Quote.module.css";
const Quote = ({ quote, quoter }) => {
  return (
    <div className={classes.quoteContainer}>
      <img className={classes.quoteBorder} src={quoteBorder} />
      <div className={classes.quoteContent}>
        <p className={classes.quoteMark}>{`"`}</p>
        <p className={classes.quote}>{quote}</p>
        <p className={classes.quoter}>- {quoter}</p>
      </div>
    </div>
  );
};
export default Quote;
