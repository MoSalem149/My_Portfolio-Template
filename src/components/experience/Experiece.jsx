//========== Experience Section Component ==========

import React, { useState, useEffect } from "react";
import { ReactComponent as WorkIcon } from "../../assets/img/Icons-img/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/img/Icons-img/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import "./experience.scss";

function ExperienceTimeline({ timelineElements }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="experience" id="experience" ref={ref}>
      <h2 className="heading">
        <i className="fas fa-hourglass"></i> Experience{" "}
        <span className="timelineSpan">Timeline</span>
      </h2>
      <VerticalTimeline key={key}>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton = element.buttonText && element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {element.location}
              </h4>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceTimeline;
