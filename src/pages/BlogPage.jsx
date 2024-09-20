import "./BlogPage.css";
import ProjectCard from "./ProjectCard";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from "../data/project.json";

const Blog = () => {
  return (
    <div className="App">
      <h3 style={{ display: "flex", marginLeft: "8%", marginTop: "50px" }}>
        OUR PROJECT
      </h3>
      <div className="projects">
        {data.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            group={project.group}
            isEven={index % 2 === 1}
          />
        ))}
      </div>

      {/*  <Footer /> */}
    </div>
  );
};

export default Blog;
