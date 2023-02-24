import React from "react";
import Layout from "../../Layout";
import Address from "./adresses/Address";
import ContactTop from "./contactPage/ContactTop";
import "react-quill/dist/quill.snow.css";
import { TabTitle } from "../../Title";

const Contact = () => {
  TabTitle('Contact us | God Gift International')
  return (
    <Layout>
      <ContactTop />
      <Address />
    </Layout>
  );
};

export default Contact;
