import React from "react";
import "./Projects.css";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Travel Planner App",
      description:
        "A React Native app that helps users plan road trips with live routes, waypoints, and weather info.",
      tech: ["React Native", "Expo", "OpenRouteService API"],
      image: "project1.jpg", // replace later with your real image
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "My personal portfolio website built using React and CSS animations to showcase my projects and skills.",
      tech: ["React", "HTML", "CSS"],
      image: "project2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Food Delivery UI",
      description:
        "A front-end UI design concept for a food delivery app focusing on user experience and clean layouts.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "project3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard fetching real-time data from a public API with stylish data visualization.",
      tech: ["React", "API", "Chart.js"],
      image: "project4.jpg",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <a href={project.link} className="project-btn">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
