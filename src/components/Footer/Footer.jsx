import React, { Fragment } from "react";
import classes from "./Footer.module.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <a href="#" className={classes.footer__logo}>
          Teerthraj
        </a>
        <ul className={classes.permalinks}>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={classes.footer__socials}>
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter />
          </a>
        </div>
        <div className={classes.footer__copyright}>
          <small>&copy; Teerthraj. All right reserved. </small>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
