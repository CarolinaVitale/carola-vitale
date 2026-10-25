import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = useRef(null);
  const toggle = useRef(null);
  const { pathname } = useLocation();
  const close = () => setOpen(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointerDown = event => {
      if (!nav.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  return <>
    <a className="pop-skip" href="#page-content">Skip to content</a>
    <header className="pop-header">
      <nav ref={nav} aria-label="Main navigation" className={`pop-nav ${open ? 'is-open' : ''}`}>
        <Link to="/" className="pop-wordmark" onClick={close}>CAROLA VITALE <span aria-hidden="true">♡</span></Link>
        <button ref={toggle} type="button" className="pop-menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="pop-navigation" onClick={() => setOpen(!open)}>
          <span>{open ? 'Close' : 'Menu'}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
            {open ? <path d="m5 5 10 10M15 5 5 15" /> : <path d="M3 6h14M3 14h14" />}
          </svg>
        </button>
        <div className="pop-nav-panel" id="pop-navigation">
          <div className="pop-nav-links">
            <NavLink to="/about" onClick={close}>About <ArrowIcon direction="upRight" /></NavLink>
            <NavLink to="/projects" onClick={close}>Work <ArrowIcon direction="upRight" /></NavLink>
          </div>
          <Link className="pop-nav-cta" to="/contact" onClick={close}>Let's talk <ArrowIcon /></Link>
        </div>
      </nav>
    </header>
  </>;
}
