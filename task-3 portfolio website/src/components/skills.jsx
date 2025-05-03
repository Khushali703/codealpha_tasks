import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiCssmodules } from "react-icons/si";
import { MdOutlineChatBubble, MdPsychology } from "react-icons/md";
import css from "../css/skills.module.css";

const Skills = () => {
  return (
    <div className={css.skillsContainer}>
      <h2 className={css.title}>My Skills</h2>
      <div className={css.grid}>
        <div className={css.skill}>
          <FaHtml5 className={css.icon} /> HTML5
        </div>
        <div className={css.skill}>
          <FaCss3Alt className={css.icon} /> CSS3
        </div>
        <div className={css.skill}>
          <FaJs className={css.icon} /> JavaScript
        </div>
        <div className={css.skill}>
          <FaReact className={css.icon} /> React JS
        </div>
        <div className={css.skill}>
          <SiRedux className={css.icon} /> Redux JS
        </div>
        <div className={css.skill}>
          <SiCssmodules className={css.icon} /> Module CSS
        </div>
        <div className={css.skill}>
          <MdOutlineChatBubble className={css.icon} /> Communication
        </div>
        <div className={css.skill}>
          <MdPsychology className={css.icon} /> Problem Solving
        </div>
        <div className={css.skill}>
          <FaGitAlt className={css.icon} /> Git
        </div>
      </div>
    </div>
  );
};

export default Skills;
