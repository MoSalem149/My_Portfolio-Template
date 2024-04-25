//========== Preloader Section Component ==========

import React from "react";
import "./preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-container">
        <span className="animated-preloader"></span>
      </div>
    </div>
  );
};

export default Preloader;
