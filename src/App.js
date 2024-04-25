//========== App ==========

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Preloader from "./common/preloader/Preloader";
import StarAnimation from "./common/background/starAnimationBackground";
import NavBar from "./components/header/NavBar";
import BannerSection from "./components/banner/Banner";
import AboutSection from "./components/about/About";
import ServicesSection from "./components/promises/Services";
import SkillsSection from "./components/skills/Skills";
import ExperienceSection from "./components/experience/Experiece";
import timelineElements from "./js/timelineElements";
import ProjectsSection from "./components/projects/Projects";
import ContactSection from "./components/contact/Contact";
import ScrollToTop from "./common/scroll/scrollToTop";
import Footer from "./components/footer/Footer";
import ErrorArea from "./common/error/errorPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && <Preloader />}
        <StarAnimation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <BannerSection />
                <AboutSection />
                <ServicesSection />
                <SkillsSection />
                <ExperienceSection timelineElements={timelineElements} />
                <ProjectsSection />
                <ContactSection />
                <ScrollToTop />
                <Footer />
              </>
            }
          />
          <Route path="/error" element={<ErrorArea />} />
          <Route path="*" element={<ErrorArea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
