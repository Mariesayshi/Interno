import classes from "./Navbar.module.css";
import NavItem from "./NavItem";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Logo />
      <ul className={classes.navItems}>
        <Link to="/">
          <NavItem heading="Home" />
        </Link>
        <NavItem heading="Services" />
        <NavItem heading="Our Projects" />
        <Link to="/about">
          <NavItem heading="About Us" />
        </Link>
        <NavItem heading="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
