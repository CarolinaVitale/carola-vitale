import React, { useState } from 'react';
import './ProposalPreview.css';
import founder from '../assets/proposal/creative-woman-cover.png';
import petals from '../assets/proposal/petals-sticker@4x.png';
import investmentFounder from '../assets/proposal/investment-founder.png';
import brandIdea from '../assets/proposal/line-35.png';
import brandLaptop from '../assets/proposal/line-38.png';

const processArrows = [
  'M53 7C3 19 3 69 49 84M38 74L50 85L35 91',
  'M45 8C13 27 15 60 43 82M30 77L44 84L43 69',
  'M55 9C8 8 0 47 19 66C27 74 38 75 50 83M39 71L51 84L35 87',
  'M42 5C7 26 8 76 47 87M33 82L49 88L44 73',
  'M55 10C19 11 8 35 16 55C23 72 33 77 51 81M40 69L52 82L37 89',
];

const phases = [
  ['Discovery', 'Week 1', 'Goals, audience, requirements and creative direction.'],
  ['Brand development', 'Weeks 2–3', 'Identity exploration, feedback and brand assets.'],
  ['Website design', 'Weeks 4–5', 'Page layouts and responsive interface design.'],
  ['Development', 'Weeks 6–7', 'Build the approved design and integrate the contact form.'],
  ['Testing & handover', 'Week 8', 'Device checks, final revisions and walkthrough.'],
  ['Launch', 'Week 8', 'Publish the approved site and begin support.'],
];
const prices = [['Brand strategy & visual identity',850],['Website design (UI/UX)',1200],['Front-end development',1400],['Content guidance',350],['Post-launch support (1 month)',150]];

const money = value => '$' + value.toLocaleString('en-US');
const total = prices.reduce((sum, [, price]) => sum + price, 0);

