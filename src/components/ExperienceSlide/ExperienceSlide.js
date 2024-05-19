import React from "react";
import express from '../../images/expressjs-logo.png'
import sql from '../../images/sql-server.png'

function ExperienceSlide() {
    return (
        <div className='slide-container'>
            <div className="slide-track">
                <div className="slide">
                    <i className="fa-brands fa-js icon fa-2x"></i>
                </div>
                <div className="slide">
                    <i className="fa-brands fa-react icon fa-2x"></i>
                </div>
                <div className="slide">
                    <i className="fa-brands fa-node-js icon fa-2x"></i>
                </div>
                <div className="slide">
                    <img
                        src={express}
                        alt="Experience icon"
                        className="icon"
                    />
                </div>
                <div className="slide">
                    <img
                        src={sql}
                        alt="Experience icon"
                        className="icon"
                    />
                </div>
                <div className="slide">
                    <i className="fa-brands fa-css3-alt icon fa-2x"></i>

                </div>
                <div className="slide">
                    <i className="fa-solid fa-database fa-2x icon"></i>
                </div>
                <div className="slide">
                    <i className="fa-brands fa-github-alt icon-git fa-2x"></i>
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
                <div className="slide">
                </div>
            </div>
        </div>
    );
}

export default ExperienceSlide;