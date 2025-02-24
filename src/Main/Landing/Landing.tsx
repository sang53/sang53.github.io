import { scrollById } from "../../utils/utils";
import classes from "./Landing.module.css";

export default function Landing({ nextId }: { nextId: string }) {
  return (
    <section id="landing">
      <p className={classes.para}>Hi, Welcome to my Portfolio Page</p>
      <p className={classes.para}>
        I&apos;m Sang Won Cho, a front-end web developer
      </p>
      <a
        onClick={() => {
          scrollById(nextId);
        }}
      >
        About Me
      </a>
    </section>
  );
}
