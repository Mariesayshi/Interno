import Logo from "../Logo/Logo";
import classes from "./Footer.module.css";
import Socials from "../Socials/Socials";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.logoAndSocials}>
          <Logo />
          <p className={classes.description}>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <Socials />
        </div>
        <div className={classes.navBlock}>
          <div className={classes.pages}>
            <h3 className={classes.heading}>Pages</h3>
            <ul>
              <li>Our Projects</li>
              <Link to="/Interno/about">
                <li>About Us</li>
              </Link>
              <li>Contact Us</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={classes.services}>
            <h3 className={classes.heading}>Services</h3>
            <ul>
              <li>Kitchen</li>
              <li>Living Area</li>
              <li>Bathroom</li>
              <li>Dining Room</li>
              <li>Bedroom</li>
            </ul>
          </div>

          <div className={classes.contact}>
            <h3 className={classes.heading}>Contact</h3>
            <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p>contact@interno.com</p>
            <p>(123) 456 - 7890</p>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </div>
    </footer>
  );
};

export default Footer;
