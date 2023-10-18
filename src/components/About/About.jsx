import React, { Fragment } from "react";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";

import classes from "./About.module.css";
import indexclasses from "../../index.module.css";

const About = () => {
  return (
    <Fragment>
      <section id="about" className={classes.about}>
        <h5>Get To Know </h5>
        <h2>About Me</h2>
        <div className={`${classes.container} ${classes.about__container}`}>
          <div className={classes.about__me}>
            <div className="about__me_image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className={classes.about__content}>
            <div className="about__cards">
              <article className="about__card">
                <FaAward className={classes.about__icon} />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className={classes.about__icon} />
                <h5>Clients</h5>
                <small>10+ WorldWide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className={classes.about__icon} />
                <h5>Projects</h5>
                <small>30+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque officiis, magnam illo aliquam enim facilis
              repellat adipisci sit sequi quia alias assumenda natus ipsum
              aperiam quibusdam aspernatur magni! Ad.
            </p>
            <a
              href="#contact"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Lets Talk
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
