import React from "react";
import CV from "../../assets/cv.pdf";

import classes from "./CTA.module.css";
import indexclasses from "../../index.module.css";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href={CV} className={indexclasses.btn} download>
        Download CV
      </a>
      <a
        href="#contact"
        className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
      >
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
