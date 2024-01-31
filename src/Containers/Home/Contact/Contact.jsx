import classes from "./Contact.module.css";
import Button from "../../../Components/Button/Button";
import callIcon from "../../../assets/call.svg";
const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.contactText}>
        <h2 className={classes.heading}>
          We Create The Art Of Stylish Living Stylishly
        </h2>
        <p className={classes.text}>
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <div className={classes.callInfo}>
          <img className={classes.callIcon} src={callIcon} />
          <div className={classes.numberAndText}>
            <span className={classes.number}>012345678</span>
            <span className={classes.callText}>Call Us Anytime</span>
          </div>
        </div>
        <Button text="Get Free Estimate" />
      </div>
      <div className={classes.contactImg}></div>
    </div>
  );
};

export default Contact;
