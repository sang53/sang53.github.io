import classes from "./Landing.module.css";

export default function Landing() {
  return (
    <div id="landing" className={classes.landing}>
      <p>Hi, Welcome to my Portfolio Page</p>
      <p>I&apos;m Sang Won Cho, a former medical student</p>
      <a href="#intro">About Me:</a>
    </div>
  );
}
