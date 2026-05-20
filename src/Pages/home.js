import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "./Nav.js";

const Home = () => {
  const text = "Hi, I'm Kshama Salian";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
<Nav />
      <div className="home-content">
        <h1>
          <span className="typewriter">{displayText}</span> 👋
        </h1>
        <h2>Front-End Developer & Creative Coder</h2>
        <p>
          I'm passionate about designing interactive, colorful web experiences
          using React and modern web technologies.
        </p>
      </div>
    </section>
  );
};

export default Home;