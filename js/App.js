import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import "../css/index.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
