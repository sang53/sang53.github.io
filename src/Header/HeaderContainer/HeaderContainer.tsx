import { use, useMemo } from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./HeaderContainer.module.css";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";
import Buttons from "../Buttons/Buttons";
import { linkIcons } from "../../utils/svgIcons/svgIcons";

export default function HeaderContainer() {
  const { theme, toggleTheme } = use(ThemeContext);

  const memoContent = useMemo(() => {
    return (
      <>
        <div className="flex">
          <p>Sang Won Cho</p>
          <a
            href="https://github.com/sang53"
            target="_blank"
            rel="noreferrer"
            title="Github Link"
          >
            {linkIcons.gitHub}
          </a>
          <a
            href="https://www.linkedin.com/in/sang-won-cho-758680355"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Link"
          >
            {linkIcons.linkedIn}
          </a>
        </div>
        <NavBar />
      </>
    );
  }, []);

  return (
    <div className={classes[theme]}>
      {memoContent}
      <Buttons theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
