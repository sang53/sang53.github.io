import { scrollById } from "../../utils/utils";
import classes from "./Technology.module.css";
import { techIcons } from "../../utils/svgIcons/svgIcons";

export default function Technology({ nextId }: { nextId: string }) {
  return (
    <section id="technologies" className={classes.techContainer}>
      <h1>Technologies I have worked with</h1>
      <div className={classes.iconContainer}>
        <div>{techIcons.styled}</div>
        <div className={classes.unstyled}>
          {techIcons.unstyled}
          {techIcons.image.map((img) => {
            return (
              <img src={img.src} key={img.alt} alt={img.alt} title={img.alt} />
            );
          })}
        </div>
      </div>
      <a
        onClick={() => {
          scrollById(nextId);
        }}
      >
        Projects
      </a>
    </section>
  );
}
