import React, { Fragment } from "react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <a href="#">
          <AiOutlineHome />
        </a>
        <a href="#about">
          <AiOutlineUser />
        </a>
        <a href="#experience">
          <BiBook />
        </a>
        <a href="#contact">
          <BiMessageSquareDetail />
        </a>
      </nav>
    </Fragment>
  );
};

export default Nav;
