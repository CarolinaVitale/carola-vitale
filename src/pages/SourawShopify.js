import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Home.css';
import './HomeMotion.css';
import './SourawShopify.css';

const steps = [
  { title: 'Custom theme', text: "I customized Shopify's Dawn theme with custom Liquid sections — header, footer and catalog — so the store matches SOURAW's bold, warm brand.", image: 'theme', alt: 'SOURAW custom theme featuring the green In the spotlight / 5 Roots section' },
  { title: 'Product catalog', text: 'I organized a four-loaf catalog with clear product pages: photography, price, story and ingredients.', image: 'catalog', alt: 'SOURAW four-loaf catalog: Meet your next favorite', detail: true },
  { title: 'The Sourdough Edit', text: 'A campaign landing page introducing the four loaves: four different personalities, one obsession with doing things the slow way.', image: 'campaign', alt: 'The Sourdough Edit campaign introducing four sourdough loaves' },
  { title: 'Inventory workflow', text: "I built and tested a Shopify Flow workflow: when a loaf's stock drops below 3 units, the product is automatically tagged for review, so it never sells out unnoticed.", image: 'flow', alt: 'Shopify Flow inventory workflow with a stock threshold and product review tag' },
];

function Screenshot({ name, alt, crop = false, priority = false }) {
  const [missing, setMissing] = useState(false);
  return <figure className={`shopify-screenshot${crop ? ' shopify-screenshot--crop' : ''}`}>
    {missing ? <div className="shopify-image-placeholder" role="img" aria-label={`${alt} — screenshot pending`}><span aria-hidden="true">♡</span><p>{alt}</p><small>Screenshot coming soon</small></div> : <img src={`/images/projects/souraw-shopify/${name}.jpg`} alt={alt} loading={priority ? 'eager' : 'lazy'} onError={() => setMissing(true)} />}
  </figure>;
}

export default function SourawShopify() {
  const root = useRef(null);
  useScrollReveal(root);
  return <main ref={root} className="pop-home shopify-case">
    <header className="shopify-case-header">
      <Link className="shopify-back" to="/#work">← Back to work</Link>
      <p className="selected-project-category">Shopify · E-commerce</p>
      <h1>Souraw — <em className="pop-highlight">Shopify</em> storefront</h1>
      <p className="shopify-intro case-reveal">A Shopify storefront for SOURAW, an artisan sourdough bakery in Tampa. I designed the shopping experience, organized the catalog, built a seasonal campaign page and set up an inventory workflow.</p>
      <ul className="shopify-facts" aria-label="Project details">{['Role: Designer & developer', 'Platform: Shopify (Dawn)', 'Tools: Liquid · Shopify Flow', 'Status: Development preview'].map(fact => <li className="case-reveal" key={fact}>{fact}</li>)}</ul>
    </header>
    <div className="case-reveal"><Screenshot name="home" alt="SOURAW Shopify storefront homepage" priority /></div>
    <section className="shopify-process" aria-labelledby="shopify-process-title">
      <h2 id="shopify-process-title">What I <em className="pop-highlight">did.</em> ♡</h2>
      {steps.map((step, index) => <article className="shopify-step" key={step.image + step.title}>
        <div className="shopify-step-copy case-reveal"><p className="shopify-step-number">0{index + 1}</p><h3>{step.title}</h3><p>{step.text}</p></div>
        <div className="shopify-step-images case-reveal"><Screenshot name={step.image} alt={step.alt} crop={step.crop} />{step.detail && <div className="shopify-product-detail"><Screenshot name="product" alt="SOURAW product page showing photography, price, story and ingredients" /><p className="shopify-image-caption">Product page: photography, price, story and ingredients.</p></div>}</div>
      </article>)}
    </section>
    <aside className="etsy-review shopify-preview-note case-reveal"><p>This store is in development preview, so it's password-protected. These screenshots show the work in progress. ♡</p></aside>
    <nav className="shopify-case-actions" aria-label="Case study navigation"><Link className="pop-button yellow" to="/#work">← Back to work</Link><Link className="pop-button pink" to="/contact">Let's talk ♡</Link></nav>
  </main>;
}
