import Landing from "./Main/Landing/Landing.tsx";
import Intro from "./Main/Intro/Intro.tsx";
import Technology from "./Main/Technology/Technology.tsx";
import Projects from "./Main/Projects/ProjectContainer/Projects.tsx";
import HeaderContainer from "./Header/HeaderContainer/HeaderContainer.tsx";
import ThemeWrapper from "./contexts/Theme/ThemeWrapper.tsx";
import BackgroundWrapper from "./contexts/Background/BackgroundWrapper.tsx";

export default function App() {
  return (
    <ThemeWrapper>
      <BackgroundWrapper>
        <div></div>
      </BackgroundWrapper>
      <HeaderContainer />
      <Landing />
      <Intro />
      <Technology />
      <Projects />
    </ThemeWrapper>
  );
}
