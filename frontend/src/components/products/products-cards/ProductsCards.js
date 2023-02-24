import { getDocs, collection } from "firebase/firestore";
import React,{ useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../../../firebase";
import "./productsCards.css";

const ProductsCards = () => {
  const [menuData, setMenuData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData); 
  };
 
    fetchData();
  }, []);

  return (
    <Container><br />
      <h2 className="w3-leftbar w3-border-bottom w3-border-grey certification">Our Collection</h2>
      <Row>
      {menuData.map((item) => (
      <Col className="coll-col" sm={4}>
        <Row><div className="coll">
          <img  className="image" src={item.img} alt="" />
        </div></Row>
    </Col>
))}
      </Row>
    </Container>
  );
};

export default ProductsCards;
