import ArrowIcon from '../components/ArrowIcon/ArrowIcon';
import React, { useState, useRef, useEffect } from 'react';
import SelectedProjectGrid from '../components/Projects/SelectedProjectGrid';
import './Home.css';
import './ProjectsPage.css';
import './HomeMotion.css';
import './InnerPageMotion.css';
import useScrollReveal from '../hooks/useScrollReveal';

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
  const root = useRef(null);
  const [skillType, setSkillType] = useState('craft');
  const [selectedSkill, setSelectedSkill] = useState('craft');
  const [leaving, setLeaving] = useState(false);
  const switchTimer = useRef(null);
  useEffect(() => () => clearTimeout(switchTimer.current), []);
  useScrollReveal(root, skillType);
  const switchSkills = next => {
    clearTimeout(switchTimer.current);
    setSelectedSkill(next);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSkillType(next); setLeaving(false); return;
    }
    setLeaving(true);
    switchTimer.current = setTimeout(() => { setSkillType(next); setLeaving(false); }, 180);
  };
  return <main ref={root} className="pop-home work-page inner-motion">
    <section className="work-intro" aria-labelledby="work-page-title">
      <div><p className="work-eyebrow">02 / Work</p><h1 id="work-page-title">Projects, skills<br />and everything<br />in between. ♡</h1></div>
      <div className="work-intro-copy"><p>Here you'll find a mix of selected projects, the skills I work with, and the tools I use to bring ideas to life.</p><p>From websites and brands to content and creative experiments, this is a space that brings together the different ways I like to create.</p><img className="work-squiggle draw-reveal" src="/brand/work-line-yellow@4x.png" alt="" width="4026" height="536" /></div>
    </section>

    <section className="work-projects" aria-labelledby="work-projects-title">
      <div className="work-section-heading"><h2 id="work-projects-title">01 / Selected projects</h2><span aria-hidden="true" /><a href="#work-project-list">Explore the projects <ArrowIcon direction="down" /></a></div>
      <div id="work-project-list"><SelectedProjectGrid /></div>
    </section>

    <section className="work-skills" aria-labelledby="work-skills-title">
      <div className="work-section-heading"><h2 id="work-skills-title">02 / What I do</h2><span aria-hidden="true" /><div className={`work-skill-switch ${selectedSkill === 'soft' ? 'is-soft' : ''}`} role="group" aria-label="Choose skill category"><button type="button" aria-pressed={selectedSkill === 'craft'} onClick={() => switchSkills('craft')}>Craft skills</button><button type="button" aria-pressed={selectedSkill === 'soft'} onClick={() => switchSkills('soft')}>Soft skills</button></div></div>
      <div className={`work-skill-grid ${leaving ? 'is-leaving' : ''}`} key={skillType}>{(skillType === 'craft' ? craft : soft).map(([image, title, copy]) => <article className="work-skill-card" key={title}><img src={`/brand/${image}`} alt="" loading="lazy" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="work-tools" aria-labelledby="work-tools-title">
      <div className="work-section-heading"><h2 id="work-tools-title">03 / Tools & technologies</h2><span aria-hidden="true" /><p>The tools I use to create ♡</p></div>
      <div className="work-tools-grid">{tools.map(([name, icon]) => <div className="work-tool" key={name}><img src={icon} alt="" loading="lazy" /><span>{name}</span></div>)}</div>
    </section>
  </main>;
}
