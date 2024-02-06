import classes from "./JoinCall.module.css";
import Button from "../../../Components/Button/Button";
const JoinCall = () => {
  return (
    <div className={classes.joinCall}>
      <h1 className={classes.heading}>Wanna join the interno?</h1>
      <p className={classes.text}>
        {`We're always on the lookout for the new, talented friends!`}
      </p>
      <Button
        text="Contact Us"
        backgroundColor="#CDA274"
        arrowColor="#292F36"
      />
    </div>
  );
};

export default JoinCall;
