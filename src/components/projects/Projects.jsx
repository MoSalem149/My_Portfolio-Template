//========== Projects Section Component ==========

import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectsItems from "../../js/projectsItems";
import "./projects.scss";

const Single = ({ item }) =>
{
  const navigate = useNavigate(); // Initialize useNavigate
  const controlsImage = useAnimation();
  const controlsText = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  React.useEffect(() =>
  {
    if (inView)
    {
      controlsImage.start("visible");
      controlsText.start("visible");
    } else
    {
      controlsImage.start("hidden");
      controlsText.start("hidden");
    }
  }, [controlsImage, controlsText, inView]);

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, duration: 0.8 },
    },
  };

  // Function to navigate to the error page
  const handleComingSoonClick = () =>
  {
    navigate('/error');
  };

  return (
    <div className="container" ref={ref}>
      <div className="wrapper">
        <motion.div
          className="imageContainer"
          initial="hidden"
          animate={controlsImage}
          variants={imageVariants}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          className="textContainer"
          initial="hidden"
          animate={controlsText}
          variants={textVariants}
        >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          {item.comingSoon ? (
            <button className="comingSoonButton" onClick={handleComingSoonClick}>Coming Soon</button>
          ) : (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sourceCodeButton"
            >
              Show in GitHub
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const Projects = () =>
{
  return (
    <div className="projects" id="projects">
      <div className="projectsHeader">
        <FontAwesomeIcon icon={faProjectDiagram} />
        <h2>
          Previous <span className="projectsSpan"> Projects </span>
        </h2>
      </div>
      {projectsItems.map((item, index) => (
        <Single item={item} key={index} />
      ))}
    </div>
  );
};

export default Projects;
