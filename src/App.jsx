import React, { useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./pages/components/Footer";
import { BrowserRouter, Route, useLocation, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/components/loading";
import ProjectPage from "./pages/projects/ProjectPage";
import PuzzleGame from "./pages/components/PuzzleGame";
import Vote from "./pages/components/Vote";
import VoteResults from "./pages/components/VoteResults";
import FAQ from "./pages/FAQ";

function App() {
  const [blogRef, setBlogRef] = React.useState(null);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/puzzle_game" element={<PuzzleGame />} />
          {/* <Route path="/vote" element={<Vote />} /> */}
          <Route path="/iting-is-not-cute" element={<VoteResults />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
