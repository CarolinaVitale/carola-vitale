import React, { useEffect, useState } from 'react';
import '../Projects/Projects.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import Button from '../Button/Button'


function Projects() {

    const [contactPosition, setProjectsPosition] = useState(0);

    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });


    useEffect(() => {
        const contactSection = document.getElementById('contact');
        const position = contactSection.offsetTop;

        setProjectsPosition(position);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: contactPosition,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <section className='projects' id="projects">
                <motion.div
                    ref={AnimationRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section__text__p1-project">BROWSE MY RECENT</p>
                    <h1 className="title-project">PROJECTS</h1>
                </motion.div>

                
                <br /> <br /> <br />


                <motion.div
                    ref={AnimationRef2}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: AnimationInView2 ? 1 : 0, y: AnimationInView2 ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="experience-details-container">
                        <div className="about-containers">
                            <div className="details-container color-container">
                                <div className="article-container">
                                    <img
                                        src={project1}
                                        alt="Project 1"
                                        className="project-img"
                                    />
                                </div>
                                <h2 className="experience-sub-title project-title">by Miguel Bravo</h2>
                                <div className="btn-container">
                                    <Button buttonSize='btn--medium' buttonStyle='btn--outline' where='https://github.com/CarolinaVitale/bymiguelbravo' children='GITHUB' target='_blank'></Button>
                                    <Button buttonSize='btn--medium' buttonStyle='btn--outline' where='https://bymiguelbravo.com' children='LIVE DEMO' target='_blank'></Button>
                                </div>
                            </div>
                            <div className="details-container color-container">
                                <div className="article-container">
                                    <img
                                        src={project2}
                                        alt="Project 2"
                                        className="project-img"
                                    />
                                </div>
                                <h2 className="experience-sub-title project-title">ocho trece</h2>
                                <div className="btn-container">
                                    <Button buttonSize='btn--medium' buttonStyle='btn--outline' where='https://github.com/CarolinaVitale/ocho-trece' children='GITHUB' target='_blank'></Button>
                                    <Button buttonSize='btn--medium' buttonStyle='btn--outline' where='https://ochotrece.restaurant' children='LIVE DEMO' target='_blank'></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            
            </section>
            <div className='arrow-container'>
                <i onClick={handleClick} className="fa-solid fa-angles-down fa-2x arrow"></i>
            </div>
        </>
    );
}

export default Projects;