import { use, useMemo } from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./HeaderContainer.module.css";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";
import Buttons from "../Buttons/Buttons";

const gitHub = (
  <svg height="32" viewBox="0 0 24 24" width="32">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
  </svg>
);

const linkedIn = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
  </svg>
);

export default function HeaderContainer() {
  const { theme, toggleTheme } = use(ThemeContext);

  const memoContent = useMemo(() => {
    return (
      <>
        <div className="flex">
          <p>Sang Won Cho</p>
          <a href="https://github.com/sang53" target="_blank" rel="noreferrer">
            {gitHub}
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            {linkedIn}
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
