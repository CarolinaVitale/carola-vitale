import React, { useState } from 'react';
import './ProposalPreview.css';
import './MarProposalPreview.css';
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
  ['Nos conocemos', 'Inicio', 'Objetivos, público y contenido de la academia.'],
  ['Organizamos', 'Contenido', 'Fotos, metodologías, uniformes y horarios.'],
  ['Diseñamos', 'Diseño', 'Una web a medida para celular y computadora.'],
  ['Construimos', 'Desarrollo', 'Catálogo o tienda según la opción elegida.'],
  ['Revisamos', 'Entrega', 'Pruebas, ajustes y recorrido por la web.'],
  ['Publicamos', 'Lanzamiento', 'Puesta en línea tras la aprobación final.'],
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
    if (!React.isValidElement(child)) return child;
    const active = (typeof child.type === 'string' && /^h[123]$/.test(child.type)) || (heading && child.type !== 'small') || child.props.className === 'mar-ticket-message';
    return child.props.children ? React.cloneElement(child, {}, spanishHeadings(child.props.children, active)) : child;
  });
}

function Page({ number, label, title, children, className = '' }) {
  return <article className={`proposal-sheet ${className}`} id={`proposal-page-${number}`} aria-label={`Página ${number}: ${typeof title === 'string' ? title : number === 3 ? 'Todo lleva su tiempo' : number === 4 ? 'El siguiente paso' : number === 5 ? 'La inversión' : title ? 'Hecho para MAR' : 'Portada'}`}>
    <header><span className="proposal-brand">Carola Vitale <span className="proposal-brand-heart">♡</span></span><small>Diseño / Desarrollo / Creatividad</small></header>
    <div className="proposal-page-content">{label && <p className="proposal-label">{label}</p>}{title && <h2>{spanishHeadings(title, true)}</h2>}{spanishHeadings(children)}</div>
    <footer><span>MAR / Propuesta web</span><span>Borrador · pendiente de aprobación</span><span>{String(number).padStart(2,'0')} / 05</span></footer>
  </article>;
}
export default function MarProposalPreview() {
  const [scale, setScale] = useState(40);
  const [page, setPage] = useState('all');
  return <main className="proposal-preview mar-proposal" lang="es" style={{ '--proposal-art-scale': scale / 100 }}>
    <div className="proposal-toolbar"><div><strong>MAR · Propuesta web</strong><p>Dos opciones · versión para revisión.</p></div><label>Imágenes grandes: {scale}%<input aria-label="Tamaño de imágenes grandes" type="range" min="40" max="100" value={scale} onChange={event => setScale(Number(event.target.value))} /></label><label>Ver página<select value={page} onChange={event => { setPage(event.target.value); window.scrollTo({ top: 0, behavior: "instant" }); }}><option value="all">Todas</option>{Array.from({length:5},(_,i)=><option key={i+1} value={String(i+1)}>{i+1}</option>)}</select></label><button type="button" onClick={() => window.print()}>Imprimir / Guardar PDF</button></div>
    <div className="proposal-pages" data-selected-page={page}>
      <Page number={1} className="proposal-cover"><p className="proposal-label">Una propuesta para</p><div className="proposal-cover-title"><h1>MAR</h1><span className="proposal-cover-rays" aria-hidden="true"><i /><i /><i /></span></div><p className="proposal-cover-subtitle">Academia del Movimiento</p><div className="proposal-art-slot proposal-cover-art"><img src={founder} alt="Ilustración de Carola con su computadora y una taza de café" /></div><div className="proposal-cover-note"><svg viewBox="0 0 90 140" aria-hidden="true"><g fill="none" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round"><path d="M34 130C18 100 29 75 44 50" /><path d="M45 49C1 40 5 12 29 25C39 30 43 40 45 49C35 6 64 0 60 25C58 36 50 43 45 49C88 14 98 47 70 53C60 55 50 52 45 49C78 76 50 95 43 69C40 59 43 54 45 49C14 85 0 53 23 48C31 46 38 48 45 49Z" /></g></svg><svg className="proposal-curved-note" viewBox="0 0 250 130" role="img" aria-label="Las ideas llevan tiempo"><defs><path id="proposal-good-ideas-arc" d="M20 63 Q125 18 230 63" /><path id="proposal-take-time-arc" d="M30 108 Q125 65 220 108" /></defs><text><textPath href="#proposal-good-ideas-arc" startOffset="50%" textAnchor="middle">Las ideas</textPath></text><text><textPath href="#proposal-take-time-arc" startOffset="50%" textAnchor="middle">llevan tiempo ♡</textPath></text></svg><svg viewBox="0 0 160 60" aria-hidden="true"><path d="M5 40C45 65 55 2 100 12S90 61 83 35S133 5 155 12" fill="none" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round" /></svg></div><div className="proposal-cover-ribbon">Tu academia, en movimiento <span aria-hidden="true">⟶</span></div></Page>


      <Page number={2} label="01 / La propuesta" title={<>Hecho <span className="proposal-title-highlight">para MAR.</span></>} className="proposal-made-for-you"><p>María Fernanda, acerquemos tu academia a su comunidad con una web que muestre todo lo que sucede en MAR.</p><section className="proposal-service-card proposal-service-brand"><div><h3>Web informativa <span>♡</span></h3><ul className="proposal-deliverables">{['Presentación, clases y metodologías','Galería de fotos y horarios','Catálogo de uniformes sin pago online','Consultas y contacto por WhatsApp'].map(item=><li key={item}>{item}</li>)}</ul></div><img src={brandIdea} alt="" /></section><section className="proposal-service-card proposal-service-web"><div><h3>Web + tienda <span aria-hidden="true">↗</span></h3><ul className="proposal-deliverables">{['Todo el contenido de la web informativa','Catálogo de productos con opción de añadir al carrito','Pagos online','Mantenimiento mensual'].map(item=><li key={item}>{item}</li>)}</ul></div><img src={brandLaptop} alt="" /></section><div className="proposal-note-row"><div className="proposal-hand-note"><p>Tu esencia, en cada detalle.<br />Tu movimiento, en la web. ♡</p><svg className="proposal-note-loop" viewBox="0 0 280 85" aria-hidden="true"><path d="M8 61C65 101 94 8 158 12C222 16 196 75 163 65C127 53 149 -8 272 13" fill="none" stroke="var(--yellow)" strokeWidth="4" strokeLinecap="round" /></svg></div><img src={petals} alt="" /></div></Page>
      <Page number={3} label="02 / Proceso y tiempos" title={<>Todo lleva <span className="proposal-title-highlight">su tiempo.</span></>} className="proposal-process"><ol className="proposal-timeline">{phases.map(([title,time,copy],i)=><li key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title} <small>— {time}</small></h3><p>{copy}</p></div>{i < phases.length - 1 && <svg className="proposal-step-arrow" viewBox="0 0 65 100" aria-hidden="true"><path d={processArrows[i]} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}</li>)}</ol><p className="proposal-process-schedule">El calendario se define al confirmar el alcance y recibir el material.</p><aside className="proposal-revisions"><span aria-hidden="true">♡</span>Plazos y rondas de ajustes por confirmar.</aside></Page>

      <Page number={4} label="03 / Próximos pasos" title={<>Damos <span className="proposal-title-highlight">el paso.</span></>} className="proposal-ready"><ol className="proposal-next">{['Elegir la opción para MAR','Confirmar alcance, precio y condiciones','Compartir fotos, textos y horarios','Coordinar el inicio del proyecto'].map((item,i)=><li key={item}><span>{String(i+1).padStart(2,'0')}</span>{item}</li>)}</ol><aside className="proposal-ready-conditions"><h3>Algunos detalles <span>♡</span></h3><ul>{['Dominios sugeridos: mar-academia.com o mar-movimiento.com.','Ambas opciones incluyen dominio y hosting por 1 año.','Web informativa: los cambios y las actualizaciones posteriores al lanzamiento no están incluidos y se cotizan por separado.','Web con tienda: mantenimiento mensual de $20 USD.','Pagos, ajustes y vigencia por definir.'].map(item=><li key={item}>{item}</li>)}</ul></aside><div className="proposal-start-ticket"><div className="proposal-ticket-main"><p className="proposal-ticket-eyebrow">Una idea. Un mundo de posibilidades.</p><h3>Tu nueva etapa<br /><span>empieza acá.</span></h3><span className="proposal-ticket-signature">Carola Vitale</span></div><div className="proposal-ticket-stub"><span className="proposal-ticket-heart" aria-hidden="true">♡</span><span className="mar-ticket-message">Lo bueno<br />está por venir</span></div></div></Page>
      <Page number={5} label="04 / La inversión" title={<>Hagámoslo <span className="proposal-title-highlight">realidad.</span></>} className="proposal-investment"><p>Dos caminos para acompañar a MAR.<br />Elegí la opción que mejor acompañe a tu academia.</p><table className="proposal-prices"><thead><tr><th>Propuesta</th><th>Inversión</th></tr></thead><tbody><tr><td>Opción 1 · Web informativa<small className="mar-price-detail">Web: $200 + dominio y hosting por 1 año: $40</small><small className="mar-price-detail">Los cambios y las actualizaciones posteriores al lanzamiento no están incluidos y se cotizan por separado.</small></td><td>$240 USD</td></tr><tr><td>Opción 2 · Web informativa + tienda<small className="mar-price-detail">Incluye dominio y hosting por 1 año</small></td><td>$1.000 USD<small className="mar-price-detail">+ $20 USD / mes de mantenimiento</small></td></tr></tbody><tfoot><tr><th>Elegimos juntas</th><td>Tu próximo paso ♡</td></tr></tfoot></table><div className="proposal-payment"><div className="proposal-installments"><aside><h3>Inicio del proyecto</h3><p>A definir</p></aside><aside><h3>Entrega y publicación</h3><p>A definir</p></aside></div><img className="proposal-investment-founder" src={investmentFounder} alt="" /></div><p className="proposal-fineprint">Valores en dólares estadounidenses. Ambas opciones incluyen dominio y hosting por el primer año; renovación posterior por confirmar. Impuestos, cuotas y comisiones pendientes de confirmación. La opción con tienda incluye un servicio de mantenimiento por $20 USD al mes, adicional al costo inicial. En la web informativa, los cambios y las actualizaciones posteriores al lanzamiento no están incluidos y se cotizan por separado. Cada opción se contrata por separado.</p></Page>

    </div>
  </main>;
}
