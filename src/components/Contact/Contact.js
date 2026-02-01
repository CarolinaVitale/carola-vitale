import React from 'react';
import '../Contact/Contact.css'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


function Contact() {

    const [AnimationRef, AnimationInView] = useInView({ threshold: 0.5 });

    return (
        <section className='contact' id="contact">
            <motion.div
                ref={AnimationRef}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : -50 }}
                transition={{ duration: 0.5 }}
            >
                <p className="section__text__p1-contact">REACH OUT TO ME</p>
                <h1 className="title-contact">CONTACT ME</h1>
            </motion.div>

            <br /> <br /> <br />


            <motion.div
                ref={AnimationRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: AnimationInView ? 1 : 0, y: AnimationInView ? 0 : 50 }}
                transition={{ duration: 0.5 }}
            >
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <a className='contact-a' href="mailto:cvitalerrico@gmail.com">
                            <i className="fa-solid fa-at contact-icon fa-2x"></i>
                        cvitalerrico@gmail.com
                        </a>
                    </div>

                    <div className="contact-info-container">
                        <a className='contact-a' href='https://www.linkedin.com/in/carolinavitale/' target='_blank' rel='noopener noreferrer'>
                            <i className="fa-brands fa-linkedin contact-icon fa-2x"></i>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}

export default Contact;