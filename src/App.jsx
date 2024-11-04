import React, { useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./pages/components/Footer";
import { BrowserRouter, Route, useLocation, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/components/loading";
import ProjectPage from "./pages/projects/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home />
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
