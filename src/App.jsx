import React, { useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./pages/components/Footer";
import { BrowserRouter, Route, useLocation, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/components/loading";
import ProjectPage from "./pages/projects/ProjectPage";
import PuzzleGame from "./pages/components/PuzzleGame";

function App() {
  const [blogRef, setBlogRef] = React.useState(null);
  return (
    <BrowserRouter>
      <div>
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
          <Route path="/puzzle_game" element={<PuzzleGame />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
