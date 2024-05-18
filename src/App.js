import Nav from "./pages/Nav";
import Project from "./pages/Project";
import Home from "./pages/Home";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
