import React from "react";
import logo from "../assets/logo4.png";

const Header = () => {
  return (
    <section id="header">
      <img
        src={logo}
        alt="CHCI Stem Club"
        className="header-logo animate__animated animate__fadeInDown"
      />
      <nav className="navbar">
        <ul className="nav-list animate__animated animate__fadeInLeft animate__delay-0.5s">
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
        <ul className="nav-list social-links animate__animated animate__fadeInRight animate__delay-0.65s">
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
