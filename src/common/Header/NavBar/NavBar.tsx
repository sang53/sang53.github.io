import { NavLink } from "react-router";
import classes from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={classes.navBar}>
      <NavLink to={"/"} className={classes.navLink}>
        Home
      </NavLink>
      <NavLink to={"projects"} className={classes.navLink}>
        Projects
      </NavLink>
      <NavLink to={"about"} className={classes.navLink}>
        About
      </NavLink>
      <NavLink to={"resume"} className={classes.navLink}>
        Resume
      </NavLink>
    </nav>
  );
}
