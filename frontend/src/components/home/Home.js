import React from "react";
import Layout from "../../Layout";
import HomeChildTop from "./home-child-1/HomeChild1";
import MainGate from "./home-child-2/MainGate";
import WelcomCard from "./home-child-3/WelcomCard";
import AboutTop from "../about/about-child-1/AboutTop";
import HomeChildFour from "./home-child-4/HomeChildFour";
import { TabTitle } from "../../Title";

const Home = () => {
  TabTitle('God Gift International')
  return (
    <Layout>
      <HomeChildTop />
      <MainGate />
      <HomeChildFour />
      <WelcomCard />
      <AboutTop />
    </Layout>
  );
};

export default Home;
