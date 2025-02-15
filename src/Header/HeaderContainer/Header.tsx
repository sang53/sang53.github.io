import NavBar from "./NavBar/NavBar";
import classes from "./HeaderContainer.module.css";

export default function HeaderContainer() {
  return (
    <div className={classes.header}>
      <div>Sang Won Cho</div>
      <NavBar />
    </div>
  );
}
