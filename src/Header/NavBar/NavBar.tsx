import { useEffect, useState } from "react";
import classes from "./Navbar.module.css";

const { active, inactive } = classes;

export default function NavBar() {
  const [activeId, setActiveId] = useState("landing");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveId(visibleSection.target.id);
        }
      },
      { rootMargin: "-15%", threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={classes.navBar}>
      <a
        href="#landing"
        draggable="false"
        className={activeId === "landing" ? active : inactive}
      >
        Home
      </a>
      <a
        href="#intro"
        draggable="false"
        className={activeId === "intro" ? active : inactive}
      >
        About
      </a>
      <a
        href="#technologies"
        draggable="false"
        className={activeId === "technologies" ? active : inactive}
      >
        Skills
      </a>
      <a
        href="#projects-container"
        draggable="false"
        className={activeId === "projects-container" ? active : inactive}
      >
        Projects
      </a>
      <a className={inactive} draggable="false">
        Resume
      </a>
    </nav>
  );
}
