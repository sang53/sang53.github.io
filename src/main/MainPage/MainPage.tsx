import Header from "../../common/Header/Header";
import Intro from "../Intro/Intro";
import Landing from "../Landing/Landing";
import Projects from "../Projects/ProjectContainer/Projects";
import Technology from "../Technology/Technology";

export default function MainPage() {
  return (
    <div id="main">
      <Header />
      <Landing />
      <Intro />
      <Technology />
      <Projects />
    </div>
  );
}
