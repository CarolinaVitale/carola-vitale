import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <><a className="pop-skip" href="#page-content">Skip to content</a><header className="pop-header"><nav aria-label="Main navigation" className="pop-nav"><Link to="/" className="pop-wordmark" onClick={close}>CAROLA VITALE <span aria-hidden="true">♡</span></Link><button type="button" className="pop-menu-toggle" aria-expanded={open} aria-controls="pop-navigation" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu +'}</button><div className={`pop-nav-links ${open ? 'is-open' : ''}`} id="pop-navigation"><Link to="/about" onClick={close}>About</Link><Link to="/projects" onClick={close}>Work</Link></div><Link className="pop-nav-cta" to="/contact" onClick={close}>Let's talk <span aria-hidden="true">⟶</span></Link></nav></header></>;
}
