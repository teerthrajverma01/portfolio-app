import React, { Fragment } from "react";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Contact />
      <Nav />
      <Portfolio />
      <Experience />
    </Fragment>
  );
};

export default App;
