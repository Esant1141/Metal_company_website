import { Col } from "react-bootstrap";

// export const cardObject = {
//   cardHeading: "Welcome To God Gift International",
//   cardPara:
//     "God Gift International is a leading indian manufacturer and exporter of all types of metal hardware and handicrafts items. The range of our product line, good quality, and competitive prices have made us one of the fastest growing companies of its kind in india.",
// };
const cardItem = [
  {
    img: "img/icon1.png",
    tag: "HOME",
    desc: "Our extensive experience as manufacturer & exporter of Hotelware Items like Brass & Stainless Stee Cutlery.",
  },
  {
    img: "img/icon2.png",
    tag: "ABOUT",
    desc: "Our extensive experience as manufacturer & exporter of Hotelware Items like Brass & Stainless Stee Cutlery.",
  },
  {
    img: "img/icon3.png",
    tag: "PRODUCTS",
    desc: "Our extensive experience as manufacturer & exporter of Hotelware Items like Brass & Stainless Stee Cutlery.",
  },
  {
    img: "img/icon4.png",
    tag: "CONTACT US",
    desc: "Our extensive experience as manufacturer & exporter of Hotelware Items like Brass & Stainless Stee Cutlery.",
  },
];
const cardItemFun = (item) => {
  return (
    <>
      <Col sm={3}>
        <div className="card-icon">
          <img src={item.img} alt="" />
        </div>
        <p className="card-menu">{item.tag}</p>
      </Col>
    </>
  );
};
export const mainCardItemFun = cardItem.map(cardItemFun);
