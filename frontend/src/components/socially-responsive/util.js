import { Row } from "react-bootstrap";

const sociallyResponsive = [
  {
    img: "img/gate3.png",
    title: "First Image",
    description:
      "We look forward to welcome you to our stand and try to fulfil your requirements in best ways possible!!",
  },
  {
    img: "img/gate3.png",
    title: "First Image",
    description:
      "We look forward to welcome you to our stand and try to fulfil your requirements in best ways possible!!",
  },
  {
    img: "img/gate3.png",
    title: "First Image",
    description:
      "We look forward to welcome you to our stand and try to fulfil your requirements in best ways possible!!",
  },
];
const sociallyResponsiveFun = (item) => {
  return (
    <Row>
      <img src={item.img} alt="" />
      <b>{item.title}</b>
      <p>{item.description}</p>
    </Row>
  );
};
export const mainSociallyResponsive = sociallyResponsive.map(
  sociallyResponsiveFun
);
