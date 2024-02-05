import classes from "./Reviews.module.css";
import Review from "./Review";
import rayImg from "../../../assets/Ray.jpg";
import bennyImg from "../../../assets/benny.jpg";
import natashaImg from "../../../assets/natasha.jpg";

const Reviews = () => {
  return (
    <div className={classes.reviewsSection}>
      <h1 className={classes.heading}>What the People Thinks About Us</h1>
      <div className={classes.reviews}>
        <Review
          name="Maria Diallo"
          location="Brussels, Belgium"
          imgUrl={rayImg}
          reviewText="Lorem Ipsum is simply dummy 
        text of the typesetting industry. 
        Ipsum has been."
        />
        <Review
          name="Raymont Smith"
          location="Sydnay, Australia"
          imgUrl={bennyImg}
          reviewText="Lorem Ipsum is simply dummy 
          text of the typesetting industry. 
          Ipsum has been scrambled it 
          to make a type book."
        />
        <Review
          name="Natasha Barker"
          location="New York, USA"
          imgUrl={natashaImg}
          reviewText="Lorem Ipsum is simply dummy 
          text of the typesetting industry. 
          Ipsum has been scrambled."
        />
      </div>
    </div>
  );
};

export default Reviews;
