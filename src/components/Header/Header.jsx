import React, { Fragment } from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

import Me from "../../assets/me.png";

import classes from "./Header.module.css";
import indexclasses from "../../index.module.css";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div
          className={`${indexclasses.container} ${indexclasses.header__container}`}
        >
          <h5>Hello I'm</h5>
          <h1>Teerthraj Verma</h1>
          <h5 className={indexclasses.text_light}>FullStack Developer</h5>
          <CTA />
        </div>
        <HeaderSocial />
        <div className={classes.me}>
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className={indexclasses.scroll__down}>
          Scroll Down
        </a>
      </header>
    </Fragment>
  );
};

export default Header;
