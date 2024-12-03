import Nav from "./components/Nav";
import IntroPage from "./components/Intro";
import BlogPage from "./projects/BlogPage";
import About from "./components/AboutPage";
import TrafficInfo from "./components/TrafficInfo";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Slide from "./components/Slide";
import Sponsor from "./components/Sponsor";
import { motion } from "motion/react";

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
  const introRef = useRef(null);
  const blogRef = useRef(null);
  const trafficRef = useRef(null);
  const aboutRef = useRef(null);
  const gameRef = useRef(null);

  return (
    <>
      <Nav
        scrollTo={scrollTo}
        refs={{ homeRef, gameRef, blogRef, aboutRef, trafficRef, introRef }}
      />
      <ScrollToAnchor />
      <section id="intro" ref={introRef} className="pt-16 mb-12 md:pb-6">
        <IntroPage />
      </section>
      <section id="blog" ref={blogRef} className="pt-16 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut",
          }}
        >
          <BlogPage />
        </motion.div>
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
      <section id="sponsor" className="pt-16">
        <Sponsor />
      </section>
    </>
  );
}
