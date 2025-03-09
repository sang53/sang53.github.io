import classes from "./Contact.module.css";

export default function Resume() {
  return (
    <section id="contact">
      <h1>Contact Details:</h1>
      <div className={classes.container}>
        <span>sang1cho8912@gmail.com</span>
        <span>0403 727 403</span>
        <span>Wakeley, NSW 2176</span>
      </div>
      <a href="/resume/resume.pdf" target="_blank" rel="noreferrer">
        Resume PDF
      </a>
    </section>
  );
}
