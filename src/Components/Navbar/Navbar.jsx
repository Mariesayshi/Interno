import classes from "./Navbar.module.css";
import NavItem from "./NavItem";
import Logo from "../Logo/Logo";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Logo />
      <ul className={classes.navItems}>
        <NavItem heading="Home" />
        <NavItem heading="Services" />
        <NavItem heading="Our Projects" />
        <NavItem heading="About Us" />
        <NavItem heading="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
