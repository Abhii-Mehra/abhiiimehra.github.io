import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/1.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6} className="my-details-col">
              <Row className=" align-items-start my-details rounded">
                Hey there! I am <strong>&nbsp;Abhishek Mehra</strong>
                <br />A Mechanical Engineer and a passionate Programmer, born and brought up in India. I am Mechanical Engineer with AutoCAD, CATIA, SolidWorks, Ansys as my desigining tools and a Full Stack Web Developer with React.js, Redux, PHP, Laravel, MySQL as my tech stack.
                <br />
                In 2019, I successfully completed my Engineering with specialization in 'Mechanical Engineering' but also has a keen interest in programming languages too. So I learned it online.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1jUE_P6YjgHqFt3XcMfJMNrWAxWexsVUR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/_abhishek.mehra_/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        Instagram
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/abhishek-mehra-209419160/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      </div>
    </div>
  );
};

export default About;
