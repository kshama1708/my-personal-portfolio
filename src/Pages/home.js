import React, { useEffect, useState } from "react";
import "./Home.css";
import Avathar from "../Assets/Avathar.png.jpg"; 

const Home = () => {
 const text ="Hi, I'm Kshama Salian";
 const [displayText, setDisplayText] = useState("");


 useEffect(()=>
 {
  let i = 0;
  const interval = setInterval(()=>{
    setDisplayText(text.slice(0, i+1));
    i++;

    if(i === text.length){
      clearInterval(interval);
    }
  },150);
  return ()=> clearInterval(interval);
 },[]

);

  return (
    <section id="home" className="home-section">
      <div className="home-left">
        <img src={Avathar} alt="Kshama Salian" className="avatar" />
      </div>
      <div className="home-content">
        <h1><span className="typewriter">{displayText}</span> 👋</h1>
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
