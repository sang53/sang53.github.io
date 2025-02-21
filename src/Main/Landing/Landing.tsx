import { scrollById } from "../../utils/utils";
import classes from "./Landing.module.css";

export default function Landing({ nextId }: { nextId: string }) {
  return (
    <section id="landing" className={classes.landing}>
      <p>Hi, Welcome to my Portfolio Page</p>
      <p>I&apos;m Sang Won Cho, a former medical student</p>
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
