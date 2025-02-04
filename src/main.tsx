import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouteStructure from "./RouteStructure.tsx";
import Header from "./components/common/Header/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <RouteStructure />
    </BrowserRouter>
  </StrictMode>
);
