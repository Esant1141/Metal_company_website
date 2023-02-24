import { Col } from "react-bootstrap";
import "./address.css";
export const addressOblect = {
  address: " Addresses",
};
const addressItem = [
  {
    img: "place",
    tag: "ADDRESS",
    desc: "MAUJA BASANTPUR RAMRAI , RAMPUR ROAD MORADABAD – 244001, INDIA",
  },
  {
    img: "phone",
    tag: "PHONE",
    desc: "+91 9411948471",
  },
  {
    img: "email",
    tag: "E-MAIL",
    desc: "vikram@godgift.co.in",
  },
];
const addressItemFun = (item) => {
  return (
    <>
      <Col className="add-col" sm={4}>
        <div className="add-img-div">
          <i id="address-icons" class="material-icons">
            {item.img}
          </i>
        </div>
        <p className="address-name">{item.tag}</p>
        <p className="address-description">{item.desc}</p>
      </Col>
    </>
  );
};
export const mainAddressFun = addressItem.map(addressItemFun);
