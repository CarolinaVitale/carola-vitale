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
import Projects from "./pages/ProjectsPage";

import ProjectInquiry from "./pages/ProjectInquiry";

const ProposalPreview = process.env.NODE_ENV === "development"
  ? React.lazy(() => import("./pages/ProposalPreview")) : null;

const MarProposalPreview = process.env.NODE_ENV === "development"
  ? React.lazy(() => import("./pages/MarProposalPreview")) : null;

function AppContent() {
  const location = useLocation();
  if (process.env.NODE_ENV === "development" && location.pathname === "/proposal-mar") {
    return <React.Suspense fallback={<p>Cargando propuesta…</p>}><MarProposalPreview /></React.Suspense>;
  }
  const isResumePage = location.pathname === "/resume";
  if (process.env.NODE_ENV === "development" && location.pathname === "/proposal-preview") {
    return <React.Suspense fallback={<p>Loading proposal…</p>}><ProposalPreview /></React.Suspense>;
  }

  return (
    <>
      {!isResumePage && <Navbar />}

      <ScrollToTop />

      <div id="page-content" tabIndex="-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/start-project" element={<ProjectInquiry />} />
        <Route path="/resume" element={<CV />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/curriculum-vitae" element={<CV />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </div>

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