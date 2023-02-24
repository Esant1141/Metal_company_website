import { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

import { Link } from "react-router-dom";
import Login from "../admin/login-logout/Login";
import { db } from "../admin/firebase";
import { collection, getDocs } from "firebase/firestore";
function Header() {
  const [menuData, setMenuData] = useState([]);
  const [websiteName, setWebsiteName] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "times"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData);
    };
    fetchData();
  }, []);

  return (
    <Navbar id="nav" bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <span className="brand-name">&nbsp;
            <img className="img-logo" src="img/gg-logo.png" alt="" />
            God Gift International
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto header-nav">
            {menuData.map((item) => (
              <Link className="header-link" to={`/${item.username}`} key={item.id}>
                {item.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
