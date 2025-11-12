import { scrollById } from "../../../utils/utils";
import TechItems from "../TechItems/TechItems";
import classes from "./TechContainer.module.css";

export default function Technology({ nextId }: { nextId: string }) {
  return (
    <section id="technologies" className={classes.techContainer}>
      <h1>Technologies I have worked with</h1>
      <div className={classes.techBox}>
        <TechItems category="front" />
        <TechItems category="back" />
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
