import { use } from "react";
import Intro from "./Intro/Intro";
import Landing from "./Landing/Landing";
import Projects from "./Projects/ProjectContainer/Projects";
import Technology from "./Technology/Technology";
import { ThemeContext } from "../contexts/Theme/ThemeContext";
import classes from "./MainPage.module.css";

export default function MainPage() {
  const { theme } = use(ThemeContext);
  return (
    <div className={classes[theme]}>
      <Landing />
      <Intro />
      <Technology />
      <Projects />
    </div>
  );
}
