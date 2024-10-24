import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <section id="header">
      <img src={logo} alt="CHCI Stem Club" className="logo" />
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-link">
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            <a href="#">Initiatives</a>
          </li>
          <li className="nav-link">
            <a href="#">Events</a>
          </li>
          <li className="nav-link">
            <a href="#">FAQ</a>
          </li>
          <li className="nav-link">
            <a href="#">Team</a>
          </li>
        </ul>
        <ul className="nav-list social-links">
          <li className="nav-link">
            <a href="#" aria-label="Instagram">
              <img src="../assets/instagram.png" alt="Instagram" />
            </a>
          </li>
          <li className="nav-link">
            <a href="#" aria-label="LinkedIn">
              <img src="../assets/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
