import React, { useState, useEffect } from 'react';
import '../Experience/Experience.css';
import express from '../../images/expressjs-logo.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Experience() {
    const [projectsPosition, setProjectsPosition] = useState(0);

    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef1, AnimationInView1] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });
    const [AnimationRef5, AnimationInView5] = useInView({ threshold: 0.5 });
    const [AnimationRef6, AnimationInView6] = useInView({ threshold: 0.5 });
    const [AnimationRef7, AnimationInView7] = useInView({ threshold: 0.5 });
    const [AnimationRef8, AnimationInView8] = useInView({ threshold: 0.5 });

    useEffect(() => {
        const projectsSection = document.getElementById('projects');
        const position = projectsSection.offsetTop;

        setProjectsPosition(position);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: projectsPosition,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <section id="experience" className='experience'>
                <motion.div
                    ref={AnimationRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section__text__p1-experience">EXPLORE MY</p>
                    <h1 className="title-experience">EXPERIENCE</h1>
                </motion.div>

                <br/> <br/> <br/>

                
                
                    <div className="experience-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                {/* <h2 className="experience-sub-title">Web Development</h2> */}
                                <div className="article-container">

                                <motion.div
                                    ref={AnimationRef1}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView1 ? 1 : 0, y: AnimationInView1 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <i className="fa-brands fa-js icon fa-2x"></i>
                                        <div>
                                            <h3>JavaScript</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>

                                </motion.div>

                                <motion.div
                                    ref={AnimationRef2}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView2 ? 1 : 0, y: AnimationInView2 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <i className="fa-brands fa-react icon fa-2x"></i>
                                        <div>
                                            <h3>React JS</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>

                                </motion.div>

                                   
                                <motion.div
                                    ref={AnimationRef3}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView3 ? 1 : 0, y: AnimationInView3 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <i className="fa-brands fa-node-js icon fa-2x"></i>
                                        <div>
                                            <h3>Node JS</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>

                                </motion.div>
                                   
                                <motion.div
                                    ref={AnimationRef4}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView4 ? 1 : 0, y: AnimationInView4 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <img
                                            src={express}
                                            alt="Experience icon"
                                            className="icon"
                                        />
                                        <div>
                                            <h3>Express JS</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>

                                </motion.div>

                                <motion.div
                                    ref={AnimationRef5}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView5 ? 1 : 0, y: AnimationInView5 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <i className="fa-solid fa-database icon fa-2x"></i>
                                        <div>
                                            <h3>Mongo DB</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>

                                </motion.div>

                                <motion.div
                                    ref={AnimationRef6}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView6 ? 1 : 0, y: AnimationInView6 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <i className="fa-brands fa-css3-alt icon fa-2x"></i>
                                        <div>
                                            <h3>CSS</h3>
                                            <p>Experienced</p>
                                        </div>
                                    </article>

                                </motion.div>

                                <motion.div
                                    ref={AnimationRef7}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView7 ? 1 : 0, y: AnimationInView7 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <i className="fa-solid fa-database fa-2x icon"></i>
                                        <div>
                                            <h3>SQL</h3>
                                            <p>Basic</p>
                                        </div>
                                    </article>
                            
                                </motion.div>

                                <motion.div
                                    ref={AnimationRef8}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: AnimationInView8 ? 1 : 0, y: AnimationInView8 ? 0 : 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <article className='skills'>
                                        <i className="fa-brands fa-github-alt icon-git fa-2x"></i>
                                        <div>
                                            <h3>Git</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                </motion.div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                 
            </section>
            <div className='arrow-container'>
                <i onClick={handleClick} className="fa-solid fa-angles-down fa-2x arrow"></i>
            </div>
        </>

    );
}

export default Experience;