import Footer from "./../components/Footer";
import Header from "./../components/Header";
import React from "react";
import Intro from "./Hero";
import Portfolio from "./Projects";
import Contact from "./../components/Contact";
import Education from "./Education";
import Skills from "./Skills";

const Home = () => {

  return (
    <main>
      <Header />
      <Intro />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
