import React, { Fragment } from "react";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

import classes from "./Portfolio.module.css";
import indexclasses from "../../index.module.css";

const Portfolio = () => {
  return (
    <Fragment>
      <section id="portfolio" className={classes.portfolio}>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div
          className={`${indexclasses.container} ${classes.portfolio__container}`}
        >
          <article className={classes.portfolio__item}>
            <div className={classes.portfolio__item_image}>
              <img src={IMG1} alt="img1" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com">Github</a>
            <a
              href="https://github.com"
              target="_blank"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Live Demo
            </a>
          </article>
          <article className={classes.portfolio__item}>
            <div className={classes.portfolio__item_image}>
              <img src={IMG2} alt="img2" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com">Github</a>
            <a
              href="https://github.com"
              target="_blank"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Live Demo
            </a>
          </article>
          <article className={classes.portfolio__item}>
            <div className={classes.portfolio__item_image}>
              <img src={IMG3} alt="img3" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com">Github</a>
            <a
              href="https://github.com"
              target="_blank"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Live Demo
            </a>
          </article>
          <article className={classes.portfolio__item}>
            <div className={classes.portfolio__item_image}>
              <img src={IMG4} alt="img4" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com">Github</a>
            <a
              href="https://github.com"
              target="_blank"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Live Demo
            </a>
          </article>
          <article className={classes.portfolio__item}>
            <div className={classes.portfolio__item_image}>
              <img src={IMG5} alt="img5" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com">Github</a>
            <a
              href="https://github.com"
              target="_blank"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Live Demo
            </a>
          </article>
          <article className={classes.portfolio__item}>
            <div className={classes.portfolio__item_image}>
              <img src={IMG6} alt="img6" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com">Github</a>
            <a
              href="https://github.com"
              target="_blank"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Live Demo
            </a>
          </article>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
