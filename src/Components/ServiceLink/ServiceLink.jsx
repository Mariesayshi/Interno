import ReadMoreButton from "../ReadMoreButton/ReadMoreButton";
import classes from "./ServiceLink.module.css";
const ServiceLink = ({ heading, text }) => {
  return (
    <div className={classes.serviceLink}>
      <h3 className={classes.heading}>{heading}</h3>
      <p className={classes.text}>{text}</p>
      <ReadMoreButton />
    </div>
  );
};

export default ServiceLink;
