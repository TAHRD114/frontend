import Card from "react-bootstrap/Card";
import data from "../data/project.json";
import Nav from "./components/Nav";
import BlogPage from "./projects/BlogPage";
import About from "./components/AboutPage";
import TrafficInfo from "./components/TrafficInfo";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Slide from "./components/Slide";

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

export default function Home() {
  const scrollTo = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const homeRef = useRef(null);
  const blogRef = useRef(null);
  const trafficRef = useRef(null);
  const aboutRef = useRef(null);
  const gameRef = useRef(null);

  // useEffect(() => {
  //   setBlogRef(blogRef);
  // }, [blogRef, setBlogRef]);

  return (
    <>
      <Nav
        scrollTo={scrollTo}
        refs={{ homeRef, gameRef, blogRef, aboutRef, trafficRef }}
      />
      <ScrollToAnchor />
      <section id="blog" ref={blogRef} className="pt-16">
        <BlogPage />
      </section>
      <section id="traffic" ref={trafficRef} className="pt-16">
        <TrafficInfo />
      </section>
      <section id="about" ref={aboutRef} className="pt-16">
        <About />
      </section>
      <section id="game" ref={gameRef} className="pt-16 pb-16">
        <Slide />
      </section>
    </>
  );
}
