import ArrowIcon from '../ArrowIcon/ArrowIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
 return <footer className="pop-footer">
   <div className="footer-waves" aria-hidden="true">
     <svg className="footer-wave footer-wave-back" viewBox="0 0 1200 40" preserveAspectRatio="none" focusable="false">
       <path d="M0 20C100 0 200 0 300 20S500 40 600 20C700 0 800 0 900 20S1100 40 1200 20V40H0Z" />
     </svg>
     <svg className="footer-wave footer-wave-front" viewBox="0 0 1200 40" preserveAspectRatio="none" focusable="false">
       <path d="M0 20C100 0 200 0 300 20S500 40 600 20C700 0 800 0 900 20S1100 40 1200 20V40H0Z" />
     </svg>
   </div>
   <div><Link className="pop-wordmark" to="/">Carola Vitale ♡</Link><p>Design. Develop. Create.</p></div><div className="pop-footer-links"><a href="https://www.linkedin.com/in/carolinavitale/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon direction="upRight" /></a><a href="https://github.com/CarolinaVitale" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon direction="upRight" /></a><a href="https://www.instagram.com/souraw.us/" target="_blank" rel="noopener noreferrer">Instagram <ArrowIcon direction="upRight" /></a><a href="https://www.etsy.com/shop/Souraw" target="_blank" rel="noopener noreferrer">Etsy <ArrowIcon direction="upRight" /></a></div><p className="pop-copyright">© {new Date().getFullYear()} Carola Vitale. Made with care & a little creativity.</p></footer>;
}
