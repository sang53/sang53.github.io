import { use } from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./HeaderContainer.module.css";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";
import Buttons from "../Buttons/Buttons";

export default function HeaderContainer() {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div className={classes[theme]}>
      <div>Sang Won Cho</div>
      <NavBar />
      <Buttons theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
