import { JSX, useReducer } from "react";
import { BackgroundContext } from "./BackgroundContext";

export default function BackgroundWrapper({
  children,
}: {
  children: JSX.Element;
}) {
  const [three, toggleThree] = useReducer((prev) => !prev, true);
  return (
    <BackgroundContext.Provider value={{ three, toggleThree }}>
      {children}
    </BackgroundContext.Provider>
  );
}
