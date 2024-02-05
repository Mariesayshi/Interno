import classes from "./Review.module.css";

const Review = ({ name, location, imgUrl, reviewText }) => {
  return (
    <div className={classes.review}>
      <div className={classes.headingAndPicture}>
        <img src={imgUrl} />
        <div className={classes.nameAndLocation}>
          <h5>{name}</h5>
          <span>{location}</span>
        </div>
      </div>
      <p className={classes.reviewText}>{reviewText}</p>
    </div>
  );
};

export default Review;
