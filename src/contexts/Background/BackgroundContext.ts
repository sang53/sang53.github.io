import { createContext } from "react";

interface BackgroundContext {
  enableThree: boolean;
  toggleThree: () => void;
}

export const BackgroundContext = createContext<BackgroundContext | null>(null);
