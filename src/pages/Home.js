import React from 'react';
import About from '../components/About/About'
import Profile from '../components/Profile/Profile'
// import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact';
import FooterNav from '../components/FooterNav/FooterNav'
import Skill from '../components/Skills/Skills';

function Home() {

    return (
        <>
            <Skill />
            <Profile />
            {/* <Experience /> */}
            <About />
            <Projects />
            <Contact />
            <FooterNav />
        </>
    );
}

export default Home;