function Page({ number, label, title, children, className = '' }) {
  return <article className={`proposal-sheet ${className}`} id={`proposal-page-${number}`} aria-label={`Page ${number}: ${typeof title === 'string' ? title : number === 3 ? 'Good things take time' : number === 4 ? 'Ready when you are' : number === 5 ? 'Let us make it happen' : title ? 'Made for you' : 'Cover'}`}>
    <header><span className="proposal-brand">Carola Vitale <span className="proposal-brand-heart">♡</span></span><small>Design / Develop / Create</small></header>
    <div className="proposal-page-content">{label && <p className="proposal-label">{label}</p>}{title && <h2>{title}</h2>}{children}</div>
    <footer><span>Studio Bloom / Proposal</span><span>Sample — not a valid quote</span><span>{String(number).padStart(2,'0')} / 05</span></footer>
  </article>;
}
export default function ProposalPreview() {
  const [scale, setScale] = useState(40);
  const [page, setPage] = useState('all');
  return <main className="proposal-preview" style={{ '--proposal-art-scale': scale / 100 }}>
    <div className="proposal-toolbar"><div><strong>Presupuesto · Vista local</strong><p>Muestra para revisar diseño y proporciones.</p></div><label>Imágenes grandes: {scale}%<input aria-label="Tamaño de imágenes grandes" type="range" min="40" max="100" value={scale} onChange={event => setScale(Number(event.target.value))} /></label><label>Ver página<select value={page} onChange={event => { setPage(event.target.value); window.scrollTo({ top: 0, behavior: "instant" }); }}><option value="all">Todas</option>{Array.from({length:5},(_,i)=><option key={i+1} value={String(i+1)}>{i+1}</option>)}</select></label><button type="button" onClick={() => window.print()}>Imprimir / Guardar PDF</button></div>
    <div className="proposal-pages" data-selected-page={page}>
      <Page number={1} className="proposal-cover"><p className="proposal-label">A proposal for</p><div className="proposal-cover-title"><h1>Studio<br />Bloom</h1><span className="proposal-cover-rays" aria-hidden="true"><i /><i /><i /></span></div><p className="proposal-cover-subtitle">A thoughtful brand &amp; website.</p><div className="proposal-art-slot proposal-cover-art"><img src={founder} alt="Blue line illustration of Carola at her laptop with a cup of coffee" /></div><div className="proposal-cover-note"><svg viewBox="0 0 90 140" aria-hidden="true"><g fill="none" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round"><path d="M34 130C18 100 29 75 44 50" /><path d="M45 49C1 40 5 12 29 25C39 30 43 40 45 49C35 6 64 0 60 25C58 36 50 43 45 49C88 14 98 47 70 53C60 55 50 52 45 49C78 76 50 95 43 69C40 59 43 54 45 49C14 85 0 53 23 48C31 46 38 48 45 49Z" /></g></svg><svg className="proposal-curved-note" viewBox="0 0 250 130" role="img" aria-label="Good ideas take time"><defs><path id="proposal-good-ideas-arc" d="M20 63 Q125 18 230 63" /><path id="proposal-take-time-arc" d="M30 108 Q125 65 220 108" /></defs><text><textPath href="#proposal-good-ideas-arc" startOffset="50%" textAnchor="middle">Good ideas</textPath></text><text><textPath href="#proposal-take-time-arc" startOffset="50%" textAnchor="middle">take time ♡</textPath></text></svg><svg viewBox="0 0 160 60" aria-hidden="true"><path d="M5 40C45 65 55 2 100 12S90 61 83 35S133 5 155 12" fill="none" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round" /></svg></div><div className="proposal-cover-ribbon">Let us create something good <span aria-hidden="true">⟶</span></div></Page>


      <Page number={2} label="01 / The proposal" title={<>Made <span className="proposal-title-highlight">for you.</span></>} className="proposal-made-for-you"><p>A warm, thoughtful identity and website to help<br />Studio Bloom connect with its community.</p><section className="proposal-service-card proposal-service-brand"><div><h3>Your brand <span>♡</span></h3><ul className="proposal-deliverables">{['One creative direction','Primary, secondary & submark logos','Color palette & typography','Concise brand guide'].map(item=><li key={item}>{item}</li>)}</ul></div><img src={brandIdea} alt="" /></section><section className="proposal-service-card proposal-service-web"><div><h3>Your website <span aria-hidden="true">↗</span></h3><ul className="proposal-deliverables">{['Five custom pages','Desktop & mobile layouts','Contact form','Basic SEO metadata & sitemap','Recorded handover','One month of defect support'].map(item=><li key={item}>{item}</li>)}</ul></div><img src={brandLaptop} alt="" /></section><div className="proposal-note-row"><div className="proposal-hand-note"><p>A little strategy.<br />A lot of heart. ♡</p><svg className="proposal-note-loop" viewBox="0 0 280 85" aria-hidden="true"><path d="M8 61C65 101 94 8 158 12C222 16 196 75 163 65C127 53 149 -8 272 13" fill="none" stroke="var(--yellow)" strokeWidth="4" strokeLinecap="round" /></svg></div><img src={petals} alt="" /></div></Page>
      <Page number={3} label="02 / Process & timeline" title={<>Good things <span className="proposal-title-highlight">take time.</span></>} className="proposal-process"><ol className="proposal-timeline">{phases.map(([title,time,copy],i)=><li key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{i === 1 ? 'Your brand' : title} <small>— {time}</small></h3><p>{['Goals, audience & creative direction','Identity design & feedback','Page layouts & responsive design','Build & contact form integration','Device checks & walkthrough','Go live & begin support'][i]}</p></div>{i < phases.length - 1 && <svg className="proposal-step-arrow" viewBox="0 0 65 100" aria-hidden="true"><path d={processArrows[i]} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}</li>)}</ol><p className="proposal-process-schedule">Schedule begins once scope and required content are confirmed.</p><aside className="proposal-revisions"><span aria-hidden="true">♡</span>Two revision rounds per creative stage.</aside></Page>

      <Page number={4} label="03 / Next steps" title={<>Ready when <span className="proposal-title-highlight">you are.</span></>} className="proposal-ready"><ol className="proposal-next">{['Review & agree the proposal','Sign the agreement','Pay the initial installment','Share your content & let us begin'].map((item,i)=><li key={item}><span>{String(i+1).padStart(2,'0')}</span>{item}</li>)}</ol><aside className="proposal-ready-conditions"><h3>A few things to know <span>♡</span></h3><ul>{['Proposal valid for 30 days.','Two revision rounds per creative stage.','Hosting, domain, subscriptions & paid assets excluded.','Timing depends on feedback & content delivery.','Additional work quoted separately.'].map(item=><li key={item}>{item}</li>)}</ul></aside><div className="proposal-start-ticket"><div className="proposal-ticket-main"><p className="proposal-ticket-eyebrow">One idea. A world of possibilities.</p><h3>Your next chapter<br /><span>starts here.</span></h3><p className="proposal-ticket-note">Made with care. Built around you.</p><span className="proposal-ticket-signature">Carola Vitale</span></div><div className="proposal-ticket-stub"><span className="proposal-ticket-heart" aria-hidden="true">♡</span><span>Good things<br />ahead</span><small>YOU + ME</small></div></div></Page>
      <Page number={5} label="04 / Investment" title={<>Let us make <span className="proposal-title-highlight">it happen.</span></>} className="proposal-investment"><p>Illustrative pricing for the scope in this sample. These are demonstration amounts, not an approved rate card or an offer.</p><table className="proposal-prices"><thead><tr><th>Service</th><th>Price / USD</th></tr></thead><tbody>{prices.map(([label, amount]) => <tr key={label}><td>{label}</td><td>{money(amount)}</td></tr>)}</tbody><tfoot><tr><th>Total investment</th><td>{money(total)}</td></tr></tfoot></table><div className="proposal-payment"><div className="proposal-installments"><aside><h3>50% to start</h3><p>{money(total / 2)}</p></aside><aside><h3>50% before launch</h3><p>{money(total / 2)}</p></aside></div><img className="proposal-investment-founder" src={investmentFounder} alt="" /></div><p className="proposal-fineprint">Sample currency: USD. Tax treatment, invoicing and payment terms must be confirmed before issuing a real quote.</p></Page>
    </div>
  </main>;
}
