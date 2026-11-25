import React, { useState } from 'react';
import './ProposalPreview.css';
import './MarProposalPreview.css';
import './DnaProposalPreview.css';
import founder from '../assets/proposal/creative-woman-cover.png';
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
  ['Nos conocemos', 'Inicio', 'Objetivos, clientes y zonas de servicio.'],
  ['Definimos', 'Marca', 'Logo, colores, tipografías y estilo de DNA.'],
  ['Organizamos', 'Contenido', 'Servicios, fotos, textos y membresías.'],
  ['Diseñamos', 'Diseño', 'Una web elegante para celular y computadora.'],
  ['Construimos', 'Desarrollo', 'Web bilingüe, reservas y formulario de contacto.'],
  ['Publicamos', 'Lanzamiento', 'Pruebas, ajustes y puesta en línea tras la aprobación final.'],
];

// Keep Chippie’s letterforms and draw Spanish marks consistently above them.
function spanishHeadings(node, heading = false) {
  return React.Children.map(node, child => {
    if (typeof child === 'string' && heading) {
      return child.split(/([áéíóúüñÁÉÍÓÚÜÑ])/g).map((part, index) => {
        if (!/^[áéíóúüñÁÉÍÓÚÜÑ]$/.test(part)) return part;
        const decomposed = part.normalize('NFD');
        const mark = decomposed[1] === '\u0303' ? 'tilde' : decomposed[1] === '\u0308' ? 'diaeresis' : 'acute';
        return <span key={index} className={`mar-letter mar-letter-${mark}`} aria-label={part}><span aria-hidden="true">{decomposed[0]}</span></span>;
      });
    }
    if (!React.isValidElement(child) || child.props.className === 'dna-native-text') return child;
    const active = (typeof child.type === 'string' && /^h[123]$/.test(child.type)) || (heading && child.type !== 'small') || child.props.className === 'mar-ticket-message';
    return child.props.children ? React.cloneElement(child, {}, spanishHeadings(child.props.children, active)) : child;
  });
}

