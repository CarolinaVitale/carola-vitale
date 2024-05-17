import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../../images/CV-logo.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo' src={logo} alt='logo' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link
                                to='about'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/experience'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                EXPERIENCE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/projects'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                PROJECTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/contact'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;