import React from "react";
import Home from "./Pages/home";
import About from "./Pages/About";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Skills from "./Pages/Skills";

function App() {
  return (
    <div>
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
