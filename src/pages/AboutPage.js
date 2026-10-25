import React from 'react';
import Offering from './Offering';
import './AboutPage.css';

const art = name => `/brand/${name}`;
const passions = [
  ['about-laptop.png', 'Web Development', 'Frontend, UI and digital experiences.'],
  ['about-fashion.png', 'Fashion & Design', 'A creative foundation that inspires everything I create.'],
  ['about-photo.png', 'Photography & Content', 'Visual storytelling and creative content.'],
  ['about-bread.png', 'SOURAW', 'My sourdough brand. Baking, creating and sharing the process.'],
  ['about-art.png', 'Creative Entrepreneur', 'Building brands, products and ideas from the ground up.'],
];

export default function AboutPage() {
  return (
    <main className="studio-about">
      <section className="studio-about-intro" aria-labelledby="studio-about-title">
        <div className="studio-about-story">
          <p className="studio-about-label">01 / About me</p>
          <h1 id="studio-about-title">A mix of logic<br />and creativity. ♡</h1>
          <p>I'm a front-end developer and creative entrepreneur with a background in fashion, marketing and design.</p>
          <p>I love bringing ideas to life through thoughtful digital experiences that balance aesthetics, functionality, and personality.</p>
          <p>But creativity doesn't stop at my screen. I'm also a fashion designer, content creator, photographer and the founder of SOURAW, my sourdough brand. From writing code and designing websites to baking bread, creating content and building brands, I love exploring different ways to bring ideas to life.</p>
          <p className="studio-about-motto">Different passions. One creative mind. ♡</p>
        </div>
        <div className="studio-about-visual">
          <div className="studio-about-profile">
            <img className="studio-about-photo" src="/brand/profile-watercolor.jpg" alt="Watercolor portrait of Carola holding small white flowers" width="1086" height="1139" fetchpriority="high" />
            <svg className="studio-about-ring" viewBox="0 0 500 500" aria-hidden="true">
              <defs><path id="studio-profile-ring" d="M250,250 m-232,0 a232,232 0 1,1 464,0 a232,232 0 1,1 -464,0" /></defs>
              <text><textPath href="#studio-profile-ring" textLength="1457" lengthAdjust="spacing">THIS IS MY PROFILE · ♡ · THIS IS MY PROFILE · ♡ · </textPath></text>
            </svg>
            <img className="studio-about-heart" src={art('heart-sticker@4x.png')} alt="" />
          </div>
          <p className="studio-about-note">Sometimes<br />I write code.<br />Sometimes<br />I bake bread.<br />Always<br />creating. ♡</p>
        </div>
      </section>

      <section className="studio-about-passions" aria-label="My creative world">
        {passions.map(([image, title, copy]) => <article key={title}>
          <img src={art(image)} alt="" loading="lazy" />
          <h2>{title}</h2><p>{copy}</p>
        </article>)}
      </section>

      <Offering />

      <section className="studio-about-world" aria-labelledby="studio-world-title">
        <h2 id="studio-world-title">A little more<br />of my world ♡ <span aria-hidden="true">⤴</span></h2>
        <a className="studio-world-card studio-world-souraw" href="https://www.instagram.com/souraw.us/" target="_blank" rel="noopener noreferrer">
          <div><h3>@souraw.us <span aria-hidden="true">↗</span></h3><p>Sourdough, entrepreneurship<br />and creative content.</p></div>
          <img src={art('bread-sticker@4x.png')} alt="" loading="lazy" />
        </a>
        <a className="studio-world-card studio-world-untamed" href="https://www.instagram.com/souraw.lab/" target="_blank" rel="noopener noreferrer">
          <div><h3>@souraw.lab <span aria-hidden="true">↗</span></h3><p>Design, DIY, creative projects<br />and behind the scenes.</p></div>
          <img src={art('studio-sticker.png')} alt="" loading="lazy" />
        </a>
      </section>
      <aside className="studio-about-background" aria-label="My background">
        <p><strong>Creative foundation</strong> Fashion Design · Web Development Bootcamp · Digital Marketing for Luxury Brands</p>
      </aside>
    </main>
  );
}
