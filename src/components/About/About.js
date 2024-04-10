import React, { useState, useEffect } from 'react';
import '../About/About.css';
import profile from '../../images/profile-.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function About() {

    const [experiencePosition, setProjectsPosition] = useState(0);
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });



    useEffect(() => {
        const experienceSection = document.getElementById('experience');
        const position = experienceSection.offsetTop;

        setProjectsPosition(position);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: experiencePosition,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <section id="about" className='about'>

                <motion.div
                    ref={AnimationRef4}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: AnimationInView4 ? 1 : 0, y: AnimationInView4 ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section__text__p1-about">GET TO KNOW ME</p>
                    <h1 className="title-about">ABOUT ME</h1>
                </motion.div>

                <div className="section-container">
                    <div className="about-details-container">

                        <motion.div
                            ref={AnimationRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="about-containers">
                                <div className="details-container">
                                    <i className="fa-solid fa-code icon fa-xl"></i>
                                    <h3>EXPERIENCE</h3>
                                    <p>2+ years <br />Web Development</p>
                                </div>

                                <div className="details-container">
                                    <i className="fa-solid fa-user-graduate fa-xl icon"></i>
                                    <h3>EDUCATION</h3>
                                    <p>Web Development Bootcamp<br />Digital Marketing Specialist for Luxury Brand</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={AnimationRef2}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: AnimationInView2 ? 1 : 0, y: AnimationInView2 ? 0 : 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-container">
                                <p>
                                    Full-stack MERN Developer with two years of web development experience and a sales background. I've led projects across sectors including sales, banking, and tourism. My passion for technology merges with adaptability, constantly seeking challenges that demand conceptual and analytical thinking for innovative solutions.
                                </p>
                            </div>
                        </motion.div>

                    </div>


                    <motion.div
                        ref={AnimationRef3}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: AnimationInView3 ? 1 : 0, x: AnimationInView3 ? 0 : 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="section__pic-container">
                            <img
                                src={profile}
                                alt="Profile"
                                className="about-pic"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>
            <div className='arrow-container'>
                <i onClick={handleClick} className="fa-solid fa-angles-down fa-2x arrow"></i>
            </div>
        </>
    );
}

export default About;