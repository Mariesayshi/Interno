import classes from "./Counter.module.css";
const Counter = ({ counterData }) => {
  let counterElems = [];
  for (let data of counterData) {
    counterElems.push(
      <div className={classes.counterElem} key={`${data.num}`}>
        <h1 className={classes.num}>{data.num}</h1>
        <p className={classes.title}>{data.title}</p>
      </div>
    );
    counterElems.push(
      <div key={`${data.num}border`} className={classes.separationLine}></div>
    );
  }
  return (
    <div className={classes.counterContainer}>
      <div className={classes.counter}>{counterElems}</div>
    </div>
  );
};

export default Counter;
