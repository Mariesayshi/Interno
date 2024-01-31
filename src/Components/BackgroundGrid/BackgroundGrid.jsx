import classes from "./BackgroundGrid.module.css";

const backgroundGrid = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.gridElem}></div>
      <div className={classes.gridElem}></div>
      <div className={classes.gridElem}></div>
    </div>
  );
};

export default backgroundGrid;
