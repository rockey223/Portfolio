import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import hero from "./assets/hero1.png";
import Fade from "react-reveal/Fade";
import cv from "./assets/prashant cv.pdf";

const Hero = () => {
  return (
    <Container id="home">
      <Row>
        <Col
          md={6}
          sm={12}
          className="text d-flex flex-column justify-content-center"
        >
          <Fade left>
            <div className="detail d-flex flex-column align-items-xs-center ">
              <span className="fs-2">Prashant Maharjan</span>
              <span className="fs-4">Developer, Designer</span>
              <span className="fs6">
                I am just a simple person trying to learn new stuffs.
              </span>
            </div>
            <div className="buttons">
              
            <a href={cv}><Button varient="primary">DOWNLOAD CV</Button></a>
             
                
              

              <a href="#contact">
                <Button varient="primary">HIRE ME</Button>
              </a>
                
             
            </div>
          </Fade>
        </Col>
        <Col md={6} sm={0} className="image d-none d-md-block">
          <Fade right>
            <img src={hero} alt="images" />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
