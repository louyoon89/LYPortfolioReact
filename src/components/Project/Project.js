import React from "react";
import "./Project.css";

function Card(props) {
  const isDeployed = props.deployment;
  return (
    <article className="card-wrapper">
      <div className="project-section">
        <h3 className="project-title">{props.name}</h3>
      </div>

      <div className="project-card-image">
        {isDeployed ? (
          <a href={props.deployment} target="_blank" rel="noreferrer">
            <img
              src={process.env.PUBLIC_URL + props.image}
              alt="img placeholder"
            />
          </a>
        ) : (
          <a href={props.github} target="_blank" rel="noreferrer">
            <img
              className="project-image"
              src={process.env.PUBLIC_URL + props.image}
              alt="img placeholder"
            />
          </a>
        )}
      </div>
    </article>
  );
}

export default Card;