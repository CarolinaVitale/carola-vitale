import React from 'react';
import '../components/About/About.css'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CircleText from '../components/CircleText/CircleText';

function AboutPage() {
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef2, AnimationInView2] = useInView({ threshold: 0.5 });
    const [AnimationRef3, AnimationInView3] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });

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
                        <div className="section__pic-container-about">

                            <CircleText className="about-pic"
                                text="• ♡ • THIS IS MY PROFILE • ♡ • THIS IS MY PROFILE " />
                        </div>


                    </motion.div>

                </div>
            </section>
        </>
        
    );
}

export default AboutPage;