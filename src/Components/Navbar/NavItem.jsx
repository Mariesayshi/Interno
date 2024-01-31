import classes from "./NavItem.module.css";

const NavItem = ({ heading }) => {
  return <li className={classes.navItem}>{heading}</li>;
};

export default NavItem;
