import React, { useState, useEffect } from 'react';
import '../Profile/Profile.css';
import picture from '../../images/profile.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Profile() {
    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });
    const [AnimationRef4, AnimationInView4] = useInView({ threshold: 0.5 });

    const [contactPosition, setProjectsPosition] = useState(0);

    useEffect(() => {
        const conactSection = document.getElementById('contact');
        const position = conactSection.offsetTop;

        setProjectsPosition(position);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: contactPosition,
            behavior: 'smooth'
        });
    };

    return (
        <section className="profile" id='profile'>

            <motion.div
                ref={AnimationRef4}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: AnimationInView4 ? 1 : 0, x: AnimationInView4 ? 0 : -50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="section__pic-container">
                    <img className='pic-profile' src={picture} alt="profile" />
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


                        <button
                            className='btn btn--outline btn--medium'
                            onClick={handleClick}
                        >
                            VIEW CV
                        </button>

                        <button
                            className='btn btn--outline btn--medium'
                            onClick={handleClick}
                        >
                            CONTACT INFO
                        </button>
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