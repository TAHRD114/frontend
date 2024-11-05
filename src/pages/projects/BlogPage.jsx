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
    <div className="bg-nav-blue w-full p-2 rounded-2xl">
      <div className="flex justify-center gap-2 md:gap-4">
        <button
          className={` hover:bg-dark-yellow font-bold w-1/5 p-2 text-sm md:text-base md:py-2 md:px-4 rounded-full ${
            key === "code" ? "bg-dark-yellow text-nav-blue" : "text-white"
          }`}
          onClick={() => handleSelect("code")}
          style={{ transition: "all 0.3s ease" }}
        >
          軟體開發
        </button>
        <button
          className={`hover:bg-dark-yellow font-bold w-1/5 p-2 text-sm md:text-base md:py-2 md:px-4 rounded-full ${
            key === "virtual" ? "bg-dark-yellow text-nav-blue" : "text-white"
          }`}
          onClick={() => handleSelect("virtual")}
          style={{ transition: "all 0.3s ease" }}
        >
          虛擬實境
        </button>
        <button
          className={` hover:bg-dark-yellow font-bold w-1/5 p-2 text-sm md:text-base md:py-2 md:px-4 rounded-full ${
            key === "product" ? "bg-dark-yellow text-nav-blue" : "text-white"
          }`}
          onClick={() => handleSelect("product")}
          style={{ transition: "all 0.3s ease" }}
        >
          產品設計
        </button>
        <button
          className={` hover:bg-dark-yellow font-bold w-1/5 p-2 text-sm md:text-base md:py-2 md:px-4 rounded-full ${
            key === "edu" ? "bg-dark-yellow text-nav-blue" : "text-white"
          }`}
          onClick={() => handleSelect("edu")}
          style={{ transition: "all 0.3s ease" }}
        >
          教育導向
        </button>
        <button
          className={` hover:bg-dark-yellow font-bold w-1/5 p-2 text-sm md:text-base md:py-2 md:px-4 rounded-full ${
            key === "hr" ? "bg-dark-yellow text-nav-blue" : "text-white"
          }`}
          onClick={() => handleSelect("hr")}
          style={{ transition: "all 0.3s ease" }}
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
        <h3 className="nanum-myeongjo-regular">作品集</h3>
      </div>
      <div className="projects w-10/12 md:w-2/3">
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
