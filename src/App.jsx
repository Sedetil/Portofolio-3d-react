import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Statistic from "./pages/Statistic";
import Contact from "./pages/Contact";
import Soon from "./pages/Soon";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/statistic" element={<Statistic />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/soon" element={<Soon />} />
    </Routes>
  </Router>
);

export default App;
