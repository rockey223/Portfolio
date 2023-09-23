import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./about.css";
import  aboutimage from './assets/about.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Fade from "react-reveal/Fade";



const About = () => {
  return (
    
        <Container id="about">
        <div className="title d-flex justify-content-center">
          <span className="fs-1 heading">About</span>
        </div>
        <Row className="align-items-center">
          <Col md={4} sm={12} className="d-flex justify-content-center mb-5">
            <Fade left>
              <img src={aboutimage} alt="profile" className="image" />
            </Fade>
            
          </Col>
          <Col md={8} sm={12} className="d-flex align-items-center">
            <div className="about-info d-flex flex-column justify-content-center mt-5">
              <span className="fs-4 fw-bolder tagline">
              Trying to get some best from the worst
              </span>
              <span className="brief fs-5">
              Right Now I am a Bachelor student studing BCA (Bachelor in Computer Application) Affiliated to TU from NIC (National Integrated College).
              </span>
              <Row className="mt-4">
                <Col sm={6} className='d-flex flex-column infos'>
                    <div className="mb-5">
                      <span className="fs-5 fw-bold initial">
                        Birthday:
                      </span>
                      <span className="fs-5"> 1999-07-08 </span>
                    </div>
                    <div className="mb-3">
                      <span className="fs-5 fw-bold initial">
                        Website:
                      </span>
                      <span className="fs-5"> pmaharjan.com.np </span>
                    </div>
                    <div className="mb-3">
                      <span className="fs-5 fw-bold initial">
                        Phone:
                      </span>
                      <span className="fs-5"> +977-9864221478 </span>
                    </div>
                </Col>
                <Col sm={6} className='d-flex flex-column infos'>
                    <div className="mb-3">
                      <span className="fs-5 fw-bold initial">
                        Address:
                      </span>
                      <span className="fs-5"> Sunakothi,Lalitpur-44700,Nepal </span>
                    </div>
                    <div className="mb-3">
                      <span className="fs-5 fw-bold initial">
                        Degree:
                      </span>
                      <span className="fs-5"> Bachelor (Ongoing) </span>
                    </div>
                    <div className="mb-3">
                      <span className="fs-5 fw-bold initial">
                        Email:
                      </span>
                      <span className="fs-5"> rockeym50@gmail.com </span>
                    </div>
                </Col>
                
              </Row>
            </div>
          </Col>
        </Row>
        </Container>

    
   
  )
}

export default About