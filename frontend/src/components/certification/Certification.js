import React, { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../../firebase";
import Layout from "../../Layout";
import { TabTitle } from "../../Title";

const Certification = () => {
  TabTitle('Certification | God Gift International')
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "certification"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Container>
        <br />
        <h2 className="w3-leftbar w3-border-bottom w3-border-grey certification">
          Certification
        </h2>
        {menuData.map((item) => (
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
          <img width="100%" src= {item.img} alt="" />
          <b> {item.heading}</b>
          <p> {item.paragragh}</p>
          </Col>
          <Col sm={1}></Col>
        </Row>
        ))}
      </Container>
    </Layout>
  );
};
export default Certification;
