import classes from "./PageHeading.module.css";
const PageHeading = ({ heading, crumbs, imgUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className={classes.pageHeadingContainer}
    >
      <div className={classes.pageHeading}>
        <h1 className={classes.heading}>{heading}</h1>
        <span className={classes.crumbs}>{crumbs}</span>
      </div>
    </div>
  );
};

export default PageHeading;
