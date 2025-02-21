import { scrollById } from "../../utils/utils";
import classes from "./Technology.module.css";

export default function Technology({ nextId }: { nextId: string }) {
  return (
    <section id="technologies" className={classes.techContainer}>
      <h1>Technologies I have worked with</h1>
      {
        // add icons of technologies used in projects & maybe some information on hover
      }
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
