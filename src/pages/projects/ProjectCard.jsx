import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ id, title, description, imageUrl, isEven }) {
  return (
    <div className={`project-card ${isEven ? "even" : "odd"}`}>
      {isEven ? (
        <Link to={`/projects/${id}`} className="no-underline text-black">
          <div className="flex h-52 w-full">
            <div className="project-info w-2/3">
              <h2
                style={{
                  color: "rgba(161, 177, 188, 1)",
                  fontWeight: "bolder",
                }}
              >
                {title}
              </h2>
              <p className="text-left w-4/5 mx-auto">{description}</p>
            </div>
            <div className="flex justify-center items-center w-1/3 overflow-hidden mr-2">
              <img
                src={imageUrl}
                alt={title}
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`/projects/${id}`} className="no-underline text-black">
          <div className="flex h-52 w-full">
            <div className="flex justify-center items-center w-1/3 ml-2 overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
            <div className="project-info w-2/3">
              <h2
                style={{
                  color: "rgba(161, 177, 188, 1)",
                  fontWeight: "bolder",
                }}
              >
                {title}
              </h2>
              <p className="text-left w-4/5 mx-auto">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ProjectCard;
