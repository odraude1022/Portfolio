import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume"
import Header from "../components/Header/Header"
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
    </div>
  )
}

export default Home
