import React from 'react';
import '../Footer/Footer.css'
import image from '../../images/CV-logotype.png'

function Footer() {

    return (
        <footer className='footer'>
            <p>Copyright &#169; 2023 </p><img alt='logotype' className='footer-image' src={image}></img> <p> All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;