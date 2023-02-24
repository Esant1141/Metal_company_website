import { Route, Routes } from "react-router-dom";
import AboutForm from "./admin/pages/AboutForm";
import CertificationForm from "./admin/pages/CertificationForm";
import ContactForm from "./admin/pages/ContactForm";
import Dashboard from "./admin/pages/Dashboard";
import HomeForm from "./admin/pages/HomeForm";
import ProductForm from "./admin/pages/ProductForm";
import Setting from "./admin/pages/Setting";
import SocialForm from "./admin/pages/SocialForm";
import About from "./components/about/About";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import SociallyResponsive from "./components/socially-responsive/SociallyResponsive";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/socially-responsive" element={<SociallyResponsive />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
