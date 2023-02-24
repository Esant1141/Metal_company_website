import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import "./footer.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  const [menuData, setMenuData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "footer"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData); 
  };
 
    fetchData();
  }, []);
  return (<>
    <Container fluid className="footer-container">
        <Row className="footer-row">
          <Col sm={6}>
            <div className="footer-logo">
              <Link className="god-gift-footer" to="/">
                <p> {menuData[0] ?.Website}</p>
              </Link>
            </div>
          </Col>
          <Col sm={6}>
            <div className="icons">
              <ul className="ul-footer-menu">
                <Link className="li-footer" to="/about">
                  <li> {menuData[0] ?.Menu1}</li>
                </Link>
                <Link className="li-footer" to="/products">
                  <li> {menuData[0] ?.Menu2}</li>
                </Link>
                <Link className="li-footer" to="/certification">
                  <li> {menuData[0] ?.Menu3}</li>
                </Link>
                <Link className="li-footer" to="/contact">
                  <li> {menuData[0] ?.Menu4}</li>
                </Link>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="footer-row">
          <div className="copyright">
            <p className="copy">
            {menuData[0] ?.Tagline}
            </p>
          </div>
        </Row>
        </Container>
        </>
  );
}
