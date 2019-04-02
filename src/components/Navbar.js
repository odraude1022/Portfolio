import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="links">
      <a href="#home"> Home </a> |
      <a href="#about"> About </a> |
      <a href="#projects"> Projects </a> |
      <a href="#contact"> Contact </a> |
    </div>
  );
};

export default Navbar;
