import React from 'react';
import './Home.css';
import './Offering.css';

const asset = name => `/brand/${name}`;
const services = [
  ['pink', 'offering-23@4x.png', <>Websites that<br />feel like you</>, 'Thoughtful design, clean code and a little personality. Websites that not only look good, but feel like home.'],
  ['lavender', 'offering-24@4x.png', <>Brands with<br />personality</>, 'Visual identities with intention and character. Brands that connect, communicate and stand out for the right reasons.'],
  ['coral', 'offering-25@4x.png', <>Ideas that<br />make sense</>, 'Creative thinking backed by real purpose. Ideas that solve, support and move your project forward.'],
  ['blue', 'offering-26@4x.png', <>Creative solutions<br />for real people</>, 'Beautiful, useful experiences made for humans. Because great design should be approachable, authentic and enjoyable.'],
];

export default function Offering() {
  return <div className="pop-home about-offering">
      <section className="pop-offering organic-offering" aria-labelledby="offering-title">
        <div className="pop-offering-heading">
          <div className="home-section-heading"><p className="pop-eyebrow">What I bring to the table</p><h2 className="home-section-title" id="offering-title">A mix of strategy, creativity<br />and <em className="pop-highlight">a lot of heart.</em> ♡</h2></div>
          <p>Design · Develop · Create ♡</p>
        </div>
        <div className="pop-services">
        {services.map(([color, illustration, title, description]) => <article className={`pop-service ${color}`} key={color}>
          <img src={asset(illustration)} alt="" loading="lazy" />
          <h3>{title}</h3>
          <p>{description}</p>
        </article>)}
        </div>
      </section>

  </div>;
}
