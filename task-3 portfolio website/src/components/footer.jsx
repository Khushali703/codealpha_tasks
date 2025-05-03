import React from "react";
import css from "../css/footer.module.css"; // Assuming you will add CSS styles for the footer

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© 2025 Tank Khushali</p>
        <p className={css.footerText}>BCA Student | Front end developer</p>
      </div>
    </footer>
  );
};

export default Footer;
