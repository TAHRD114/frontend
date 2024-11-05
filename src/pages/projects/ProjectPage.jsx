import data from "../../data/project.json";
import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProjectNav from "../components/ProjectNav";
import Loading from "../components/loading";

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

export default function ProjectPage() {
  const { id } = useParams();
  const [Motive, setMotive] = useState(null);
  const [Component, setComponent] = useState(null);
  const project = data.find((project) => project.id === parseInt(id));

  const scrollTo = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const memberRef = useRef(null);
  const motiveRef = useRef(null);
  const introRef = useRef(null);
  const recordRef = useRef(null);
  //const gameRef = useRef(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const component = await import(`../../data/${id}.jsx`);
        setComponent(() => component.Component);
        setMotive(() => component.Motive);
      } catch (error) {
        console.error("Error loading the component:", error);
      }
    };

    loadComponent();
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <ProjectNav
        scrollTo={scrollTo}
        refs={{ memberRef, motiveRef, introRef, recordRef }}
        id={id}
        // blogRef={blogRef}
      />
      <ScrollToAnchor />
      <h1 className="mt-4 text-center ChenYuluoyan text-4xl w-4/5 mx-auto md:w-full md:text-5xl">
        {project.title}
      </h1>
      <div className="w-4/5 mx-auto md:w-3/5 md:scale-75">
        <img
          src={project.projectImg}
          alt={project.title}
          className="object-contain w-full h-full"
        />
      </div>
      <section id="member" ref={memberRef} className="pt-24">
        <div className="w-5/6 mx-auto">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">專題組員</h3>
            <hr className="my-1 w-20" />
          </div>
        </div>
      </section>
      <section id="motive" ref={motiveRef} className="pt-24">
        <div className="w-5/6 mx-auto">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">製作動機</h3>
            <hr className="my-1 w-20" />
          </div>
          <Suspense fallback={<Loading />}>{Component && <Motive />}</Suspense>
        </div>
      </section>
      <section id="intro" ref={introRef} className="pt-24">
        <div className="w-5/6 mx-auto text-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">專題介紹</h3>
            <hr className="my-1 w-20" />
          </div>
          <Suspense fallback={<Loading />}>
            {Component && <Component />}
          </Suspense>
        </div>
      </section>
    </>
  );
}
