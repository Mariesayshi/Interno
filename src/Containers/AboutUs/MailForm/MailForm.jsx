import classes from "./MailForm.module.css";
import Button from "../../../Components/Button/Button";

const MailForm = () => {
  return (
    <div>
      <h1>{`Creative project? Let's have a productive talk.`}А</h1>
      <form>
        <div className={classes.nameAndMailInputs}>
          <input type="text" />
          <input type="text" />
        </div>
        <Button text="Send Now" />
      </form>
    </div>
  );
};

export default MailForm;
