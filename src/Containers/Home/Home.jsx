import Intro from "./Intro/Intro";
import classes from "./Home.module.css";
import ServiceLink from "../../Components/ServiceLink/ServiceLink";
import Contact from "./Contact/Contact";
import Reviews from "../Home/Reviews/Reviews";
const Home = () => {
  return (
    <>
      <Intro />
      <div className={classes.serviceLinks}>
        <ServiceLink
          heading="Project Planning"
          text="There are many variations of the passages of lorem Ipsum from 
          available, majority."
        />
        <ServiceLink
          heading="Interior Work"
          text="There are many variations of the passages of lorem Ipsum from 
          available, majority."
        />
        <ServiceLink
          heading="Realization"
          text="There are many variations of the passages of lorem Ipsum from 
          available, majority."
        />
      </div>
      <Contact />
      <Reviews />
    </>
  );
};

export default Home;
