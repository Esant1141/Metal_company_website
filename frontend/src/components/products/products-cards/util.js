import { Col } from "react-bootstrap";
export const productsCardsObjects = {
  OurColl: "Our Collection",
};
const cardsMenu = [
  { img: "img/new1.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new6.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new3.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new4.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new5.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new2.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new7.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new8.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  { img: "img/new9.jpg", type: "ID - GGI 000614-S", btn: "View more" },
  
];
const cardsMenuFun = (item) => {
  return (
    <Col className="coll-col" sm={4}>
        <div className="coll">
          <img className="image" src={item.img} alt="" />
        </div>
    </Col>
  );
};
export const mainCardsFun = cardsMenu.map(cardsMenuFun);
