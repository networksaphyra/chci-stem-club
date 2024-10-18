import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar.js";
import "../css/index.css";

const App = () => {
  return <Navbar />;
};

ReactDOM.render(<App />, document.getElementById("root"));
