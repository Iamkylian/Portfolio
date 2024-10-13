import Footer from "app/components/Footer";
import Header from "app/components/Header";
import React from "react";
import CV from "./CV";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <CV />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
