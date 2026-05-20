import React from "react";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiNetlify,
  SiC,
} from "react-icons/si";

function Skills() {

  const frontendTools = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ];

  const versionControl = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Netlify", icon: <SiNetlify /> },
  ];

  const programmingLanguages = [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "C", icon: <SiC /> },
  ];

  const spokenLanguages = [
    "Kannada",
    "Hindi",
    "English",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">Skills & Education</h2>
          <p className="skills-subtitle">
            Technologies, tools, and languages I use to build modern web experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {/* Frontend Tools */}
          <div className="skills-card">
            <h3 className="card-title">Frontend Tools</h3>

            <div className="skills-items">
              {frontendTools.map((tool, index) => (
                <div className="skill-badge" key={index}>
                  <span className="skill-icon">{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Version Control */}
          <div className="skills-card">
            <h3 className="card-title">Version Control & Deployment</h3>

            <div className="skills-items">
              {versionControl.map((tool, index) => (
                <div className="skill-badge" key={index}>
                  <span className="skill-icon">{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="skills-card">
            <h3 className="card-title">Programming Languages</h3>

            <div className="skills-items">
              {programmingLanguages.map((tool, index) => (
                <div className="skill-badge" key={index}>
                  <span className="skill-icon">{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="skills-card">
            <h3 className="card-title">Languages</h3>

            <div className="language-list">
              {spokenLanguages.map((language, index) => (
                <span className="language-badge" key={index}>
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="skills-card education-card">
            <h3 className="card-title">Education</h3>

            <div className="education-content">
              <h4>Poornaprajna College, Udupi</h4>
              <p>Bachelor of Computer Applications (BCA)</p>
            </div>
          </div>

          <div className="skills-card education-card">
            <h3 className="card-title">Achivements</h3>

            <div className="education-content">
              <ul>
                <li>First Place - Web Design Competition (YENOPOYA - 2025)</li>
                <li>Built Registration Website for colllege event (Prajna - 2026)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;