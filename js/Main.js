import React from "react";
import logo from "../assets/logo4.svg";
import "animate.css";

const Main = () => {
  return (
    <main>
      <img
        src={logo}
        alt="CHCI Stem"
        className="logo animate__animated animate__slideInDown"
      />
      <p className="heading animate__animated animate__fadeInDown animate__delay-1s">
        The Official STEM Club at Cameron Heights Collegiate Institute
      </p>
    </main>
  );
};

export default Main;
