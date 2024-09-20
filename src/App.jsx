import React, { useRef, useEffect } from "react";
import Nav from "./pages/Nav";
import Project from "./pages/Project";
import BlogPage from "./pages/BlogPage";
import About from "./pages/AboutPage";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter, useLocation } from "react-router-dom";
import "./App.css";

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

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const blogRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollTo = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <div className="">
        <Nav
          scrollTo={scrollTo}
          refs={{ homeRef, projectRef, blogRef, aboutRef }}
        />
        <ScrollToAnchor />
        <main>
          {/* <section id="home" ref={homeRef}>
            <Home />
          </section> */}
          <section id="blog" ref={blogRef}>
            <BlogPage />
          </section>
          {/* <section id="project" ref={projectRef}>
            <Project />
          </section> */}
          <section id="about" ref={aboutRef}>
            <About />
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
