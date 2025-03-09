import { use, useMemo } from "react";
import Intro from "./Intro/Intro";
import Landing from "./Landing/Landing";
import Projects from "./Projects/ProjectContainer/Projects";
import Technology from "./Technology/Technology";
import { ThemeContext } from "../contexts/Theme/ThemeContext";
import classes from "./MainPage.module.css";
import Contact from "./Contact/Contact";

export default function MainPage() {
  const { theme } = use(ThemeContext);

  const memoContent = useMemo(() => {
    return (
      <>
        <Landing nextId="intro" />
        <Intro nextId="technologies" />
        <Technology nextId="projects-container" />
        <Projects />
        <Contact />
      </>
    );
  }, []);

  return (
    <div id="main" className={classes[theme]}>
      {memoContent}
    </div>
  );
}
