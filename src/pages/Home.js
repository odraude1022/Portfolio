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
      <section id="header">
        <Header resumeData={resumeData}/>
      </section>
      <section id="projects">
        <Projects resumeData={resumeData}/>
      </section>
      <section id="about">
        <About resumeData={resumeData}/>
      </section>
      <section id="resume">
        <Resume resumeData={resumeData}/>
      </section>
      <section id="contact">
        <Contact resumeData={resumeData}/>
      </section>
    </div>
  )
}

export default Home
