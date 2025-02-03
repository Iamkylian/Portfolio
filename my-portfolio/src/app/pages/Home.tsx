import Footer from "./../components/Footer";
import Header from "./../components/Header";
import React from "react";
//import CV from "./CV";
import Intro from "./Hero";
import Portfolio from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";

const Home = () => {

  return (
    <main>
      <Header />
      <Intro />
      <Education />
      {/* <Certifications/> */}
      {/* <CV /> */}
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
