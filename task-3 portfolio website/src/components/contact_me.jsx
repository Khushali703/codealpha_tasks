import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import css from "../css/contact_me.module.css";

const Contact = () => {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Contact Me</h2>
      <div className={css.icons}>
        <a
          href="https://www.linkedin.com/in/tank-khushali-751243287/"
          className={css.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={css.icon} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
