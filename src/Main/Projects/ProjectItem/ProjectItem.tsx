import { Project } from "../ProjectInfo";
import classes from "./ProjectItem.module.css";

function getImgUrl(relative: string) {
  return new URL(relative, import.meta.url).href;
}

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div id="project-item" className={classes.project}>
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
