import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-line"></div>
        </div>

        {/* About Content */}
        <div className="about-content">

          {/* Left Side */}
          <div className="about-info">
            <p className="about-text">
              I’m <span className="highlight">Kshama Salian</span>, a BCA
              Graduate and aspiring
              <span className="highlight">
                {" "}Front-End Developer
              </span>{" "}
              passionate about creating visually engaging and user-friendly
              web experiences.
            </p>

            <p className="about-text">
              I love building responsive interfaces with
              <span className="highlight"> React</span>,
              exploring modern JavaScript patterns, and turning creative
              designs into smooth, interactive websites.
            </p>

            <p className="about-text">
              Outside coding, I practise
              <span className="highlight"> yoga</span> and
              <span className="highlight"> meditation</span> — they help me
              stay focused, calm, and creative while bringing balance to my
              daily life.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="about-cards">

            <div className="about-card">
              <h3>Education</h3>
              <p>Poornaprjana College, Udupi</p>
              <p>Bachelor of Computer Applications (BCA)</p>
            </div>

            <div className="about-card">
              <h3>Focus</h3>
              <p>Responsive & Interactive UI Design</p>
            </div>

            <div className="about-card">
              <h3>Learning</h3>
              <p>Modern Web Technologies & Full Stack</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}