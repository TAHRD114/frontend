import Card from "react-bootstrap/Card";
import data from "../data/project.json";
import Nav from "./components/Nav";
import BlogPage from "./projects/BlogPage";
import About from "./components/AboutPage";
import TrafficInfo from "./components/TrafficInfo";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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

export default function Home({
  homeRef,
  projectRef,
  blogRef,
  aboutRef,
  trafficRef,
}) {
  const scrollTo = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Nav
        scrollTo={scrollTo}
        refs={{ homeRef, projectRef, blogRef, aboutRef, trafficRef }}
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
    </>
  );
}
