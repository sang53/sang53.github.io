import { scrollById } from "../../utils/utils";
import classes from "./Intro.module.css";

export default function Intro({ nextId }: { nextId: string }) {
  return (
    <section id="intro" className={classes.introContainer}>
      <h1>About Me</h1>
      <div>
        <div className="flex">
          <h2>Past</h2>
          <hr />
          <p>
            After 5 years of Medschool, I decided to follow my passion instead
          </p>
        </div>
        <div className="flex">
          <h2>Present</h2>
          <hr />
          <p>
            Now, I&apos;m an aspiring web developer, specialising in front end
            development (for now...)
          </p>
        </div>
        <div className="flex">
          <h2>Future</h2>
          <hr />
          <p>
            If given a shot, despite the lack of a computer science degree, I
            promise you that I will be passionate and try my absolute best
          </p>
        </div>
      </div>
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
