//========== About Section Component ==========

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../../assets/img/About-img/My-Photo.webp";
import "./about.scss";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1.5 },
    },
  };

  return (
    <motion.section
      className="about"
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About{" "}
        <span className="meSpan">Me</span>
      </h2>
      <div className="row">
        <motion.div
          className="image"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 1.2,
                ease: "easeInOut",
              },
            },
          }}
        >
          <img
            draggable="false"
            className="tilt"
            src={profileImage}
            alt="My Personal Pic"
          />
        </motion.div>
        <motion.div className="content" variants={variants}>
          <h3>I'm Mohamed Salem</h3>
          <span className="tag">Front-End Developer</span>
          <p>
            I am a passionate front-end software developer. My aim is to make
            people's lives better & easier by developing applications and
            websites. I also love to teach coding as I believe that programming
            can empower people to achieve their full potential and live a better
            life.
          </p>
          <div className="resumebtn">
            <a
              href="https://drive.google.com/file/d/1hw4maSqPz0yWxfCPuXOkCAw9bhf07uXj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>
                <i className="fas fa-file-pdf"></i> Resume
              </span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
