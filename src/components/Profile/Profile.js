import React from 'react';
import '../Profile/Profile.css'
import picture from '../../images/profile.png'
import { Button } from '../Button/Button';

function Profile() {

    return (
        <section className="profile" id='profile'>
            <div className="section__pic-container">
                <img className='pic-profile' src={picture} alt="profile" />
            </div>
            <div className="section__text">
                <p className="section__text__p1-profile">Hello, I'm</p>
                <h1 className="title-profile">CAROLINA VITALE</h1>
                <p className="section__text__p2">WEB DEVELOPER</p>
                <div className="btn-container">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'
                        onclick="window.open('./assets/resume-example.pdf')"
                    >
                        DOWNLOAD CV
                    </Button>

                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'
                        onclick="location.href='./#contact'"
                    >
                        CONTACT INFO
                    </Button>
                </div>

                <div className="socials-container">
                    <i className="fa-brands fa-linkedin-in icon fa-2x"
                        onclick="location.href='https://linkedin.com/'">
                    </i>
                    <i className="fa-brands fa-github-alt icon fa-2x"
                        onclick="location.href='https://github.com/CarolinaVitale'">

                    </i>
                </div>
            </div>
        </section>
    );
}

export default Profile;