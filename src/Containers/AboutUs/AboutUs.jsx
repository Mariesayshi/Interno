import PageHeading from "../../Components/PageHeading/PageHeading";
import aboutUsImg from "../../assets/AboutUs/AboutUsImg.png";
import Quote from "../../Components/Quote/Quote";
import CardWithButton from "../../Components/CardWithButton/CardWithButton";
import whatWeDoImg from "../../assets/AboutUs/whatWeDo.jpg";
import endResult from "../../assets/AboutUs/endResult.jpg";
import OurProfessionals from "./OurProfessionals/OurProfessionals";

import MailForm from "./MailForm/MailForm";
const AboutUs = () => {
  return (
    <>
      <PageHeading
        heading="About Us"
        crumbs="Home / About Us"
        imgUrl={aboutUsImg}
      />

      <Quote
        quote="I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it."
        quoter="Bunny Williams"
      />

      <CardWithButton
        heading="What We Do"
        text="It is a long established fact that a reader will be distracted by the of readable content of a page 
        when lookings at its layouts the points of using 
        that it has a more-or-less normal."
        buttonText="Out Concept"
        imgSrc={whatWeDoImg}
      />
      <CardWithButton
        heading="The End Result"
        text="It is a long established fact that a reader will be distracted by the of readable content of a page 
        when lookings at its layouts the points of using 
        that it has a more-or-less normal."
        buttonText="Out Portfolio"
        imgSrc={endResult}
        imgReverse={true}
      />
      <OurProfessionals />
      <MailForm/>
    </>
  );
};

export default AboutUs;
