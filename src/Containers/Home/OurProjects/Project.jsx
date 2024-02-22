import classes from "./Project.module.css";
import arrow from "../../../assets/GeneralIcons/arrow-small.svg";
const Project = ({ imgSrc, heading, category }) => {
  return (
    <div className={classes.project}>
      <div
        style={{ backgroundImage: `url(${imgSrc})` }}
        className={classes.imgContainer}
      ></div>
      <div className={classes.headingAndButton}>
        <div className={classes.heading}>
          <h5 className={classes.heading}>{heading}</h5>
          <span className={classes.category}>{category}</span>
        </div>
        <button className={classes.projectBtn}>
          <img className={classes.projectBtnIcon} src={arrow} />
        </button>
      </div>
    </div>
  );
};

export default Project;
