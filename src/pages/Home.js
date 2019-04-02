import React, { Component } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div id="home">
      <Navbar/>
      <h1>Eduardo Iglesias</h1>
      <section id="about">
        <About/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  )
}

export default Home
