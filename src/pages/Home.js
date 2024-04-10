import React, { useState } from 'react';
import About from '../components/About/About'
import Profile from '../components/Profile/Profile'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact';
import FooterNav from '../components/FooterNav/FooterNav'

function Home() {
    const [scrollToSection, setScrollToSection] = useState(null);

    return (
        <>
            <Profile setScrollToSection={setScrollToSection}/>
            <About />
            <Experience />
            <Projects scrollToSection={scrollToSection}/>
            <Contact />
            <FooterNav />
        </>
    );
}

export default Home;