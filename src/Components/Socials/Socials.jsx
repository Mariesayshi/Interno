import classes from "./Socials.module.css";

import FacebookIcon from "../../assets/Socials/facebook.svg?react";
import TwitterIcon from "../../assets/Socials/twitter.svg?react";
import LinkedInIcon from "../../assets/Socials/linkedIn.svg?react";
import InstagramIcon from "../../assets/Socials/Instagram.svg?react";

const Socials = () => {
  return (
    <div className={classes.socials}>
      <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon />
      <InstagramIcon />
    </div>
  );
};

export default Socials;
