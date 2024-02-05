import classes from "./Review.module.css";

const Review = ({ name, location, imgUrl, reviewText }) => {
  return (
    <div className={classes.review}>
      <div className={classes.headingAndPicture}>
        <img src={imgUrl} className={classes.reviewerImg}/>
        <div className={classes.nameAndLocation}>
          <span className={classes.name}>{name}</span>
          <span className={classes.location}>{location}</span>
        </div>
      </div>
      <p className={classes.reviewText}>{reviewText}</p>
    </div>
  );
};

export default Review;
