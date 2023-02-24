import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { Col, Container, Row } from "react-bootstrap";
import "./address.css";

const Address = () => {
  const [menuData, setMenuData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "address"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData); 
  };
 
    fetchData();
  }, []);

  return (
    <Container fluid className="address-container"><br />
      <h1 className="w3-leftbar w3-border-bottom w3-border-grey addresss"> Address</h1>
      <Row className="address-row">
        <Col className="add-col" sm={4}>
          <div className="add-img-div">
            <i id="address-icons" class="material-icons">
              place
            </i>
          </div>
          <p className="w3-center">ADDRESS</p>
          <p className="address-description">
           <strong>Factory:</strong> {menuData[0] ?.Address1}<br />
          <strong>Showroom: </strong>{menuData[0] ?.Address2}
          </p> 
        </Col>
        <Col className="add-col1" sm={4}>
          <div className="add-img-div">
            <i id="address-icons" class="material-icons">
              phone
            </i>
          </div>
          <p className="address-name">PHONE</p>
          <p className="address-description">+91 {menuData[0] ?.Phone}</p>
        </Col>
        <Col className="add-col" sm={4}>
          <div className="add-img-div">
            <i id="address-icons" class="material-icons">
              email
            </i>
          </div>
          <p className="address-name">E-MAIL</p>
          <p className="address-description">{menuData[0] ?.Email}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Address;
