import { JSX } from "react";
import { BackgroundContext } from "./BackgroundContext";
import { useToggle } from "../hooks/useToggle/useToggle";

export default function BackgroundWrapper({
  children,
}: {
  children: JSX.Element;
}) {
  const [enableThree, toggleThree] = useToggle("three", true, false);
  return (
    <BackgroundContext.Provider value={{ enableThree, toggleThree }}>
      {children}
    </BackgroundContext.Provider>
  );
}
