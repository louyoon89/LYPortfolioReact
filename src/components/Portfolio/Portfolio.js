import React, { useState } from "react";
import "./Portfolio.css";
import Project from "../Project/Project";
import projectData from "../../data/projects.json";

export default function Portfolio() {
  const [projectList] = useState(projectData);
  return (
    <section>
      <h1>Skills / Projects</h1>
      <div className="card-flex">
        <section className="card-item">
          {projectList.map((card) => {
            return (
              <Project
                name={card.name}
                key={card.name}
                github={card.github}
                deployment={card.deployment}
                image={card.image}
              />
            );
          })}
        </section>
      </div>
      <div className="language-list">
        <p className="language-skills">HTML5</p>
        <p className="language-skills">CSS</p>
        <p className="language-skills">Javascript</p>
        <p className="language-skills">Node</p>
        <p className="language-skills">React</p>
      </div>
    </section>
  );
}
