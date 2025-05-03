import React from "react";
import { NavLink } from "react-router-dom";
import css from "../css/header.module.css";

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <h2 className={css.logo}>Khushali</h2>
      <ul className={css.links}>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/certificates">Certificates</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
