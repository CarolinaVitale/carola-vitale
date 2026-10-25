import ArrowIcon from '../components/ArrowIcon/ArrowIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectedProjectGrid from '../components/Projects/SelectedProjectGrid';
import './Home.css';

const asset = (name) => `/brand/${name}`;
const Doodle = ({ name, className = '' }) => <img className={`pop-doodle ${className}`} src={asset(name)} alt="" aria-hidden="true" loading="lazy" />;
const SectionHeading = ({ number, label, id, children }) => (
  <div className="home-section-heading">
    <p className="pop-eyebrow">{number && `${number} / `}{label}</p>
    <h2 className="home-section-title" id={id}>{children}</h2>
  </div>
);


export default function Home() {
  return (
    <main id="main-content" className="pop-home">
      <section className="pop-hero" aria-label="Carola Vitale, frontend developer and designer">
        <div className="pop-hero-copy">
          <h1><span className="pop-sr-only">Carola Vitale — frontend developer and designer</span><img src={asset('wordmark.png')} alt="" fetchpriority="high" width="3201" height="1940" /></h1>
          <div className="pop-hero-intro">
            <p className="pop-tagline">Design · Develop · Create ♡</p>
            <p className="pop-introduction">I'm a frontend developer and designer who loves turning ideas into meaningful digital experiences.</p>
            <a className="pop-button coral" href="#work">View my work <ArrowIcon /></a>
          </div>
          <Doodle name="petals-sticker@4x.png" className="hero-flower" />
        </div>
        <div className="pop-hero-photo">
          <img className="pop-portrait" src={asset('founder@4x.png')} alt="Illustration of Carola creating on her laptop" fetchpriority="high" width="1006" height="903" />
          <div className="pop-photo-note">Good ideas<br />take time ♡</div>
          <Doodle name="laptop-sticker@4x.png" className="hero-heart" />
        </div>
      </section>

      <section className="pop-about" id="about" aria-labelledby="about-title">
        <div className="pop-about-art pop-about-art--portrait"><span className="pop-art-note">A little curiosity.<br />A lot of heart.</span><img className="pop-about-portrait" src={asset('contact-workspace-watercolor.png')} alt="Watercolor illustration of Carola resting her head beside her laptop in a cozy studio" loading="lazy" width="1086" height="1448" /><Doodle name="heart-sticker@4x.png" className="about-coffee" /></div>
        <div className="pop-about-copy"><SectionHeading number="01" label="About me" id="about-title">A mix of logic<br />and <em className="pop-highlight">creativity.</em> ♡</SectionHeading><p>I'm Carola, a frontend developer and designer with a background in fashion and marketing. I love creating digital experiences, building brands, and exploring ideas that combine creativity with strategy.</p><p>From a first sketch to the last line of code, I bring a thoughtful eye and an entrepreneurial spirit to everything I create.</p><Link className="pop-button yellow" to="/about">Get to know me <ArrowIcon /></Link><Doodle name="flower@4x.png" className="about-flower" /></div>
      </section>

      <section id="work" className="selected-work" aria-labelledby="work-title">
        <div className="selected-work-header">
          <div className="home-work-intro">
            <SectionHeading number="02" label="Selected projects" id="work-title">Some of<br />my <em className="pop-highlight">work.</em> ♡</SectionHeading>
            <p>A selection of projects combining design, development, and a lot of care.</p>
          </div>
          <img className="home-work-line" src="/brand/work-line-lavender@4x.png" alt="" loading="lazy" />
          <Link to="/projects" className="selected-work-all">View all projects <ArrowIcon /></Link>
        </div>
        <SelectedProjectGrid />
      </section>


      <section className="pop-contact coral" id="contact" aria-labelledby="contact-title"><Doodle name="founder-sticker@4x.png" /><div><p className="pop-eyebrow">03 / Let’s talk</p><h2 id="contact-title">Let's make<br /><em className="pop-highlight">something great.</em></h2><p>A website, a brand, or an idea that won't leave your head.<br />I'd love to hear about it.</p></div><Link className="pop-button pink" to="/contact">Let's talk ♡ <ArrowIcon /></Link></section>
    </main>
  );
}
