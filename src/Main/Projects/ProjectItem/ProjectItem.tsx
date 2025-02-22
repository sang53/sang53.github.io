import { use } from "react";
import { Project } from "../ProjectInfo";
import classes from "./ProjectItem.module.css";
import { ThemeContext } from "../../../contexts/Theme/ThemeContext";
import Images from "../Images/Images";

export default function ProjectItem({ project }: { project: Project }) {
  const { theme } = use(ThemeContext);

  return (
    <div id="project-item" className={classes[theme]}>
      <h1>{project.title}</h1>
      <Images link={project.links.deploy} imgLinks={project.img} />
      <div>{project.info}</div>
      <ul>
        {project.technologies.map((tech, idx) => {
          return <li key={idx}>{tech}</li>;
        })}
      </ul>
      <div>
        <a
          href={project.links.src}
          draggable="false"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={project.links.deploy}
          draggable="false"
          target="_blank"
          rel="noreferrer"
        >
          Deployed
        </a>
      </div>
    </div>
  );
}
