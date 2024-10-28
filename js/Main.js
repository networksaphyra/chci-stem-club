import React from "react";
import logo from "../assets/logo4.svg";

const Main = () => {
  return (
    <main>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Innovate Through STEM</h1>
          <p className="hero-subtitle">
            Discover, learn, and create with like-minded peers.
          </p>

          <div className="hero-buttons">
            <button className="button button-primary">Join Us</button>
            <button className="button button-secondary">Learn More</button>
          </div>

          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">lowkey 0+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">lowkey 0+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">lowkey 0+</div>
              <div className="stat-label">Events</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={logo} alt="CHCI STEM" className="logo" />
        </div>
      </div>
    </main>
  );
};

export default Main;
