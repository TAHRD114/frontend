import data from "../../data/project.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectNav from "../components/ProjectNav";
import ReactMarkdown from "react-markdown";

export default function ProjectPage() {
  const { id } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const project = data.find((project) => project.id === parseInt(id));

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/data/${id}.md`);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching the markdown file:", error);
      }
    };

    fetchMarkdown();
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <ProjectNav />
      <h1 className="mt-4 text-center">{project.title}</h1>
      {/* <p>{project.description}</p> */}
      <div className="w-3/5 mx-auto scale-75">
        <img
          src={project.projectImg}
          alt={project.title}
          className="object-contain w-full h-full"
        />
      </div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </>
  );
}
