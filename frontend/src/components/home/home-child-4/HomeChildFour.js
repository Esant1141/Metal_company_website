import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./homeChildFour.css";
import { db } from "../../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

const HomeChildFour = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "home"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData);
    };

    fetchData();
  }, []);

  return (
    <Container className="container-four" fluid>
      <Row className="row-home-four">
        <h2 className="w3-leftbar w3-border-bottom w3-border-grey certification">
          {menuData[0]?.Heading2}
        </h2>
        <p className="p-four">
          {menuData[0]?.Paragraph2}
          <br />
          <br /> {menuData[0]?.Paragraph3}
          <br />  {menuData[0]?.Paragraph4}
          <br />  {menuData[0]?.Paragraph5}
        </p>
      </Row>
    </Container>
  );
};

export default HomeChildFour;