function Page({ number, label, title, children, className = '' }) {
  return <article className={`proposal-sheet ${className}`} id={`proposal-page-${number}`} aria-label={`Página ${number}: ${typeof title === 'string' ? title : number === 3 ? 'Todo lleva su tiempo' : number === 4 ? 'El siguiente paso' : number === 5 ? 'La inversión' : title ? 'Hecho para DNA' : 'Portada'}`}>
    <header><span className="proposal-brand">Carola Vitale <span className="proposal-brand-heart">♡</span></span><small>Diseño / Desarrollo / Creatividad</small></header>
    <div className="proposal-page-content">{label && <p className="proposal-label">{label}</p>}{title && <h2>{spanishHeadings(title, true)}</h2>}{spanishHeadings(children)}</div>
    <footer><span>DNA / Propuesta de marca y web</span><span>Borrador · pendiente de aprobación</span><span>{String(number).padStart(2,'0')} / 05</span></footer>
  </article>;
}
export default function DnaProposalPreview() {
  const [scale, setScale] = useState(40);
  const [page, setPage] = useState('all');
  return <main className="proposal-preview mar-proposal dna-proposal" lang="es" style={{ '--proposal-art-scale': scale / 100 }}>
    <div className="proposal-toolbar"><div><strong>DNA · Propuesta de marca y web</strong><p>Dos opciones · versión para revisión.</p></div><label>Imágenes grandes: {scale}%<input aria-label="Tamaño de imágenes grandes" type="range" min="40" max="100" value={scale} onChange={event => setScale(Number(event.target.value))} /></label><label>Ver página<select value={page} onChange={event => { setPage(event.target.value); window.scrollTo({ top: 0, behavior: "instant" }); }}><option value="all">Todas</option>{Array.from({length:5},(_,i)=><option key={i+1} value={String(i+1)}>{i+1}</option>)}</select></label><button type="button" onClick={() => window.print()}>Imprimir / Guardar PDF</button></div>
    <div className="proposal-pages" data-selected-page={page}>
      <Page number={1} className="proposal-cover"><p className="proposal-label">Una propuesta para</p><div className="proposal-cover-title"><h1>DNA</h1></div><p className="proposal-cover-subtitle">Air Conditioning<svg className="dna-subtitle-brush" viewBox="0 0 190 12" aria-hidden="true"><path d="M3 7C35 3 56 10 91 6S150 3 186 6" /></svg></p><div className="proposal-art-slot proposal-cover-art"><img src={founder} alt="Ilustración de Carola con su computadora y una taza de café" /></div><div className="proposal-cover-note"><p className="dna-cover-phrase">Un servicio de lujo<br />merece una marca de lujo ♡</p></div><div className="proposal-cover-ribbon">Tu marca, a la altura de tus clientes <span aria-hidden="true">⟶</span></div></Page>


      <Page number={2} label="01 / La propuesta" title={<>Hecho <span className="proposal-title-highlight">para DNA.</span></>} className="proposal-made-for-you"><p>Jessica, llevemos DNA Air Conditioning al nivel de los hogares que atiende: una marca clásica, elegante y minimalista, y una web bilingüe que convierta visitas en citas.</p><section className="proposal-service-card proposal-service-brand"><div><h3>Opción 1 · Marca esencial + web <span>♡</span></h3><ul className="proposal-deliverables">{['Rediseño del logo (versión principal, secundaria e ícono)', 'Paleta de colores y tipografías', 'Mini guía de marca (PDF)', 'Web a medida de hasta 5 páginas: Inicio, Servicios, Nosotros, Membresías de mantenimiento y Contacto', 'Web en inglés y español', 'Reserva de citas y formulario de contacto', 'Diseño para celular y computadora'].map(item=><li key={item}>{item}</li>)}</ul></div><img src={brandIdea} alt="" /></section><section className="proposal-service-card proposal-service-web"><div><h3>Opción 2 · Marca completa + web <span aria-hidden="true">↗</span></h3><ul className="proposal-deliverables">{['Todo lo de la Opción 1', 'Manual de marca completo', 'Aplicaciones de marca: tarjetas de presentación, diseño para rotular la camioneta, uniformes y plantilla de factura/presupuesto', '6 plantillas para redes sociales', 'SEO básico y ficha de Google Business actualizada', '3 meses de mantenimiento incluidos'].map(item=><li key={item}>{item}</li>)}</ul></div><img src={brandLaptop} alt="" /></section><div className="proposal-note-row"><div className="proposal-hand-note"><p>Tu experiencia, en cada detalle.<br />Tu marca, en la web. ♡</p></div></div></Page>
      <Page number={3} label="02 / Proceso y tiempos" title={<>Todo lleva <span className="proposal-title-highlight">su tiempo.</span></>} className="proposal-process"><ol className="proposal-timeline">{phases.map(([title,time,copy],i)=><li key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title} <small>— {time}</small></h3><p>{copy}</p></div>{i < phases.length - 1 && <svg className="proposal-step-arrow" viewBox="0 0 65 100" aria-hidden="true"><path d={processArrows[i]} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}</li>)}</ol><p className="proposal-process-schedule">El calendario se define al confirmar el alcance y recibir el material.</p><aside className="proposal-revisions"><span aria-hidden="true">♡</span>Plazos y rondas de ajustes por confirmar.</aside></Page>

      <Page number={4} label="03 / Próximos pasos" title={<>Damos <span className="proposal-title-highlight">el paso.</span></>} className="proposal-ready"><ol className="proposal-next">{['Elegir la opción para DNA','Confirmar alcance, precio y condiciones','Compartir logo actual, fotos de trabajos, servicios y zonas','Coordinar el inicio del proyecto'].map((item,i)=><li key={item}><span>{String(i+1).padStart(2,'0')}</span>{item}</li>)}</ol><aside className="proposal-ready-conditions"><h3>Algunos detalles <span>♡</span></h3><ul>{['Mantenemos el dominio dnaairconditioning.com. La reserva de citas puede conectarse a Google Calendar o Calendly.'].map(item=><li key={item}>{item}</li>)}</ul></aside><div className="proposal-start-ticket"><div className="proposal-ticket-main"><p className="proposal-ticket-eyebrow">Una idea. Un mundo de posibilidades.</p><h3>Tu nueva etapa<br /><span>empieza aquí.</span></h3><span className="proposal-ticket-signature">Carola Vitale</span></div><div className="proposal-ticket-stub"><span className="proposal-ticket-heart" aria-hidden="true">♡</span><span className="mar-ticket-message">Lo bueno<br />está por venir</span></div></div></Page>
      <Page number={5} label="04 / La inversión" title={<>Hagámoslo <span className="proposal-title-highlight">realidad.</span></>} className="proposal-investment"><p>Dos caminos para acompañar a DNA.<br />Elige la opción que mejor acompañe a tu empresa.</p><table className="proposal-prices"><thead><tr><th>Propuesta</th><th>Inversión</th></tr></thead><tbody><tr><td>Opción 1 · Marca esencial + web</td><td>$2,800 USD</td></tr><tr><td>Opción 2 · Marca completa + web<small className="mar-price-detail">Incluye 3 meses de mantenimiento</small></td><td>$4,200 USD<small className="mar-price-detail">+ $50 USD/mes desde el 4.º mes (opcional)</small></td></tr></tbody><tfoot><tr><th>Elegimos juntas</th><td>Tu próximo paso ♡</td></tr></tfoot></table><div className="proposal-payment"><div className="proposal-installments"><aside><h3>Inicio del proyecto</h3><p>A definir</p></aside><aside><h3 className="dna-native-text">Entrega y publicación</h3><p>A definir</p></aside></div><img className="proposal-investment-founder" src={investmentFounder} alt="" /></div><p className="proposal-fineprint">Valores en dólares estadounidenses. Forma de pago: 50% al iniciar y 50% antes de publicar. Hosting, dominio y herramientas de terceros (por ejemplo, el sistema de reservas) corren por cuenta del cliente. Impresión y rotulación no incluidas: se entregan los diseños listos para producir. Cambios fuera del alcance acordado se cotizan por separado. Cada opción se contrata por separado.</p></Page>

    </div>
  </main>;
}
