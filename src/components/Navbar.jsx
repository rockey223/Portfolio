import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Container from 'react-bootstrap/Container';
import "./navbar.css";

const Navbbar = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              
            </Nav>
            <Nav className="fs-3" defaultActiveKey="#home">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      
    </>
  );
};

export default Navbbar;
