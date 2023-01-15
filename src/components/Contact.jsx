import React from "react";

import Container from "react-bootstrap/Container";
import "./contact.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slide from "react-reveal/Slide";
import { FaMapMarkerAlt as Location } from "react-icons/fa";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import { MdEmail as Mail } from "react-icons/md";
// import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Button from "react-bootstrap/Button";
import ContactForm from "./ContactForm";







const Contact = () => {



    
  //   axios
  //     .post(`https://maharjanp.com.np/project/pages/processes/contactform.php?name=${name}&email=${email}&subject=${subject}&message=${message}`, data)
  //     .then((response) => {
        
  //       if (response.data.status === 200) {
          
  //         console.log("Successfully sent");
  //       }
        
  //     });
      
  // }
  


  return (
    <Container id="contact">
      <div className="title d-flex justify-content-center">
        <span className="fs-1 heading">Contact</span>
      </div>
      <Row className="mt-5 align-items-center contact-content">
        <Col sm={12} md={6} className="d-flex flex-column ">
          <Slide left>
            <Row className="flex-row align-items-center mb-4">
            <Col sm={2} className="d-flex flex-column align-contents-start">
              <Location />
            </Col>
            <Col sm={10} className="d-flex flex-column ">
              <span className="initial fw-bold fs-5">Location:</span>
              <span>Sunakothi, Lalitpur, 44700, Nepal</span>
            </Col>
          </Row>
          <Row className="flex-row align-items-center mb-4">
            <Col sm={2} className="d-flex flex-column align-contents-start">
              <Phone />
            </Col>
            <Col sm={10} className="d-flex flex-column">
              <span className="initial fw-bold fs-5">Phone:</span>
              <span>+977-9864-221-478</span>
            </Col>
          </Row>
          <Row className="flex-row align-items-center mb-4">
            <Col sm={2} className="d-flex flex-column align-contents-start">
              <Mail />
            </Col>
            <Col sm={10} className="d-flex flex-column">
              <span className="initial fw-bold fs-5">Email:</span>
              <span>rockeym50@gmail.com</span>
            </Col>
          </Row>
          </Slide>
          
        </Col>
        <Col sm={12} md={6}>
        <Slide right>
          <ContactForm/>
        </Slide>
          
        </Col>
      </Row>
      <Row className="mt-5  py-5">
        <Col md={12} sm={6} className="d-flex justify-content-center">
          <span className="footer fs-6">
            &copy; Copyright 2022. All right reserved
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
