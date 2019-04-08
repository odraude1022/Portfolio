import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header"
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume"
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer"
import resumeData from '../resumeData';

const Home = () => {
  return (
    <div id="home">
      <Navbar/>
      <Header resumeData={resumeData}/>
      <Projects resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Contact resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </div>
  )
}

export default Home
