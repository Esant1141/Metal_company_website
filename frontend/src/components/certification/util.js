import { Row } from "react-bootstrap";

const certification = [
  {
    img: "img/new1.jpg",
    title: "First Image",
    description:
      "We look forward to welcome you to our stand and try to fulfil your requirements in best ways possible!!",
  },
  {
    img: "img/new6.jpg",
    title: "First Image",
    description:
      "We look forward to welcome you to our stand and try to fulfil your requirements in best ways possible!!",
  },
  {
    img: "img/new3.jpg",
    title: "First Image",
    description:
      "We look forward to welcome you to our stand and try to fulfil your requirements in best ways possible!!",
  },
];
const certificationFun = (item) => {
  return (
    <Row>
      <img src={item.img} alt="" />
      <b>{item.title}</b>
      <p>{item.description}</p>
    </Row>
  );
};
export const mainCertification = certification.map(
    certificationFun
);
