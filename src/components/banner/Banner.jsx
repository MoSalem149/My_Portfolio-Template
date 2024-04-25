//========== Banner Section Component ==========

import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/Background-img/banner-img.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./banner.scss";

const style = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
const Banner = () =>
{
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 50);

  const toRotate = useMemo(
    () => ["Front-End Developer", "Web Designer", "Software Engineer"],
    []
  );
  const period = 1000;

  const tick = useCallback(() =>
  {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting)
    {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText)
    {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "")
    {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250);
    }
  }, [text, isDeleting, loopNum, toRotate, period]);

  useEffect(() =>
  {
    let ticker = setInterval(() =>
    {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn dataSection"
                      : ""
                  }
                >
                  <span className="welcome-message" data-text="Welcome to my">
                    Welcome to my{" "}
                    <span className="welcomeSpan"> Portfolio </span>
                  </span>
                  <h1>{`Hi! I'm Mohamed`}</h1>
                  <div
                    className="txt-rotate typograph"
                    style={{ ...style, minHeight: "1em" }}
                  >
                    <span className="wrap">{text}</span>
                  </div>
                  <a href="#about" className="btn">
                    <span>About Me</span>
                    <i className="fas fa-arrow-circle-down"></i>
                  </a>
                  <div className="socials">
                    <ul className="social-icons">
                      <li>
                        <a
                          className="linkedin"
                          aria-label="LinkedIn"
                          href="https://www.linkedin.com/in/mohamed-salem149"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="github"
                          aria-label="GitHub"
                          href="https://github.com/MoSalem149"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          aria-label="Twitter"
                          href="https://twitter.com/MohamedSalem149"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="telegram"
                          aria-label="Telegram"
                          href="https://t.me/MoSalem149"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-telegram-plane"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="facebook"
                          aria-label="Facebook"
                          href="https://www.facebook.com/MoSalem149"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="email"
                          aria-label="Email"
                          href="mailto:mohamed.salem.dev.official@gmail.com"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Banner Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
