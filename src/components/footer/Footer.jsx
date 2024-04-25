//========== Footer Section Component ==========

import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Salem's Space Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website.</p>
          <p>Connect with me over socials.</p>
          <p>Keep Rising 🚀. Connect with me over live chat!</p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home">
            <i className="fas fa-chevron-circle-right"></i> Home
          </a>
          <a href="#about">
            <i className="fas fa-chevron-circle-right"></i> About
          </a>
          <a href="#services">
            <i className="fas fa-chevron-circle-right"></i> Services
          </a>
          <a href="#skills">
            <i className="fas fa-chevron-circle-right"></i> Skills
          </a>
          <a href="#experience">
            <i className="fas fa-chevron-circle-right"></i> Experience
          </a>
          <a href="#projects">
            <i className="fas fa-chevron-circle-right"></i> Projects
          </a>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i>+20 155 267 5704
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            mohamed.salem.dev.official@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i>Damietta, Egypt
          </p>
          <div className="share">
            <a
              className="linkedin"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/mohamed-salem149"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="github"
              aria-label="GitHub"
              href="https://github.com/MoSalem149"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="twitter"
              aria-label="Twitter"
              href="https://twitter.com/MohamedSalem149"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              className="telegram"
              aria-label="Telegram"
              href="https://t.me/MoSalem149"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              className="facebook"
              aria-label="Facebook"
              href="https://www.facebook.com/MoSalem149"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="email"
              aria-label="Email"
              href="mailto:mohamed.salem.dev.official@gmail.com"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>{" "}
      <hr />
      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse heart"></i> by{" "}
        <a href="https://www.linkedin.com/in/mohamed-salem149">Mohamed Salem</a>
      </h1>
      <h2 className="credit">
        <i className="fa fa-copyright"></i> Copy Right by Salem's Space
      </h2>
    </section>
  );
};

export default Footer;
