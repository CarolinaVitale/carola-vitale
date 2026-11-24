import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "She just asked me a few questions about myself and the app I'm building, and within a few hours she had already sent me several different proposals… In just a few days, she gave my project its visual identity.",
    name: 'Rebeca Gonzalez',
    role: 'Software Developer · Visual identity for an animal shelter app',
  },
  {
    quote: "She took the time to understand my story as a chef and what I wanted guests to feel, and turned it into a site that feels as warm and personal as the dinners I host… I'd recommend her to anyone who wants a brand that truly feels like them.",
    name: 'Miguel Bravo',
    role: 'Chef · Personal website for private dining',
  },
  {
    quote: "She understood the assignment right away, and even though every idea she brought was beautiful, she didn't stop until we found the one that felt like me… Anyone would be lucky to work with her.",
    name: 'Vicky De Palma',
    role: 'Senior Software Developer · Wedding planning app',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const transition = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(preference.matches);
    preference.addEventListener('change', update);
    return () => { preference.removeEventListener('change', update); clearTimeout(transition.current); };
  }, []);
  const select = useCallback(index => {
    clearTimeout(transition.current);
    if (reduced) { setActive(index); setLeaving(false); return; }
    setLeaving(true);
    transition.current = setTimeout(() => { setActive(index); setLeaving(false); }, 160);
  }, [reduced]);
  useEffect(() => {
    if (hovered || focused || paused || reduced) return undefined;
    const timer = setInterval(() => select((active + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, [active, hovered, focused, paused, reduced, select]);
  const { quote, name, role } = testimonials[active];
  return <section className="testimonials testimonials-carousel" aria-labelledby="testimonials-title" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className="home-section-heading"><p className="pop-eyebrow">03 / Kind words</p><h2 className="home-section-title" id="testimonials-title">What people <em className="pop-highlight">say</em> ♡</h2></div>
    <div className={`testimonial-stage case-reveal ${leaving ? 'is-changing' : ''}`} aria-live={focused || paused ? 'polite' : 'off'} aria-atomic="true">
      <blockquote className={`testimonial-note testimonial-note--${active}`} key={active}>
        <span className="testimonial-quote" aria-hidden="true">“</span><p>{quote}</p>
        <footer><cite>— {name}</cite><span>{role}</span></footer>
      </blockquote>
    </div>
    <div className="testimonial-selectors" role="group" aria-label="Choose a testimonial">{['Rebeca', 'Miguel', 'Vicky'].map((label, index) => <button type="button" key={label} aria-pressed={active === index} onClick={() => select(index)}>{label}</button>)}</div>
    <a className="testimonials-more" href="https://www.linkedin.com/in/carolinavitale/" target="_blank" rel="noopener noreferrer">Read more on LinkedIn ↗</a>
    {!reduced && <button className="testimonial-playback" type="button" onClick={() => setPaused(value => !value)}>{paused ? 'Resume rotation' : 'Pause rotation'}</button>}
  </section>;
}
