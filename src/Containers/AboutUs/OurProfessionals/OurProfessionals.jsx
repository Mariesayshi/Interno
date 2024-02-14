import classes from "./OurProfessionals.module.css";
import Professional from "./ProfessionalCard/ProfessionalCard";

const OurProfessionals = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Our Professionals</h1>
        <div className={classes.professionals}>
          <Professional />
        </div>
      </div>
    </div>
  );
};

export default OurProfessionals;
