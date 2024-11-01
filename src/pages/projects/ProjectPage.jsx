import data from "../../data/project.json";
import { useParams } from "react-router-dom";
import ProjectNav from "../components/ProjectNav";

export default function ProjectPage() {
  const { id } = useParams();
  const project = data.find((project) => project.id === parseInt(id));

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
      <div
        className="w-3/5 mx-auto prose max-w-none"
        dangerouslySetInnerHTML={{ __html: project.detail }}
      />
    </>
  );
}
