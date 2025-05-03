import React from "react";
import css from "../css/hero.module.css";

const Home = () => {
  return (
    <section className={css.home}>
      <div className={css.content}>
        <h1>Hello, I am Tank Khushali</h1>
        <h2>Frontend Developer </h2>
        <p className={css.summary}>
          I specialize in building responsive and user-friendly web applications
          using modern technologies. Passionate about learning, coding, and
          turning creative ideas into real-world applications.
        </p>
        <div className={css.ctaButtons}>
          <a href="/projects" className={css.button}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
