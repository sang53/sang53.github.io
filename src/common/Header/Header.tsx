import NavBar from "./NavBar/NavBar";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <div>Sang Won Cho</div>
      <NavBar />
    </div>
  );
}
