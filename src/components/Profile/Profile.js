import React from 'react';
import '../Profile/Profile.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Button from '../Button/Button'

function Profile() {
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });

    return (
        <section className="profile" id='profile'>

            <motion.div
                ref={AnimationRef4}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: AnimationInView4 ? 1 : 0, x: AnimationInView4 ? 0 : -50 }}
                transition={{ duration: 0.5 }}
            >
                <div className='section__pic-container'>
                    <div className='blob'></div>
                </div>
            </motion.div>


            <motion.div
                ref={AnimationRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: AnimationInView ? 1 : 0, x: AnimationInView ? 0 : 50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="section__text">
                    <p className="section__text__p1-profile">Hello, I'm</p>
                    <h1 className="title-profile">CAROLINA VITALE</h1>
                    <p className="section__text__p2">WEB DEVELOPER</p>
                    
                    <div className="btn-container">
                        <Button buttonSize='btn--medium' buttonStyle='btn--outline' where='/cv' children='VIEW CV'></Button>
                        <Button buttonSize='btn--medium' buttonStyle='btn--outline' where='/contact' children='CONTACT ME'></Button>
                    </div>

                    <div className="socials-container">
                        <a href='https://www.linkedin.com/in/carolinavitale/' target='_blank' rel='noopener noreferrer'>
                            <i className="fa-brands fa-linkedin-in fa-2x"></i>
                        </a>
                        <a href='https://github.com/CarolinaVitale' target='_blank' rel='noopener noreferrer'>
                            <i className="fa-brands fa-github-alt fa-2x"></i>
                        </a>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}

export default Profile;