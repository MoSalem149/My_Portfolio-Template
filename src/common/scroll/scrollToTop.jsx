//========== Scroll To Top Section Component ==========

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { throttle } from "lodash";
import "./scrollToTop.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("Current scroll position:", window.pageYOffset);
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      console.log("Button should be visible");
    } else {
      setIsVisible(false);
      console.log("Button should be hidden");
    }
  };

  const throttledToggleVisibility = throttle(toggleVisibility, 100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", throttledToggleVisibility);
    console.log("Event listener added");

    return () => {
      console.log("Event listener removed");
      window.removeEventListener("scroll", throttledToggleVisibility);
      throttledToggleVisibility.cancel(); // Cancel any remaining throttled calls on cleanup
    };
  }, [throttledToggleVisibility]);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <span className="scroll-icon">
        <FontAwesomeIcon icon={faRocket} />
      </span>
    </div>
  );
};

export default ScrollToTop;
