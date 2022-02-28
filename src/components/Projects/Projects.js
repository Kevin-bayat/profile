import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import clothsStore from "../../Assets/Projects/clothsStore.png";
import pizzaApp from "../../Assets/Projects/pizzaApp.png";
import kavakbana from "../../Assets/Projects/kavakbana.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzaApp}
              isBlog={false}
              title="PizzaApp"
              description="this website create by next js . Has not reached the production stage "
              link="https://github.com/kevin-bayat/restaurant-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothsStore}
              isBlog={false}
              title="Cloths Store"
              description="this is my awesome project and in there use react , redux , scss and also styled component."
              link="https://github.com/kevin-bayat/E-commerce-clothings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kavakbana}
              isBlog={false}
              title="Architecture"
              description="this website is inprogress and not yet complete . this is for kavakbana.com company and This company is an architecture company "
              link="https://github.com/kevin-bayat/kavakbana"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
