import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import ScrollToTop from '../src/components/ScrollToTop';
import Home from '../src/pages/Home'
import Footer from '../src/components/Footer/Footer';
import ContactPage from './pages/ContactPage';
import CV from './pages/CV';
import CvImage from './pages/CvImage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import Projects from './pages/ProjectsPage';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/experience" element={<ExperiencePage />} exact />
          <Route path="/projects" element={<Projects />} exact />
          <Route path="/contact" element={<ContactPage />} exact />
          <Route path='/cv' element={<CV />} exact />
          <Route path='/curriculum-vitae' element={<CvImage />} exact />

        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;