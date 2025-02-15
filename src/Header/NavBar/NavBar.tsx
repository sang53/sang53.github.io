import classes from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={classes.navBar}>
      <a href="#landing">Home</a>
      <a href="#intro">About</a>
      <a href="#technologies">Skills</a>
      <a href="#projects-container">Projects</a>
      <a>Resume</a>
    </nav>
  );
}
