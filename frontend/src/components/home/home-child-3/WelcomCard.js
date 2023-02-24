import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./welcome.css";
const WelcomCard = () => {
  return (
    <>
      <div className="welcome-div">
        <Container fluid className="wel-container">
          <Row>
            <Col sm={6}>
              <video className="vdo-tag" controls>
                <source src="video/vdo2.mp4" type="video/mp4" />
              </video>
            </Col>
            <Col className="vdo-img" sm={6}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default WelcomCard;
