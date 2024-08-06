import Nav from "./pages/Nav";
import Project from "./pages/Project";
import BlogPage from "./pages/BlogPage";
import About from "./pages/AboutPage";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/aboutUs" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
