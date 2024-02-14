import logoImg from "../../assets/GeneralIcons/logo.svg";

import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logoImg} className={classes.logoIcon} />
      <h1 className={classes.logoHeading}>Interno</h1>
    </div>
  );
};

export default Logo;
