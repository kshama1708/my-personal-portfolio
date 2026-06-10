import React from "react";
import "./Projects.css";
import weather from "../Assets/weather.png";
import portfolio from "../Assets/portfolio.png";
import prajna from "../Assets/prajna.png";

export default function Projects() {

  const projectData = [
    {
      id: 1,
      title: "PRAJNA - 2026",
      description:
        "Built a Website for College Event Registration using HTML, CSS, and javscript and Google sheet integration for backend. It allows users to register for events, view event details, and manage their registrations.",
      tech: ["HTML", "CSS", "JavaScript", "Google Sheets API"],
      image: prajna,
      github: "https://github.com/bhatSumukh/PRAJNA-2026",
      live: "https://prajna-2026.vercel.app/#home",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "My personal portfolio website built using React and CSS animations to showcase my projects and skills.",
      tech: ["React", "HTML", "CSS"],
      image: portfolio,
      github: "https://github.com/kshama1708/my-personal-portfolio",
      live: "#",
    },
    // {
    //   id: 3,
    //   title: "Food Delivery UI",
    //   description:
    //     "A front-end UI design concept for a food delivery app focusing on user experience and clean layouts.",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   image: "project3.jpg",
    //   github: "#",
    //   live: "#",
    // },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard fetching real-time data from a public API with stylish data visualization.",
      tech: ["HTML", "API", "Chart.js"],
      image: weather,
      github: "https://github.com/kshama1708/Weather-dashboard",
      live: "https://weatherdashboardkshama.netlify.app",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>

          <p className="projects-subtitle">
            A collection of projects showcasing my frontend development,
            responsive UI design, and modern web development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">

          {projectData.map((project) => (
            <article className="project-card" key={project.id}>

              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="project-content">

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="project-tech-stack">
                  {project.tech.map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="project-buttons">

                  <a
                    href={project.github}
                    className="project-btn secondary-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="project-btn primary-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                </div>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}