//========== Services Section ==========

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { services } from "../../js/servicesData";
import "./services.scss";

const ServicesSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );

    const elements = ref.current.querySelectorAll(".service-item-inner");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="services" className="service section" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>
              <FontAwesomeIcon icon={faTools} />
              <span className="servicesSpan"> Our</span> Services
            </h2>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div
              className="col-md-4 col-sm-6 service-item padd-15"
              key={service.title}
            >
              <div className="service-item-inner pt-4">
                <div className="icon">
                  <FontAwesomeIcon icon={service.icon} size="3x" />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
