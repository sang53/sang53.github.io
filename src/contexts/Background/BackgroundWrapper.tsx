import { JSX, useReducer } from "react";
import { BackgroundContext } from "./BackgroundContext";

export default function BackgroundWrapper({
  children,
}: {
  children: JSX.Element;
}) {
  const [enableThree, toggleThree] = useReducer((prev) => !prev, true);
  return (
    <BackgroundContext.Provider value={{ enableThree, toggleThree }}>
      {children}
    </BackgroundContext.Provider>
  );
}
