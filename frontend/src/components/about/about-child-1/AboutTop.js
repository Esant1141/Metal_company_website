import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./aboutTop.css";
import { db } from "../../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

const AboutTop = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "about"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData);
    };

    fetchData();
  }, []);
  return (
    <>
      <Container className="top-container" fluid>
        <Row className="ul-row1">
        <h2 className="w3-leftbar w3-border-bottom w3-border-grey certification"> {menuData[0]?.Heading}</h2>
          <Col sm={6}  className='w3-animate-left ul-video2'>
          <ul>
            <li className="link-ul1"> {menuData[0]?.Paragraph1}</li>
            <li className="link-ul1"> {menuData[0]?.Paragraph2}</li>
            <li className="link-ul1"> {menuData[0]?.Paragraph3}</li>
        </ul>
            </Col>
          <Col className="w3-animate-right" sm={6}>
            <video width="100%" height="auto" controls autoplay>
              <source src="video/vdo1.mp4" type="video/mp4" />
            </video>
            <h5> {menuData[0]?.Tagline}</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AboutTop;
