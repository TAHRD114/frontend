import data from "../../data/project.json";
import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProjectNav from "../components/ProjectNav";
import Loading from "../components/loading";
import { AnimatedHR } from "../components/Animation";
import ImageSlider from "./ImgSlide";
import Web from "../../assets/icon/web.svg";
import Video from "../../assets/icon/video.svg";
import IG from "../../assets/icon/instagram.svg";
import RF from "../../assets/icon/rf.svg";

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
  const imgRef = useRef(null);

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

  const backgroundImageUrl = "url(/keyVisual.webp)";

  const backgroundStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    opacity: 0.2,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: -1,
  };

  return (
    <>
      <div style={backgroundStyle} className="h-3/4 md:h-screen"></div>
      <ProjectNav
        scrollTo={scrollTo}
        refs={{ memberRef, motiveRef, introRef, recordRef, imgRef }}
        id={id}
      />
      <ScrollToAnchor />
      <h1 className="mt-4 text-center ChenYuluoyan text-4xl w-4/5 mx-auto md:w-full md:text-5xl">
        {project.title}
      </h1>
      <div className="w-4/5 mx-auto md:w-1/3 ink-box">
        {/* <div className="box-inner"> */}
        <img
          src={project.projectImg}
          alt={project.title}
          className="box-inner"
        />
        {/* </div> */}
      </div>
      <section id="member" ref={memberRef} className="pt-24">
        <div className="w-5/6 mx-auto">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">專題組員</h3>
            <AnimatedHR id="hr-member" className="my-1 w-20" />
            <div className="w-full md:w-2/3 md:h-1/2 overflow-hidden text-center">
              <img
                src={project.groupImg}
                alt={project.title}
                className="object-cover object-center w-full h-full"
              />

              <p className="Yu-Mincho-Pr6n">{project.groupMember}</p>
              <p className="text-sm">（由左至右）</p>
            </div>
          </div>
        </div>
      </section>
      <section id="motive" ref={motiveRef} className="pt-24">
        <div className="w-2/3 md:w-1/2 mx-auto text-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">製作動機</h3>
            <AnimatedHR id="hr-motive" className="my-1 w-20" />
          </div>
          <Suspense fallback={<Loading />}>{Component && <Motive />}</Suspense>
        </div>
      </section>
      <section id="intro" ref={introRef} className="pt-24">
        <div className="w-2/3 md:w-1/2 mx-auto text-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">專題介紹</h3>
            <AnimatedHR id="hr-intro" className="my-1 w-20" />
          </div>
          <Suspense fallback={<Loading />}>
            {Component && <Component />}
          </Suspense>
        </div>
      </section>

      <section id="img" ref={imgRef} className="pt-24 pb-12">
        <div className="w-2/3 md:w-2/3 mx-auto text-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">相關照片</h3>
            <AnimatedHR id="hr-img" className="my-1 w-20" />
          </div>
          <div>
            <ImageSlider id={id} />
          </div>
        </div>
      </section>

      <section id="record" ref={recordRef} className="pt-24 pb-12">
        <div className="w-2/3 md:w-1/2 mx-auto text-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <h3 className="text-nav-blue ">相關連結</h3>
            <AnimatedHR id="hr-record" className="my-1 w-20" />
          </div>

          <div className="flex w-1/2 mx-auto justify-center">
            {project.Link ||
            project.ig ||
            project.video ||
            (project.rf && project.rf.length > 0) ? (
              <div className="flex gap-4">
                {project.Link && (
                  <div className="text-center">
                    <a
                      href={project.Link}
                      className="text-nav-blue no-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Web} alt="web" className="w-10 h-10" />
                    </a>
                  </div>
                )}

                {project.ig && (
                  <div className="text-center">
                    <a
                      href={project.ig}
                      className="text-nav-blue no-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={IG} alt="ig" className="w-10 h-10" />
                    </a>
                  </div>
                )}

                {project.video && (
                  <div className="text-center">
                    <a
                      href={project.video}
                      className="text-nav-blue no-underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={Video} alt="video" className="w-10 h-10" />
                    </a>
                  </div>
                )}

                {project.rf && project.rf.length > 0 && (
                  <div className="text-center flex gap-4">
                    {project.rf.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        className="text-nav-blue no-underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={RF}
                          alt={`rf-${index}`}
                          className="w-10 h-10"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-center text-gray-500">無相關資料</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
