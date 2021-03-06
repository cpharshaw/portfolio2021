import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour_a,paragraphFour_b,paragraphFour_c, paragraphFive, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <p className="about-wrapper__info-text" >
                  {paragraphFour_a} <span style={{fontWeight:"bold", textDecoration: "underline"}}><Link to="contact" smooth duration={1000}>{paragraphFour_b}</Link></span> {paragraphFour_c}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFive || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
              </div>
              <div className="hero-cta d-inline-flex">
                <span className="cta-btn cta-btn--resume mx-5">
                  <Link to="projects" smooth duration={1000}>
                    {'See my work '}
                    {/* <i class="fa fa-angle-down" aria-hidden="true"/> */}
                  </Link>
                </span>
                <span className="mx-5">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    View my resume
                    </a>
                </span>
              </div>
            </Fade>
            {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--resume">
                  <Link to="projects" smooth duration={1000}>
                    {'See my work'}
                  </Link>
                </span>
              </p>
            </Fade> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
