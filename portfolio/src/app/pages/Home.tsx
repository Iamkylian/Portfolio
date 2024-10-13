import Footer from "app/components/Footer";
import Header from "app/components/Header";
import React from "react";
import CV from "./CV";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <CV />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
