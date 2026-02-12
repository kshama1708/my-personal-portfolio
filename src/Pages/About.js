import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m <span className="highlight">Kshama Salian</span>, a BCA student and aspiring 
          <span className="highlight"> Front-End Developer</span> passionate about creating 
          visually engaging and user-friendly web experiences.
        </p>
        <p className="about-text">
          I love building responsive interfaces with <span className="highlight">React</span>, 
          exploring modern JavaScript patterns, and turning creative designs into smooth, 
          interactive websites.
        </p>
        <p className="about-text">
          Outside coding, I practise <span className="highlight">yoga</span> and 
          <span className="highlight"> meditation</span> — they help me stay focused, calm, and 
          creative while bringing balance to my daily life.
        </p>
      </div>
    </section>
  );
}
