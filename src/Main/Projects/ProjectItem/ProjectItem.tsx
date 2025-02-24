import { Project } from "../ProjectInfo";
import classes from "./ProjectItem.module.css";
import Images from "../Images/Images";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div id="project-item" className={classes.project}>
      <h1>{project.title}</h1>
      <Images imgLinks={project.img} />
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
