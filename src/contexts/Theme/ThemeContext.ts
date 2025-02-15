import { createContext } from "react";

interface ThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null);
