import React from 'react';
import '../Experience/Experience.css';
import express from '../../images/expressjs-logo.png'
import '../../App.css'

function Experience() {

    return (
        <section id="experience" className='experience'>
            <p className="section__text__p1-experience">Explore My</p>
            <h1 className="title-experience">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Web Development</h2>
                        <div className="article-container">
                            <article className='skills'>
                                <i class="fa-brands fa-js icon fa-2x"></i>
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            
                            <article className='skills'>
                                <i class="fa-brands fa-react icon fa-2x"></i>
                                <div>
                                    <h3>React JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>

                            <article className='skills'>
                                <i className="fa-brands fa-node-js icon fa-2x"></i>
                                <div>
                                    <h3>Node JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>

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

                            <article className='skills'>
                                <i class="fa-solid fa-database fa-2x"></i>
                                <div>
                                    <h3>Mongo DB</h3>
                                    <p>Basic</p>
                                </div>
                            </article>

                            <article className='skills'>
                                <i className="fa-brands fa-html5 icon fa-2x"></i>
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article className='skills'>
                                <i className="fa-brands fa-css3-alt icon fa-2x"></i>
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            
                            <article className='skills'>
                                <i class="fa-solid fa-database fa-2x icon"></i>
                                <div>
                                    <h3>SQL</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            
                            <article className='skills'>
                                <i className="fa-brands fa-github-alt icon-git fa-2x "
                                    onclick="location.href='https://github.com/CarolinaVitale'">
                                </i>
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <i className="fa-solid fa-angles-down fa-2x icon arrow"
                onclick="location.href='./#projects'"

            ></i>
            
        </section>

    );
}

export default Experience;