import HeaderContainer from "../Header/HeaderContainer/HeaderContainer";
import Intro from "./Intro/Intro";
import Landing from "./Landing/Landing";
import Projects from "./Projects/ProjectContainer/Projects";
import Technology from "./Technology/Technology";

export default function MainPage() {
  return (
    <>
      <HeaderContainer />
      <Landing />
      <Intro />
      <Technology />
      <Projects />
    </>
  );
}
