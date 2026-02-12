import React from "react";
import "./Home.css";
import Avathar from "../Assets/Avathar.png"; // ✅ correct import

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-left">
        <img src={Avathar} alt="Kshama Salian" className="avatar" />
      </div>
      <div className="home-content">
        <h1>Hi, I'm <span>Kshama Salian</span> 👋</h1>
        <h2>Front-End Developer & Creative Coder</h2>
        <p>
          I'm passionate about designing interactive, colorful web experiences
          using React and modern web technologies.
        </p>
        <div className="btn-group">
          <a href="#about" className="btn nav">About</a>
          <a href="#skills" className="btn nav">Skills</a>
          <a href="#projects" className="btn nav">View Projects</a>
          <a href="#contact" className="btn nav">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
