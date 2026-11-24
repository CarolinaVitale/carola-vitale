import React from 'react';
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
  return <section className="testimonials" aria-labelledby="testimonials-title">
    <div className="home-section-heading"><p className="pop-eyebrow">Kind words</p><h2 className="home-section-title" id="testimonials-title">What people <em className="pop-highlight">say</em> ♡</h2></div>
    <div className="testimonial-grid">{testimonials.map(({ quote, name, role }) => <blockquote className="testimonial-note" key={name}>
      <span className="testimonial-quote" aria-hidden="true">“</span>
      <p>{quote}</p>
      <footer><cite>— {name}</cite><span>{role}</span></footer>
    </blockquote>)}</div>
    <a className="testimonials-more" href="https://www.linkedin.com/in/carolinavitale/" target="_blank" rel="noopener noreferrer">Read more on LinkedIn ↗</a>
  </section>;
}
