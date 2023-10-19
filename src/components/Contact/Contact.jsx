import React, { Fragment } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import classes from "./Contact.module.css";
import indexclasses from "../../index.module.css";

const Contact = () => {
  // wont be doing form submission and sending as mail part
  return (
    <Fragment>
      <section id="contact" className={classes.contact}>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div
          className={`${indexclasses.container} ${classes.contact__container}`}
        >
          <div className={classes.contact__options}>
            <article className={classes.contact__option}>
              <MdOutlineEmail className={classes.icon} />
              <h4>Email</h4>
              <h5>dummy@gmail.com</h5>
              <a href="mailto:dummy@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className={classes.contact__option}>
              <RiMessengerLine className={classes.icon} />
              <h4>Messenger</h4>
              <h5>hisoka#44</h5>
              <a href="https://discord.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className={classes.contact__option}>
              <BsWhatsapp className={classes.icon} />
              <h4>Whatsapp</h4>
              <h5>+91-9876543210</h5>
              <a href="whatsapp.com" target="_blank">
                Send a message
              </a>
            </article>
          </div>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="your message"
              required
            ></textarea>
            <button
              type="submit"
              className={`${indexclasses.btn} ${indexclasses.btn_primary}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
