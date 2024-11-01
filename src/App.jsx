import React, { useRef, useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./pages/components/Footer";
import { BrowserRouter, Route, useLocation, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/components/loading";
import ProjectPage from "./pages/projects/ProjectPage";

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const blogRef = useRef(null);
  const trafficRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home
                  refs={{ homeRef, projectRef, blogRef, aboutRef, trafficRef }}
                  scrollTo={scrollTo}
                />
              </main>
            }
          />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
