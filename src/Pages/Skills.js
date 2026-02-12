import React from "react";
import "./Skills.css";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaGitAlt 
} from "react-icons/fa";
import { SiReactquery } from "react-icons/si"; // optional extra icons

 function Skills() {
  const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt />},
  { name: "JavaScript", icon: <FaJsSquare />},
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <SiReactquery />},
  { name: "Git & GitHub", icon: <FaGitAlt />},
  { name: "API Integration", icon: <FaJsSquare /> },
];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-text">
          Here are some of my key technical skills with their proficiency levels.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;