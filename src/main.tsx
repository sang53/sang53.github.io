import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./main/MainPage/MainPage.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <MainPage />
  </StrictMode>
);
