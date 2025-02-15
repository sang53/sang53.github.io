import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Landing from "./Main/Landing/Landing.tsx";
import Intro from "./Main/Intro/Intro.tsx";
import Technology from "./Main/Technology/Technology.tsx";
import Projects from "./Main/Projects/ProjectContainer/Projects.tsx";
import HeaderContainer from "./Header/HeaderContainer/Header.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <HeaderContainer />
    <Landing />
    <Intro />
    <Technology />
    <Projects />
  </StrictMode>
);
