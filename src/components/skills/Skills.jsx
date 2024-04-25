//========== Skills Section Component ==========

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skills from "../../js/skillsData";
import responsive from "../../js/responsiveCarousel";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skill pt-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skillContents">
              <h2 className="heading">
                <i className="fas fa-laptop-code"></i> Skills &{" "}
                <span className="abilitiesSpan">Abilities</span>
              </h2>
              <p>
                Explore my diverse skill set spanning various programming
                languages, frameworks, and tools. From web development to
                database management, my technical skills are designed to deliver
                robust and innovative solutions.
              </p>
            </div>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              className="skill-slider skill-bx"
            >
              {skills.map((skill) => (
                <div className="item" key={skill.title}>
                  <img src={skill.img} alt={skill.title} />
                  <h5>{skill.title}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
