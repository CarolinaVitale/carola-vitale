import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import ScrollToTop from '../src/components/ScrollToTop';
import Contact from './pages/Contact';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Routes>
          {/* <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/catering" element={<Catering />} />
          <Route path="/menu" element={<Menu />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>

  );
}

export default App;