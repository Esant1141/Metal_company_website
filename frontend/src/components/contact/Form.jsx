import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import sending from "./img/sending.gif";

const Form = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [number, setNumber] = useState("");

    const [loading, setLoading] = useState(false);

    const handleQuillChange = (value) => {
      setMessage(value);
    };

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
            .then((res) => {
              alert("Email Sent Successfully");
              setLoading(false);
              console.log(res);
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        } else {
          alert("Compose Email");
        }
      } else {
        alert("Please fill all required filled");
      }
    };
    return (
      <form onSubmit={handleRequest} method="post">
        <div className="form">
          <div className="form__wrapper">
            <div className="form__title">
              <h4>{loading ? "Sending..." : "Send Email"}</h4>
              {loading && (
                <img
                  src={sending}
                  alt="loading..."
                  style={{
                    filter: "invert(1)",
                    position: "absolute",
                    width: 200,
                    height: 200,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              )}
            </div>
            <div className="form__container">
              <div className="form__containerItems">
                <div className="form__containerItem">
                  <div className="form__containerItemName">
                    <label>First Name</label>
                  </div>
                  <div className="form__containerItemField">
                    <input
                      id="name"
                      value={fname}
                      onChange={(e) => setFName(e.target.value)}
                      required={true}
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div className="form__containerItem">
                  <div className="form__containerItemName">
                    <label>Last Name</label>
                  </div>
                  <div className="form__containerItemField">
                    <input
                      id="name"
                      value={lname}
                      onChange={(e) => setLName(e.target.value)}
                      required={true}
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div className="form__containerItem">
                  <div className="form__containerItemName">
                    <label>Email</label>
                  </div>
                  <div className="form__containerItemField">
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                      type="email"
                      placeholder="Enter Your valid Email"
                    />
                  </div>
                </div>

                <div className="form__containerItem">
                  <div className="form__containerItemName">
                    <label>Mobile Number</label>
                  </div>
                  <div className="form__containerItemField">
                    <input
                      id="subject"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                      type="number"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form__containerItem">
                  <div className="form__containerItemName">
                    <label>Message</label>
                    <button
                      disabled={loading}
                      onClick={handleRequest}
                      type="submit"
                      className="btn btn-success"
                    >
                      Send
                    </button>
                  </div>
                </div>
                <div className="container__composeMail">
                  <ReactQuill
                    id="message"
                    value={message}
                    onChange={handleQuillChange}
                    className="quill"
                    placeholder="Enter Content from here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };
  export default Form;