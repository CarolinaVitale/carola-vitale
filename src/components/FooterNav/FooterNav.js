import React from 'react';
import '../FooterNav/FooterNav.css'

function Footer() {

    return (
        <footer>
            <nav className='nav-footer'>
                <div className="container-footer">
                    <ul className="links-footer">
                        <li><a className='nav-links-footer' href="#about">ABOUT</a></li>
                        {/* <li><a className='nav-links-footer' href="#experience">EXPERIENCE</a></li> */}
                        <li><a className='nav-links-footer' href="#projects">PROJECTS</a></li>
                        <li><a className='nav-links-footer' href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;