import ArrowIcon from '../ArrowIcon/ArrowIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer() {
 return <footer className="pop-footer"><div><Link className="pop-wordmark" to="/">Carola Vitale ♡</Link><p>Design. Develop. Create.</p></div><div className="pop-footer-links"><a href="https://www.linkedin.com/in/carolinavitale/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon direction="upRight" /></a><a href="https://github.com/CarolinaVitale" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon direction="upRight" /></a></div><p className="pop-copyright">© {new Date().getFullYear()} Carola Vitale. Made with care & a little creativity.</p></footer>;
}
