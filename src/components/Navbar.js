import React from "react";

const Navbar = () => {
  return (
    <nav id="nav-wrap">
      <ul id="nav" className="nav">
        <li><a className="smoothscroll" href="#home"> Home </a></li>
        <li><a className="smoothscroll" href="#projects"> Projects </a></li>
        <li><a className="smoothscroll" href="#about"> About </a></li>
        <li><a className="smoothscroll" href="#resume"> Resume </a></li>
        <li><a className="smoothscroll" href="#contact"> Contact </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
