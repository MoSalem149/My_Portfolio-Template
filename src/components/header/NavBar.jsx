//========== NavBar Component ==========

import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/img/Logo-img/Logo.webp";
import { HashLink } from "react-router-hash-link";
import "./navbar.scss";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrolled(currentScrollPos > 50);

      const sectionOffsets = {
        home: document.getElementById("home")?.offsetTop,
        about: document.getElementById("about")?.offsetTop,
        services: document.getElementById("services")?.offsetTop,
        skills: document.getElementById("skills")?.offsetTop,
        experience: document.getElementById("experience")?.offsetTop,
        projects: document.getElementById("projects")?.offsetTop,
      };

      const scrollPosition = window.pageYOffset + 300;
      let foundSection = "";
      for (const section in sectionOffsets) {
        if (sectionOffsets[section] <= scrollPosition) {
          foundSection = section;
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClassName = (sectionName) =>
    activeSection === sectionName ? "navbar-link underline" : "navbar-link";

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={linkClassName("home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={linkClassName("about")}>
              About
            </Nav.Link>
            <Nav.Link href="#services" className={linkClassName("services")}>
              Services
            </Nav.Link>
            <Nav.Link href="#skills" className={linkClassName("skills")}>
              Skills
            </Nav.Link>
            <Nav.Link href="#experience" className={linkClassName("experience")}>
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" className={linkClassName("projects")}>
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
