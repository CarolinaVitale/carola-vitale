import ArrowIcon from '../components/ArrowIcon/ArrowIcon';
import React, { useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './HomeMotion.css';
import { Link } from 'react-router-dom';
import BrandIcon from '../components/BrandIcon';
import AnimatedWordmark from '../components/AnimatedWordmark';
import CraftStickers from '../components/Projects/CraftStickers';
import Testimonials from '../components/Testimonials';
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
  const root = useRef(null);
  useScrollReveal(root);
  return (
    <main ref={root} id="main-content" className="pop-home">
      <section className="pop-hero" aria-label="Carola Vitale, frontend developer and designer">
        <div className="pop-hero-copy">
          <AnimatedWordmark />
          <div className="pop-hero-intro">
            <p className="pop-tagline">Design · Develop · Create ♡</p>
            <p className="pop-introduction">I'm a frontend developer and designer who loves turning ideas into meaningful digital experiences.</p>
            <a className="pop-button coral" href="#work">View my work <ArrowIcon /></a>
          </div>
          <Doodle name="petals-sticker@4x.png" className="hero-flower" />
        </div>
        <div className="pop-hero-photo">
          <img className="pop-portrait" src={asset('founder@4x.png')} alt="Illustration of Carola creating on her laptop" fetchpriority="high" width="1006" height="903" />
          <div className="pop-photo-note">Powered by<br />coffee &amp; ideas ♡</div>
          <div className="hero-heart hero-coffee" aria-hidden="true">
            <Doodle name="laptop-sticker@4x.png" />
            <svg className="hero-coffee-steam" viewBox="0 0 60 80" fill="none" focusable="false">
              <path d="M13 73C-2 60 27 51 14 36S10 15 17 6" />
              <path d="M31 76C45 62 19 51 31 36S40 17 33 5" />
              <path d="M48 73C34 59 60 50 48 35S44 15 51 6" />
            </svg>
          </div>
        </div>
      </section>

      <div className="creative-ribbon" role="img" aria-label="Design, develop, branding, Shopify, photography">
        <div className="creative-ribbon-track" aria-hidden="true">
          {[0, 1].map(copy => <span className="creative-ribbon-copy" key={copy}>{Array.from({ length: 3 }, (_, index) => <span key={index}>DESIGN ♡ DEVELOP ♡ BRANDING ♡ SHOPIFY ♡ PHOTOGRAPHY ♡ </span>)}</span>)}
        </div>
      </div>

      <section className="pop-about" id="about" aria-labelledby="about-title">
        <div className="pop-about-art pop-about-art--portrait"><span className="pop-art-note">A little curiosity.<br />A lot of heart.</span><img className="pop-about-portrait" src={asset('contact-workspace-watercolor.png')} alt="Watercolor illustration of Carola resting her head beside her laptop in a cozy studio" loading="lazy" width="1086" height="1448" /><Doodle name="heart-sticker@4x.png" className="about-coffee" /></div>
        <div className="pop-about-copy"><SectionHeading number="01" label="About me" id="about-title">A mix of logic<br />and <em className="pop-highlight">creativity.</em> ♡</SectionHeading><p>I'm Carola, a frontend developer and designer with a background in fashion and marketing. I love creating digital experiences, building brands, and exploring ideas that combine creativity with strategy.</p><p>From a first sketch to the last line of code, I bring a thoughtful eye and an entrepreneurial spirit to everything I create.</p><Link className="pop-button yellow" to="/about">Get to know me <ArrowIcon /></Link><CraftStickers /><Doodle name="flower@4x.png" className="about-flower" /></div>
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


      <Testimonials />

      <section className="little-things" id="little-things" aria-labelledby="little-things-title">
        <div className="little-things-layout"><div className="little-things-intro"><SectionHeading number="04" label="Little things I make" id="little-things-title">Little things I <em className="pop-highlight">make.</em> ♡</SectionHeading>
        <p>Beyond the screen: printables, photography and a bakery brand I love.</p></div>
        <div className="little-things-grid">
          <article className="etsy-card">
            <span className="selected-project-category"><BrandIcon name="etsy" /> Etsy shop</span>
            <a className="etsy-photo" href="https://www.etsy.com/shop/Souraw" target="_blank" rel="noopener noreferrer"><img src="/brand/etsy-kit.jpg" alt="SOURAW collage on an ivory desk with illustrated stickers, gift tags and a heart-patterned coffee cup" loading="lazy" width="1200" height="1200" /><span className="etsy-sales-sticker">35+ sales · 5★</span></a>
            <div className="little-copy"><h3>Printables for bakers &amp; small businesses</h3><p>Hand-drawn cookie packaging, gift tags and thank-you cards, ready to print.</p></div><a className="pop-button yellow" href="https://www.etsy.com/shop/Souraw" target="_blank" rel="noopener noreferrer"><BrandIcon name="etsy" /> Shop on Etsy <ArrowIcon direction="upRight" /></a>
            <blockquote className="etsy-review">
              <span className="etsy-review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <p>"Very responsive, helpful and went above and beyond helping me!"</p>
              <cite>— Rachel, Etsy customer ♡</cite>
            </blockquote>
          </article>
          <article className="instagram-card" aria-label="SOURAW photography on Instagram">
            <div className="instagram-profile">
              <div className="instagram-avatar"><img src="/brand/ig-avatar.png?v=artboard2" alt="Carolina Vitale, SOURAW" width="200" height="200" loading="lazy" /></div>
              <div className="instagram-profile-copy"><h3>@souraw.us <svg className="instagram-verified" viewBox="0 0 24 24" role="img" aria-label="Verified"><path fill="currentColor" d="m12 1 3 2 3.6.4 1.1 3.4L22 10l-1 3.5.3 3.6-3.2 1.7-2.2 2.9-3.5-.8-3.5.8-2.2-2.9L3.5 17l.3-3.6L2.8 10l2.3-3.2 1.1-3.4L9.8 3Z" /><path d="m7.5 11.8 3 3 6-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></h3><p>SOURAW by Carolina Vitale</p></div>
            </div>
            <div className="instagram-stats"><span className="instagram-stat">2.7K followers</span><span className="instagram-stat">1.8M views in one month</span></div>
            <div className="instagram-content">
            <div className="instagram-grid">{['SOURAW illustrated canvas bag and product tag', 'Chocolate chip cookie held above a cooling rack', 'SOURAW tiramisu with lavender packaging', 'A hand holding a SOURAW printed card with green diamonds and pink stripes', 'An open sourdough loaf beside white flowers', 'A cookie gift box with a red ribbon'].map((alt, index) => <a key={alt} href="https://www.instagram.com/souraw.us/" target="_blank" rel="noopener noreferrer"><img src={`/brand/ig-${index + 1}.jpg`} alt={alt} loading="lazy" width="600" height="600" /><span aria-hidden="true">♡</span></a>)}</div>
            <a className="pop-button pink" href="https://www.instagram.com/souraw.us/" target="_blank" rel="noopener noreferrer"><BrandIcon name="instagram" /> Follow @souraw.us <ArrowIcon direction="upRight" /></a>
            </div>
          </article>
        </div></div>
        <svg className="little-island-wave little-island-wave--top" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 20C100 0 200 0 300 20S500 40 600 20C700 0 800 0 900 20S1100 40 1200 20V40H0Z" /></svg>
        <svg className="little-island-wave little-island-wave--bottom" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 20C100 0 200 0 300 20S500 40 600 20C700 0 800 0 900 20S1100 40 1200 20V40H0Z" /></svg>
      </section>

      <section className="pop-contact coral" id="contact" aria-labelledby="contact-title"><Doodle name="founder-sticker@4x.png" /><div><p className="pop-eyebrow">05 / Let’s talk</p><h2 id="contact-title">Let's make<br /><em className="pop-highlight">something great.</em></h2><p>A website, a brand, or an idea that won't leave your head.<br />I'd love to hear about it.</p></div><Link className="pop-button pink" to="/contact">Let's talk <span className="contact-heart" aria-hidden="true">♡</span> <ArrowIcon /></Link></section>
    </main>
  );
}
