import { use } from "react";
import { Project } from "../ProjectInfo";
import classes from "./ProjectItem.module.css";
import { ThemeContext } from "../../../contexts/Theme/ThemeContext";

function getImgUrl(relative: string) {
  return new URL(relative, import.meta.url).href;
}

export default function ProjectItem({ project }: { project: Project }) {
  const { theme } = use(ThemeContext);
  return (
    <div id="project-item" className={classes[theme]}>
      <a href={project.links.deploy}>
        <img src={getImgUrl(project.img)} />
      </a>
      <h1>{project.title}</h1>
      <div>{project.info}</div>
      <ul>
        {project.technologies.map((tech, idx) => {
          return <li key={idx}>{tech}</li>;
        })}
      </ul>
      <div>
        <a href={project.links.src}>GitHub</a>
        <a href={project.links.deploy}>Deployed</a>
      </div>
    </div>
  );
}
