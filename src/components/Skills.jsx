import "./skill.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./about.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slide from "react-reveal/Slide";

const SkillBar = ({ skill }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${skill}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="skillbar">
      <div className="skills" style={style}></div>
    </div>
  );
};

const Skills = () => {
  return (
    <Container id="skills">
      <div className="title d-flex justify-content-center">
        <span className="fs-1 heading">Skills</span>
      </div>
      <Container className="topics">
        <Row>
          <Col>
            <Slide left>
              <div className="mb-5">
                <div className="topic d-flex justify-content-between">
                  <span>HTML</span>
                  <span>75%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="75" />
                </div>
              </div>
              <div className="mb-5">
                <div className="topic d-flex justify-content-between">
                  <span>Javascript</span>
                  <span>20%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="20" />
                </div>
              </div>
              <div className="mb-5">
                <div className="topic d-flex justify-content-between">
                  <span>Photoshop</span>
                  <span>60%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="60" />
                </div>
              </div>
              <div className="mb-5">
                <div className="topic d-flex justify-content-between">
                  <span>Indesign</span>
                  <span>25%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="25" />
                </div>
              </div>
            </Slide>
          </Col>
          <Col>
            <Slide right>
              <div className="mb-5">
                <div className="topic d-flex justify-content-between">
                  <span>CSS</span>
                  <span>50%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="50" />
                </div>
              </div>
              <div className="mb-5">
                <div className="topic d-flex justify-content-between">
                  <span>PHP</span>
                  <span>20%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="20" />
                </div>
              </div>
              <div className="mb-5">
                <div className="topic d-flex justify-content-between">
                  <span>Illustrator</span>
                  <span>40%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="40" />
                </div>
              </div>
              <div>
                <div className="topic d-flex justify-content-between">
                  <span>Dart</span>
                  <span>10%</span>
                </div>

                <div className="bg">
                  <SkillBar skill="10" />
                </div>
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Skills;
