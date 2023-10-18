import React, { Fragment } from "react";

import { BsPatchCheckFill } from "react-icons/bs";

import classes from "./Experience.module.css";
import indexclasses from "../../index.module.css";

const Experience = () => {
  return (
    <Fragment>
      <section id="experience" className={classes.experience}>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
        <div
          className={`${indexclasses.container} ${classes.experience__container}`}
        >
          <div className={classes.experience__frontend}>
            <h3>Frontend Development</h3>
            <div className={classes.experience__content}>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>HTML</h4>
                  <small className={indexclasses.text_light}>Experienced</small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>CSS</h4>
                  <small className={indexclasses.text_light}>Experienced</small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>JavaScript</h4>
                  <small className={indexclasses.text_light}>Experienced</small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  {" "}
                  <h4>React</h4>
                  <small className={indexclasses.text_light}>
                    Intermediate
                  </small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>Next.js</h4>
                  <small className={indexclasses.text_light}>Basic</small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className={indexclasses.text_light}>Basic</small>
                </div>
              </article>
            </div>
          </div>
          {/* end of frontend */}
          <div className={classes.experience__backend}>
            <h3>Backend Development</h3>
            <div className={classes.experience__content}>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>Nodejs</h4>
                  <small className={indexclasses.text_light}>Basic</small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>Expressjs</h4>
                  <small className={indexclasses.text_light}>Basic</small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>MongoDB</h4>
                  <small className={indexclasses.text_light}>
                    Intermediate
                  </small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>SQL</h4>
                  <small className={indexclasses.text_light}>
                    Intermediate
                  </small>
                </div>
              </article>
              <article className={classes.experience__detail}>
                <BsPatchCheckFill
                  className={classes.experience__detail_icons}
                />
                <div>
                  <h4>GraphQL</h4>
                  <small className={indexclasses.text_light}>Basic</small>
                </div>
              </article>
            </div>
          </div>
          {/* end of backend */}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
