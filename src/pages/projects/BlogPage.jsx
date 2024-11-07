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

  const buttonClassName = (key, currentKey) =>
    `hover:bg-tab-blue font-bold w-1/5 p-2 text-sm md:text-base md:py-2 md:px-4 rounded-full transition-all duration-300 ease-in-out ${
      key === currentKey ? "bg-tab-blue text-nav-blue" : "text-white"
    }`;

  return (
    <div className="bg-nav-blue w-full md:w-4/5 p-2 rounded-2xl">
      <div className="flex justify-center gap-2 md:gap-4">
        <button
          className={buttonClassName("code", key)}
          onClick={() => handleSelect("code")}
        >
          軟體開發
        </button>
        <button
          className={buttonClassName("virtual", key)}
          onClick={() => handleSelect("virtual")}
        >
          虛擬實境
        </button>
        <button
          className={buttonClassName("product", key)}
          onClick={() => handleSelect("product")}
        >
          產品設計
        </button>
        <button
          className={buttonClassName("edu", key)}
          onClick={() => handleSelect("edu")}
        >
          教育導向
        </button>
        <button
          className={buttonClassName("hr", key)}
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
      <div className="flex mt-12 ml-1/20 items-center">
        <img src="/icon/2-05.png" alt="icon" className="w-20 h-20" />
        <h3 className="noto-serif-tc-regular">作品集</h3>
      </div>
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
