import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Modal = ({ show, onClose, title, imageUrl, description, id }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <div className="flex justify-between items-center p-4 w-full">
          <h3 className="text-lg font-bold w-full">{title}</h3>
        </div>
        <div className="pb-2">
          <img
            src={imageUrl}
            alt={title}
            className="object-contain w-full h-64 rounded-lg mx-auto"
          />
          <p className="mt-4 w-5/6 mx-auto max-h-28 overflow-y-auto overflow-x-hidden">
            {description}
          </p>
          <div className="flex justify-center mt-4 gap-2">
            <button className="bg-nav-blue p-2 rounded-lg">
              <Link to={`/projects/${id}`} className="no-underline text-white">
                前往作品頁
              </Link>
            </button>
            <button
              className="bg-nav-blue p-2 rounded-lg text-white"
              onClick={onClose}
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function ProjectCard({ id, title, description, imageUrl, isEven }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="hidden md:block md:w-full">
        <div className={`project-card ${isEven ? "even" : "odd"}`}>
          {isEven ? (
            <Link
              to={`/projects/${id}`}
              className="no-underline text-black bg-white w-full"
            >
              <div className="flex h-52 w-full max-w-full mx-auto">
                <div className="project-info w-2/3">
                  <h2
                    style={{
                      color: "rgba(161, 177, 188, 1)",
                      fontWeight: "bolder",
                    }}
                  >
                    {title}
                  </h2>
                  <p className="text-left w-4/5 mx-auto max-h-28 overflow-auto">
                    {description}
                  </p>
                </div>
                <div className="flex justify-center items-center w-1/3 overflow-hidden mr-2">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="bg-contain w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to={`/projects/${id}`}
              className="no-underline text-black bg-white w-full"
            >
              <div className="flex h-52 w-full max-w-full mx-auto">
                <div className="flex justify-center items-center w-1/3 ml-2 h-full">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full rounded-lg object-contain"
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
                  <p className="text-left w-4/5 mx-auto max-h-40 overflow-auto">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* 手機版 */}

      <div className="bg-white flex overflow-hidden w-3/4 mt-2 aspect-square md:hidden">
        {/* <Link to={`/projects/${id}`} className="no-underline text-black"> */}
        <div
          className="flex flex-col gap-2 justify-center items-center w-5/6 h-full mx-auto overflow-hidden aspect-square"
          onClick={() => setShow(true)}
        >
          <img
            src={imageUrl}
            alt={title}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        title={title}
        imageUrl={imageUrl}
        description={description}
        id={id}
      />
    </>
  );
}

export default ProjectCard;
