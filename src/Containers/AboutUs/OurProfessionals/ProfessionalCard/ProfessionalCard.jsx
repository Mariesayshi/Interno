import classes from "./ProfessionalCard.module.css";
import Socials from "../../../../Components/Socials/Socials";
const ProfessionalCard = ({ imgSrc, fullName, location, phoneNum, mail }) => {
  return (
    <div
      className={classes.professionalCard}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={classes.professionalInfo}>
        <div className={classes.nameAndLocation}>
          <h3 className={classes.fullName}>{fullName}</h3>
          <span className={classes.location}>{location}</span>
        </div>
        <Socials />
        <div className={classes.phoneAndMail}>
          <span className={classes.phoneNum}>{phoneNum}</span>
          <span className={classes.mail}>{mail}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
