import ArrowIcon from '../components/ArrowIcon/ArrowIcon';
import React, { useState } from 'react';
import SelectedProjectGrid from '../components/Projects/SelectedProjectGrid';
import './Home.css';
import './ProjectsPage.css';

const craft = [
  ['code@4x.png', 'Frontend development', 'Responsive websites and interactive interfaces.'],
  ['web@4x.png', 'Web applications', 'Functional, user-friendly digital experiences.'],
  ['hosting@4x.png', 'Deployments & hosting', 'From development to launch.'],
  ['about-art.png', 'UI / UX design', 'Thoughtful, intuitive design that enhances user experience.'],
  ['branding@4x.png', 'Visual identity', 'Branding with personality and a focus on detail.'],
  ['about-photo.png', 'Photography', 'Images, content and visual storytelling.'],
];
const soft = [
  ['petals-sticker@4x.png', 'Creativity', 'Exploring different perspectives and bringing original ideas to life.'],
  ['splash-sticker@4x.png', 'Problem solving', 'Understanding challenges and finding thoughtful, practical solutions.'],
  ['coffee@4x.png', 'Time management', 'Organizing priorities and making room for the details that matter.'],
  ['flower-sticker@4x.png', 'Adaptability', 'Staying curious and flexible as projects and ideas evolve.'],
  ['heart-sticker@4x.png', 'Communication', 'Sharing ideas clearly and listening throughout the creative process.'],
  ['flowers-sticker.png', 'Leadership', 'Bringing people and ideas together with a clear sense of direction.'],
];
const tools = [
  ['React', '/brand/react@4x.png'],
  ['JavaScript', '/brand/javascript@4x.png'],
  ['HTML', '/brand/html@4x.png'],
  ['CSS', '/brand/css@4x.png'],
  ['Git', '/brand/git_1@4x.png'],
  ['GitHub', '/brand/git@4x.png'],
  ['Shopify', '/brand/shopify@4x.png'],
  ['Stripe', '/brand/stripe@4x.png'],
  ['Figma', '/brand/figma@4x.png'],
  ['Photoshop', '/brand/photoshop@4x.png'],
  ['Illustrator', '/brand/illustrator@4x.png'],
  ['Lightroom', '/brand/lightroom@4x.png'],
];

export default function ProjectsPage() {
  const [skillType, setSkillType] = useState('craft');
  return <main className="pop-home work-page">
    <section className="work-intro" aria-labelledby="work-page-title">
      <div><p className="work-eyebrow">02 / Work</p><h1 id="work-page-title">Projects, skills<br />and everything<br />in between. ♡</h1></div>
      <div className="work-intro-copy"><p>Here you'll find a mix of selected projects, the skills I work with, and the tools I use to bring ideas to life.</p><p>From websites and brands to content and creative experiments, this is a space that brings together the different ways I like to create.</p><img className="work-squiggle" src="/brand/work-line-yellow@4x.png" alt="" width="4026" height="536" /></div>
    </section>

    <section className="work-projects" aria-labelledby="work-projects-title">
      <div className="work-section-heading"><h2 id="work-projects-title">01 / Selected projects</h2><span aria-hidden="true" /><a href="#work-project-list">Explore the projects <ArrowIcon direction="down" /></a></div>
      <div id="work-project-list"><SelectedProjectGrid expanded /></div>
    </section>

    <section className="work-skills" aria-labelledby="work-skills-title">
      <div className="work-section-heading"><h2 id="work-skills-title">02 / What I do</h2><span aria-hidden="true" /><div className="work-skill-switch" role="group" aria-label="Choose skill category"><button type="button" aria-pressed={skillType === 'craft'} onClick={() => setSkillType('craft')}>Craft skills</button><button type="button" aria-pressed={skillType === 'soft'} onClick={() => setSkillType('soft')}>Soft skills</button></div></div>
      <div className="work-skill-grid">{(skillType === 'craft' ? craft : soft).map(([image, title, copy]) => <article className="work-skill-card" key={title}><img src={`/brand/${image}`} alt="" loading="lazy" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="work-tools" aria-labelledby="work-tools-title">
      <div className="work-section-heading"><h2 id="work-tools-title">03 / Tools & technologies</h2><span aria-hidden="true" /><p>The tools I use to create ♡</p></div>
      <div className="work-tools-grid">{tools.map(([name, icon]) => <div className="work-tool" key={name}><img src={icon} alt="" loading="lazy" /><span>{name}</span></div>)}</div>
    </section>
  </main>;
}
