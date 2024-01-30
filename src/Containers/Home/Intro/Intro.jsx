import classes from "./intro.module.css";
import Button from "../../../Components/button";
// import introImg from "../../../assets/intro.jpg"
const Intro = () => {
  return (
    <div className={classes.intro}>
      <h1 className={classes.heading}>Let Your Home Be Unique</h1>
      <p className={classes.text}>
        There are many variations of the passages of lorem Ipsum
        from available, variations of the passages.
      </p>
      <Button text="Get Started" />
    </div>
  );
};

export default Intro;
