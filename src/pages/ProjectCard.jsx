import React from "react";
import "./ProjectCard.css";

function ProjectCard({ id, title, description, imageUrl, group, isEven }) {
  return (
    <div className={`project-card ${isEven ? "even" : "odd"}`}>
      {isEven ? (
        <>
          <div className="project-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <hr className="separator"></hr>
            <p>BY {group}</p>
          </div>
          <div className="project-card-image">
            <img src={imageUrl} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="project-card-image">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="project-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <hr className="separator"></hr>
            <p>BY {group}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectCard;
