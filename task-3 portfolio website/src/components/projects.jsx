import css from "../css/projects.module.css";

const Projects = () => {
  return (
    <div className={css.projectsSection}>
      <h2 className={css.heading}>My Frontend Projects</h2>
      <div className={css.projectsGrid}>
        <div className={css.card}>
          <h3 className={css.title}>📜 Quote Generator</h3>
          <p className={css.description}>
            A minimal React app that generates random motivational quotes with
            the option to add favorites.
          </p>
          <div className={css.links}>
            <a
              href="https://react-quote-generator-blush.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              🔗 View Live
            </a>
            <a
              href="https://github.com/Khushali703/react-quote-generator"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              🧑‍💻 View Code
            </a>
          </div>
        </div>

        <div className={css.card}>
          <h3 className={css.title}>🛒 Shopping Cart System</h3>
          <p className={css.description}>
            A React + Redux based shopping cart with product listing, cart
            management, and checkout flow.
          </p>
          <div className={css.links}>
            <a
              href="https://shopping-cart-system-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              🔗 View Live
            </a>
            <a
              href="https://github.com/Khushali703/shopping-cart-system"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              🧑‍💻 View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
