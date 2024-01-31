import classes from "./Navbar.module.css";
import NavItem from "./NavItem";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} className={classes.logoIcon} />
        <h1 className={classes.logoHeading}>Interno</h1>
      </div>
      <ul className={classes.navItems}>
        <NavItem heading="Home" />
        <NavItem heading="Pages" />
        <NavItem heading="Services" />
        <NavItem heading="Projects" />
        <NavItem heading="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
