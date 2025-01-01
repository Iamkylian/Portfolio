import Footer from "./../components/Footer";
import Header from "./../components/Header";
import React from "react";
//import CV from "./CV";
import Intro from "./Intro";
import Portfolio from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";

const Home = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Education />
      {/* <Certifications/> */}
      {/* <CV /> */}
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
