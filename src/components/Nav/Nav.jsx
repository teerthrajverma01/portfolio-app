import React, { Fragment, useState } from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

import classes from "./Nav.module.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Fragment>
      <nav>
        <a
          href="#"
          className={activeNav === "#" ? classes.active : ""}
          onClick={() => setActiveNav("#")}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? classes.active : ""}
          onClick={() => {
            setActiveNav("#about");
          }}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          className={activeNav === "#experience" ? classes.active : ""}
          onClick={() => {
            setActiveNav("#experience");
          }}
        >
          <BiBook />
        </a>
        <a
          href="#contact"
          className={activeNav === "#contact" ? classes.active : ""}
          onClick={() => {
            setActiveNav("#contact");
          }}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </Fragment>
  );
};

export default Nav;
