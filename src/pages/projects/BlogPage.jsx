import "./BlogPage.css";
import ProjectCard from "./ProjectCard";
import data from "../../data/project.json";
import { useState } from "react";

function TypeTabs({ onSelect }) {
  const [key, setKey] = useState("code");

  const handleSelect = (key) => {
    setKey(key);
    onSelect(key);
  };

  return (
    <div className="bg-gray-300 w-full p-2 rounded-2xl">
      <div className="flex justify-center space-x-4">
        <button
          className={`bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full ${
            key === "code" ? "bg-gray-500" : ""
          }`}
          onClick={() => handleSelect("code")}
        >
          軟體開發
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full ${
            key === "virtual" ? "bg-gray-500" : ""
          }`}
          onClick={() => handleSelect("virtual")}
        >
          虛擬實境
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full ${
            key === "product" ? "bg-gray-500" : ""
          }`}
          onClick={() => handleSelect("product")}
        >
          產品設計
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full ${
            key === "edu" ? "bg-gray-500" : ""
          }`}
          onClick={() => handleSelect("edu")}
        >
          教育導向
        </button>
        <button
          className={`bg-gray-300 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full ${
            key === "hr" ? "bg-gray-500" : ""
          }`}
          onClick={() => handleSelect("hr")}
        >
          人資桌遊
        </button>
      </div>
    </div>
  );
}

const Blog = () => {
  const [selectedType, setSelectedType] = useState("code");

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const filteredData = data.filter((project) => project.type === selectedType);

  return (
    <div className="App">
      <h3 style={{ display: "flex", marginLeft: "8%", marginTop: "50px" }}>
        作品集
      </h3>
      <div className="projects">
        <TypeTabs onSelect={handleTypeSelect} />
        {filteredData.map((project, index) => (
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
    </div>
  );
};

export default Blog;
