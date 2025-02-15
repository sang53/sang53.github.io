import { ReactNode, useReducer } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeWrapper({
  children,
}: {
  children: Iterable<ReactNode>;
}) {
  const [theme, toggleTheme] = useReducer<string, never>(themeReducer, "dark");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function themeReducer(prevTheme: string) {
  return prevTheme === "light" ? "dark" : "light";
}
