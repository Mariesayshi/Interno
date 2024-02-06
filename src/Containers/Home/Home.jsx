import Intro from "./Intro/Intro";
import classes from "./Home.module.css";
import ServiceLink from "../../Components/ServiceLink/ServiceLink";
import Contact from "./Contact/Contact";
import Reviews from "../Home/Reviews/Reviews";
import PartnerBrands from "./PartnerBrands/PartnerBrands";
import OurProjects from "./OurProjects/OurProjects";
import Counter from "./Counter/Counter";
import JoinCall from "./JoinCall/JoinCall";

const Home = () => {
  const counterData = [
    { title: "Years Of Experience", num: 12 },
    { title: "Successful Projects", num: 85 },
    { title: "ActiveProjects", num: 15 },
    { title: "Happy Customers", num: 95 },
  ];
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
      <PartnerBrands />
      <OurProjects />
      <Counter counterData={counterData} />
      <JoinCall />
    </>
  );
};

export default Home;
