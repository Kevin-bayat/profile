import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiJupyter,
    SiPostman,
    SiHeroku, SiWebstorm, SiSvg,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

    </Row>
  );
}

export default Toolstack;
