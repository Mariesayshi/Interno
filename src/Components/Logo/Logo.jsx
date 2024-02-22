import logoImg from "../../assets/GeneralIcons/logo.svg";
import { Link } from "react-router-dom";

import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <Link to="/Interno/">
      <div className={classes.logo}>
        <img src={logoImg} className={classes.logoIcon} />
        <h1 className={classes.logoHeading}>Interno</h1>
      </div>
    </Link>
  );
};

export default Logo;
