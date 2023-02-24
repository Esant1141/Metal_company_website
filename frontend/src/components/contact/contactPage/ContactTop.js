import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import send from "../img/send.gif";
import "./contactTop.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Popup from "./Modal";
import Swal from "sweetalert2";

const ContactTop = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuillChange = (value) => {
    setMessage(value);
  };

  // const time = setTimeout(() => {
  //   console.log("I will be executed 5 seconds after component mount")  
  //  }, 10000);

  const handleRequest = async (e) => {
    if (email && fname && lname && number !== "") {
      if (message !== "") {
        e.preventDefault();
        setLoading(true);
        console.log({ email, message, fname,lname, number });

        const body = {
          email,
          message,
          number,
          fname,
          lname,
        };

        await axios.post("http://localhost:8080/mail", body, {
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res ,timer) => {
            // alert("Thanks for contacting us. We will connect with you shortly...");
            Swal.fire({
              icon: "success",
              title: "Success",
              text: `Thanks for contacting us. We will connect with you shortly...`,
              showConfirmButton: true,
              timer: 5000,
            });
            setLoading(false);
            console.log(res);
            // window.location.reload();
            setFName("")
            setMessage("")
            setEmail("")
            setLName("")
            setNumber("")
            
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        alert("Compose Email");
      }
    } else {
      // alert("Please fill all required filled");
      if (!email || !message || !number || !fname || !lname) {
        return Swal.fire({
          icon: "error",
          title: "Error!",
          text: "All fields are required.",
          showConfirmButton: true,
        });
      }
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="contact-1" sm={4}>
            <img
              className="w3-animate-zoom img-contact"
              src="img/longvas.png"
              alt=""
            />
          </Col>
          <Col className="contact-2" sm={8}>
            <div className="form-contact">
            <div className="form__title">
              <h1>{loading ? "Sending..." : "Drop us a line"}</h1>
              {loading && (
                <img
                  src={send}
                  alt="loading..."
                  className="img-load"
                  style={{
                    filter: "invert(1)",
                    position: "absolute",
                    width: 100,
                    height: 100,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-30%, -30%)",
                  }}
                />
              )}
            </div>
              <Form  onSubmit={handleRequest} method="post" className="w3-animate-left forms">
                <Form.Group
                  className="mb-3"
                >
                  <Form.Control
                    id="name"
                    value={fname}
                    onChange={(e) => setFName(e.target.value)}
                    required={true}
                    className="form-input"
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                >
                  <Form.Control
                   id="name"
                   value={lname}
                   onChange={(e) => setLName(e.target.value)}
                   required={true}
                    className="form-input"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                >
                  <Form.Control
                   id="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required={true}
                    className="form-input"
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                >
                  <Form.Control
                    id="subject"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    className="form-input"
                    type="number"
                    placeholder="Contact No."
                  />
                </Form.Group>
                <ReactQuill
                    id="message"
                    value={message}
                    onChange={handleQuillChange}
                    className="quill"
                    placeholder="Enter Content from here..."
                  />
                  <br />
                <Button  disabled={loading}
                      onClick={handleRequest} className="form-btn" type="submit">
                  <center>Submit</center>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactTop;
