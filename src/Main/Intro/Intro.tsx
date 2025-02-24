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
          <p>I was a medical student at UNSW until 2023.</p>
          <p>
            During this time, my goals and outlook on life started to change and
            develop.
          </p>
          <p>
            In the final year of my studies, I decided that being a doctor was
            not the career I wanted.
          </p>
          <p>
            I chose to pursue computer science instead, which I had been
            interested in since childhood.
          </p>
        </div>
        <div className="flex">
          <h2>Present</h2>
          <hr />
          <p>
            After 1.5 years of self-learning and studying, I am ready to work as
            a front-end web developer.
          </p>
          <p>
            I am very passionate about web development, and computer science as
            a whole.
          </p>
          <p>
            I have found myself happier and more fulfilled, and can promise that
            I will dedicate myself my role.
          </p>
        </div>
        <div className="flex">
          <h2>Future</h2>
          <hr />
          <p>
            Firstly, I hope to find a job that will help me gain experience in
            this industry and teach me skills to improve my capability.
          </p>
          <p>
            I plan to expand my skillset to back-end web development, becoming a
            full-stack web developer.
          </p>
          <p>
            I want to continue to improve and become that best web developer I
            can be!
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
