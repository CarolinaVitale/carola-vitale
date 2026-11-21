import ArrowIcon from '../ArrowIcon/ArrowIcon';
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Souraw',
    caseStudy: '/projects/souraw-shopify',
    image: '/projects/souraw-full.jpg',
    alt: 'Souraw homepage featuring artisan sourdough bread',
    url: 'https://souraw.com/',
    category: 'Website · E-commerce',
    description: 'Brand website for a Tampa sourdough bakery, designed and coded from scratch. I also built its Shopify storefront, designed The Sourdough Edit campaign and set up an inventory workflow in Shopify Flow.',
    tools: 'Web design · Frontend · Shopify',
    action: 'View live site',
    code: 'https://github.com/CarolinaVitale/souraw.git',
  },
  {
    name: 'The Two of Us',
    image: '/projects/thetwofus-full.webp',
    alt: 'The Two of Us homepage with colorful gifts and stationery',
    url: 'https://thetwofus.com/',
    category: 'Brand · Website',
    description: 'Co-founder & creative lead of a gift and stationery brand. I created the visual identity, product photography and website.',
    tools: 'Branding · Web design · Photography',
    action: 'View live site',
  },
  {
    name: 'Miguel Bravo',
    image: '/projects/bymiguelbravo-full.webp',
    alt: 'Miguel Bravo homepage featuring a private dining experience',
    url: 'https://bymiguelbravo.com/',
    category: 'Website · Private chef',
    description: 'Personal website for a private chef: private dining, catering and pop-up dinners, designed to feel as warm as his table.',
    tools: 'Web design · Frontend',
    action: 'View live site',
    code: 'https://github.com/CarolinaVitale/bymiguelbravo',
  },
];

export default function SelectedProjectGrid() {
  return (
    <div className="selected-work-grid">
      {projects.map(project => (
        <article className="selected-project" key={project.url}>
          <a className="selected-project-visual" href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.alt} loading="lazy" />
          </a>
          <div className="selected-project-info">
            <span className="selected-project-category">{project.category}</span>
            <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
            <p>{project.description}</p>
            <p className="selected-project-tools">{project.tools}</p>
            <div className="selected-project-links">
              <a className="selected-project-code" href={project.url} target="_blank" rel="noopener noreferrer">{project.action} <ArrowIcon direction="upRight" /></a>
              {project.code && <a className="selected-project-code" href={project.code} target="_blank" rel="noopener noreferrer">View code <ArrowIcon direction="upRight" /></a>}
              {project.caseStudy && <Link className="selected-project-code" to={project.caseStudy}>Shopify case study →</Link>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
