import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import "./home-child-1.css";
import { Link } from "react-router-dom";

function HomeChildTop() {
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
    <div className="background-home-top">
      <div className="w3-animate-left text-slide">
        <h2>{menuData[0] ?.Heading1}</h2>
        <p className="homeone-p">
        {menuData[0] ?.Paragraph1}
        </p>
      </div>
      <div className="w3-animate-right white">
        <Link to="/products">
          <button className="btn-products">Our Products</button>
        </Link>
        &nbsp;&nbsp;
        <Link to="/contact">
          <button className="btn-products">Contact Now</button>
        </Link>
      </div>
    </div>
  );
}
export default HomeChildTop;
