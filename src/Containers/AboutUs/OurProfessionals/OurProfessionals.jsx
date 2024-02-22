import classes from "./OurProfessionals.module.css";
import ProfessionalCard from "./ProfessionalCard/ProfessionalCard";
import anna from "../../../assets/Professionals/anna.png";
import dave from "../../../assets/Professionals/dave.jpg";
import john from "../../../assets/Professionals/john.png";
import lisa from "../../../assets/Professionals/lisa.png";

const OurProfessionals = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Our Professionals</h1>
        <div className={classes.professionals}>
          <ProfessionalCard
            fullName="Anna White"
            location="NY, USA"
            imgSrc={anna}
            phoneNum="+1 (123) 456-789
"
            mail="anna@Interno.com"
          />
          <ProfessionalCard
            fullName="Dima Kravchuk"
            location="Kiev, Ukraine"
            imgSrc={dave}
            phoneNum="+1 (123) 456-789
"
            mail="dima@Interno.com"
          />
          <ProfessionalCard
            fullName="John Burke"
            location="Nashville, USA"
            imgSrc={john}
            phoneNum="+1 (123) 456-789
            "
            mail="john@Interno.com"
          />
          <ProfessionalCard
            fullName="Lisa Smith"
            location="Sydney, Australia"
            imgSrc={lisa}
            phoneNum="+1 (123) 456-789
"
            mail="lisa@Interno.com"
          />
        </div>
      </div>
    </div>
  );
};

export default OurProfessionals;
