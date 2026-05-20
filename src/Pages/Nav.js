import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="links">
        <a href="#home" className="link">Home</a>
        <a href="#about" className="link">About</a>
        <a href="#skills" className="link">Skills</a>
        <a href="#projects" className="link">Projects</a>
        <a href="#contact" className="link">Contact</a>
      </div>
    </nav>
  );
}