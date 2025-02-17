import ThemeWrapper from "./contexts/Theme/ThemeWrapper.tsx";
import BackgroundWrapper from "./contexts/Background/BackgroundWrapper.tsx";
import "./App.css";
import Background from "./Background/Background.tsx";
import MainPage from "./Main/MainPage.tsx";

export default function App() {
  return (
    <ThemeWrapper>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <MainPage />
    </ThemeWrapper>
  );
}
