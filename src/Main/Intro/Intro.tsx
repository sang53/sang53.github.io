import { scrollById } from "../../utils/utils";
import classes from "./Intro.module.css";

export default function Intro({ nextId }: { nextId: string }) {
  return (
    <section id="intro" className={classes.introContainer}>
      <h1>About Me</h1>
      <p>After 5 years of Medschool, I decided to follow my passion instead</p>
      <p>
        Now, I&apos;m an aspiring web developer, specialising in front end
        development (for now...)
      </p>
      <p>
        If given a shot, despite the lack of a computer science degree, I
        promise you that I will be passionate and try my absolute best
      </p>
      <a
        onClick={() => {
          scrollById(nextId);
        }}
      >
        Technologies
      </a>
    </section>
  );
}
