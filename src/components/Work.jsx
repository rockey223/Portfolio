import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./work.css";
import calc from "./assets/calc.png";
import quizz from "./assets/quizz.png";
import qr from "./assets/qr.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slide from "react-reveal/Slide";
import Nav from "react-bootstrap/Nav";

const Work = () => {
  return (
    <Container id="works">
      <div className="title d-flex justify-content-center">
        <span className="fs-1 heading">Works</span>
      </div>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="mb-3">
            <Slide bottom>
              <Nav.Link
                href="https://rpquiz.netlify.app/"
                className="d-flex flex-column align-items-center"
              >
                <img src={quizz} alt="" className="work-image" />
                <span className="mt-4 fs-3 work-title">Quiz App</span>
              </Nav.Link>
            </Slide>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3">
            <Slide bottom>
              <Nav.Link
                href="https://prashantscalculator.netlify.app/"
                className="d-flex flex-column align-items-center"
              >
                <img src={calc} alt="" className="work-image" />
                <span className="mt-4 fs-3 work-title">Online Calculator</span>
              </Nav.Link>
            </Slide>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3">
            <Slide bottom>
              <Nav.Link
                href="https://qrgeneratorp.netlify.app/"
                className="d-flex flex-column align-items-center"
              >
                <img src={qr} alt="" className="work-image" />
                <span className="mt-4 fs-3 work-title">QR Generator</span>
              </Nav.Link>
            </Slide>
          </Col>
        </Row>

        <div className="d-flex justify-content-center fs-4">
          <span className="d-flex gap-2">
            For more
            <Nav.Link href="http://maharjanprashant.com.np/" className="click">
              {" "}
              click here
            </Nav.Link>
          </span>
        </div>
      </Container>
    </Container>
  );
};

export default Work;
