import React from 'react';

const projects = [
  {
    name: 'Souraw',
    image: '/projects/souraw.png',
    alt: 'Souraw homepage featuring artisan sourdough bread',
    url: 'https://souraw.com/',
    category: 'E-commerce / Sourdough',
    description: 'A warm, expressive website for artisan sourdough bread, crafted with intention and personality.',
    code: 'https://github.com/CarolinaVitale/souraw.git',
  },
  {
    name: 'The Two of Us',
    image: '/projects/thetwofus.png',
    alt: 'The Two of Us homepage with colorful gifts and stationery',
    url: 'https://thetwofus.com/',
    category: 'Website / Gifts & stationery',
    description: 'A colorful digital home for thoughtful gifts, little details, and everyday joy.',
  },
  {
    name: 'by Miguel Bravo',
    image: '/projects/bymiguelbravo.png',
    alt: 'by Miguel Bravo homepage featuring a private dining experience',
    url: 'https://bymiguelbravo.com/',
    category: 'Website / Private chef',
    description: 'A personal website for private dining, catering, and pop-up dinners with chef Miguel Bravo.',
    code: 'https://github.com/CarolinaVitale/bymiguelbravo',
  },
];

export default function SelectedProjectGrid({ expanded = false }) {
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
            <a className="selected-project-arrow" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website`}><span aria-hidden="true">→</span></a>
            {expanded && <a className="work-project-button" href={project.url} target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">→</span></a>}
            {project.code && <a className="selected-project-code" href={project.code} target="_blank" rel="noopener noreferrer">View code ↗</a>}
          </div>
        </article>
      ))}
    </div>
  );
}
