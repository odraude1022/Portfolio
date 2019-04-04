import React from "react";

const Navbar = () => {
  return (
    <div className="links">
      <a className="smoothscroll" href="#home"> Home </a> |
      <a className="smoothscroll" href="#about"> About </a> |
      <a className="smoothscroll" href="#projects"> Projects </a> |
      <a className="smoothscroll" href="#contact"> Contact </a> |
      <a className="smoothscroll" href="#resume"> Resume </a>
    </div>
  );
};

export default Navbar;
