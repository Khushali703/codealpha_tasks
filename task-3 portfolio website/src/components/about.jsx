import css from "../css/about.module.css";

const About = () => {
  return (
    <div className={css.aboutContainer}>
      <h2 className={css.heading}>About Me</h2>
      <span>
        I'm a passionate BCA student at Kansagra College, Saurashtra University,
        focused on frontend development.
      </span>
      <span>
        I build responsive web apps using HTML, CSS, JavaScript, React.js, and
        Redux.
      </span>
      <span>
        I enjoy solving problems, learning new tech, and improving user
        experiences.
      </span>
      <span>
        My goal is to become a skilled React Developer and build impactful
        applications.
      </span>
    </div>
  );
};

export default About;
