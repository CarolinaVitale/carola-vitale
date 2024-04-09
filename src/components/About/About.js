import React from 'react';
import '../About/About.css';
import profile from '../../images/profile-.png'

function About() {

    return (
        <>
            <section id="about" className='about'>
                <p className="section__text__p1-about">GET TO KNOW ME</p>
                <h1 className="title-about">ABOUT ME</h1>
                <div className="section-container">

                    <div className="about-details-container">
                        <div className="about-containers">

                            <div className="details-container">
                                <i className="fa-solid fa-code icon fa-xl"></i>
                                <h3>EXPERIENCE</h3>
                                <p>2+ years <br />Web Development</p>
                            </div>

                            <div className="details-container">
                                <i class="fa-solid fa-user-graduate fa-xl icon"></i>
                                <h3>EDUCATION</h3>
                                <p>Web Development Bootcamp<br />Digital Marketing Specialist for Luxury Brand</p>
                            </div>
                        </div>

                        <div className="text-container">
                            <p>
                                Full-stack MERN Developer with two years of web development experience and a sales background. I've led projects across sectors including sales, banking, and tourism. My passion for technology merges with adaptability, constantly seeking challenges that demand conceptual and analytical thinking for innovative solutions.
                            </p>
                        </div>
                    </div>
                    <div class="section__pic-container">
                        <img
                            src={profile}
                            alt="Profile"
                            className="about-pic"
                        />
                    </div>
                </div>
                <i className="fa-solid fa-angles-down fa-2x icon arrow"
                    onclick="location.href='./#experience'"

                ></i>
                
            </section>
        </>
    );
}

export default About;