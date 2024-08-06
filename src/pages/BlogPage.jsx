import "./BlogPage.css";
import ProjectCard from "./ProjectCard";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "科技應用之數位教材 1",
    description: "簡介介紹 1",
    imageUrl: "image_url_1_here",
    group: "第一組",
  },
  {
    id: 2,
    title: "科技應用之數位教材 2",
    description: "簡介介紹 2",
    imageUrl: "image_url_1_here",
    group: "第一組",
  },
  {
    id: 3,
    title: "科技應用之數位教材 3",
    description: "簡介介紹 3",
    imageUrl: "image_url_3_here",
    group: "第三組",
  },
  {
    id: 4,
    title: "科技應用之數位教材 4",
    description: "簡介介紹 3",
    imageUrl: "image_url_3_here",
    group: "第三組",
  },
  {
    id: 5,
    title: "科技應用之數位教材 5",
    description: "簡介介紹 5",
    imageUrl: "image_url_3_here",
    group: "第三組",
  },
  {
    id: 6,
    title: "科技應用之數位教材 6",
    description: "簡介介紹 3",
    imageUrl: "image_url_3_here",
    group: "第三組",
  },
  {
    id: 7,
    title: "科技應用之數位教材 7",
    description: "簡介介紹 3",
    imageUrl: "image_url_3_here",
    group: "第三組",
  },
  {
    id: 8,
    title: "科技應用之數位教材 8",
    description: "簡介介紹 3",
    imageUrl: "image_url_3_here",
    group: "第三組",
  },
];

const Blog = () => {
  return (
    <div className="App">
      {/* <Header />
         <Navigation /> */}
      <div className="projects">
        {projects.map((project, index) => (
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
