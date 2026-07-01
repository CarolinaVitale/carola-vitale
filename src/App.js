import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar";
import ScrollToTop from "../src/components/ScrollToTop";
import Home from "../src/pages/Home";
import Footer from "../src/components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import CV from "./pages/CV";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import Projects from "./pages/Projects/Projects";

function AppContent() {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  return (
    <>
      {!isResumePage && <Navbar />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<CV />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {!isResumePage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;