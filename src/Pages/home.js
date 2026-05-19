import React, { useEffect, useState } from "react";
import "./Home.css";
import Avatar from "../Assets/Avatar.png";

const Home = () => {

  const roles = [
    "Web Developer",
    "Front-End Developer",
    "React Developer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {

      setDisplayText(
        currentRole.substring(0, charIndex)
      );

      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex(charIndex + 1);
      }

      else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      }

      else if (charIndex === currentRole.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }

      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }

    }, typingSpeed);

    return () => clearTimeout(timeout);

  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">

          <div className="logo">
            <h2>Kshama Salian</h2>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="home-section">

        <div className="home-container">

          {/* Left Image */}
          <div className="home-image">
            <img
              src={Avatar}
              alt="Kshama Salian"
              className="avatar"
            />
          </div>

          {/* Right Content */}
          <div className="home-content">

            <h1>
              Hi, I'm Kshama Salian 
            </h1>

            <h2 className="typing-role">
              {displayText}
              <span className="cursor">|</span>
            </h2>

            <p>
              I'm passionate about designing interactive,
              colorful web experiences using React and
              modern web technologies.
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;