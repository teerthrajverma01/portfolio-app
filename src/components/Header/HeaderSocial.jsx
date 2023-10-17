import React from "react";

import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";

import classes from "./HeaderSocial.module.css";

const HeaderSocial = () => {
  return (
    <div className={classes.header__socials}>
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://discord.com" target="_blank">
        <BsDiscord />
      </a>
    </div>
  );
};

export default HeaderSocial;
