import { Route, Routes } from "react-router";
import TestComponent from "./testComponent";

export default function RouteStructure() {
  return (
    <Routes>
      <Route path="/" element={<TestComponent test="/" />} />
      <Route path="projects">
        <Route index element={<TestComponent test="projects" />} />
        <Route path=":projectName" element={<TestComponent test="name" />} />
      </Route>
      <Route path="about" element={<TestComponent test="about" />} />
      <Route path="resume" element={<TestComponent test="resume" />} />
    </Routes>
  );
}
