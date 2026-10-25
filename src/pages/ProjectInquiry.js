import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { sendContactEmail } from '../services/contactEmail';
import ArrowIcon from '../components/ArrowIcon/ArrowIcon';
import './ProjectInquiry.css';

const services = [
  ['Branding & visual identity', 'branding@4x.png'],
  ['Website design & development', 'about-laptop.png'],
  ['E-commerce website', 'shopify@4x.png'],
  ['Website redesign', 'web@4x.png'],
  ['Creative direction & content', 'about-photo.png'],
  ['Something else / Not sure yet', 'about-art.png'],
];
const styles = ['Playful & colorful', 'Minimal & clean', 'Organic & earthy', 'Editorial & modern', 'Classic & elegant', 'Not sure yet'];
const features = ['Blog', 'Online store', 'Appointment booking', 'Contact form', 'Newsletter / Email', 'Multiple languages', 'Other'];
const titles = ['Nice to meet you!', 'What can I help you create?', 'Tell me more about your idea.', 'Let’s talk details.', 'A few final details.', 'Almost there!'];
const labels = ['About you', 'Your project', 'Your vision', 'Style & functionality', 'Timeline & investment', 'Review'];
const initial = { name: '', brand: '', email: '', website: '', location: '', services: [], vision: '', references: '', styles: [], features: [], otherFeatures: '', start: '', launch: '', budget: '', notes: '' };

export function inquirySections(data) {
  return [
    [['Name', data.name], ['Brand / Business', data.brand], ['Email', data.email], ['Website / Social media', data.website], ['Based in', data.location]],
    [['Services', data.services.join(', ')]],
    [['Project vision', data.vision], ['Reference links', data.references]],
    [['Style', data.styles.join(', ')], ['Features', data.features.join(', ')], ['Other features', data.otherFeatures]],
    [['Start', data.start], ['Launch date', data.launch], ['Investment (USD)', data.budget], ['Additional notes', data.notes]],
  ];
}
export function formatInquiry(data) {
  return 'PROJECT INQUIRY — Personal proposal requested\n\n' + inquirySections(data).map((section, i) => labels[i].toUpperCase() + '\n' + section.map(([label, value]) => `${label}: ${value || 'Not specified'}`).join('\n')).join('\n\n');
}

export default function ProjectInquiry() {
  const [step, setStep] = useState(-1);
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const heading = useRef(null);
  const sending = useRef(false);
  useEffect(() => { if (step >= 0) heading.current?.focus(); }, [step, status]);
  const update = (key, value) => setData(previous => ({ ...previous, [key]: value }));
  const toggle = (key, value) => update(key, data[key].includes(value) ? data[key].filter(item => item !== value) : [...data[key], value]);
  const field = (key, label, props = {}) => <label className="inquiry-field">{label}{props.required && ' *'}<input name={key} value={data[key]} onChange={event => update(key, event.target.value)} maxLength={250} {...props} /></label>;
  const area = (key, label, props = {}) => <label className="inquiry-field">{label}{props.required && ' *'}<textarea name={key} value={data[key]} onChange={event => update(key, event.target.value)} rows={4} maxLength={4000} {...props} /></label>;
  const select = (key, label, choices, required = false) => <label className="inquiry-field">{label}{required && ' *'}<select name={key} value={data[key]} onChange={event => update(key, event.target.value)} required={required}><option value="">Select an option</option>{choices.map(choice => <option key={choice}>{choice}</option>)}</select></label>;
  const next = event => {
    event.preventDefault();
    if (step === 1 && !data.services.length) { setError('Please select at least one service.'); return; }
    setError('');
    setStep(step + 1);
  };
  const submit = async event => {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus('sending');
    setError('');
    try {
      await sendContactEmail({ name: data.name, email: data.email, message: formatInquiry(data) });
      setStatus('success');
    } catch (error) {
      console.error('Project inquiry email failed', { status: error?.status, text: error?.text || error?.message });
      setStatus('error');
      setError('Your request couldn’t be sent. Your answers are still here. Please try again or email me directly.');
    } finally { sending.current = false; }
  };

  return <main className="inquiry-page">
    {step === -1 ? <section className="inquiry-welcome">
      <div><p className="inquiry-kicker">A little idea. A lovely beginning.</p><h1>Let’s bring your<br />idea to life. ♡</h1><p>Tell me about your project and your vision. I’ll review your details and send you a personalized proposal.</p><button className="inquiry-primary" onClick={() => setStep(0)}>Start your project <ArrowIcon /></button><p className="inquiry-small">About 5 minutes · No commitment</p><Link to="/contact">Just want to say hello?</Link></div>
      <img src="/brand/contact-workspace-watercolor.png" alt="Watercolor illustration of Carola resting her head beside her laptop in a cozy studio" />
    </section> : status === 'success' ? <section className="inquiry-success">
      <img src="/brand/flowers-sticker.png" alt="" /><p className="inquiry-kicker">Thank you for sharing your project</p><h1 ref={heading} tabIndex={-1}>Your idea is officially<br />on my radar! ♡</h1><p>I’ll review your details and get back to you personally at <strong>{data.email}</strong> with a custom proposal.</p><Link className="inquiry-primary" to="/">Back to home <ArrowIcon /></Link>
    </section> : <section className="inquiry-card">
      <div className="inquiry-top"><p className="inquiry-kicker">{String(step + 1).padStart(2, '0')} / {labels[step]}</p><ol className="inquiry-progress" aria-label="Project request progress">{labels.map((label, index) => <li key={label} aria-current={step === index ? 'step' : undefined} className={index <= step ? 'is-reached' : ''}><span className="pop-sr-only">{index + 1}: {label}</span></li>)}</ol></div>
      <h1 ref={heading} tabIndex={-1}>{titles[step]}</h1>
      <p className="inquiry-intro">{['Let’s start with the basics. Tell me a little about you and your brand. Required fields are marked *.', 'Select all the services you’re interested in. We can figure out the details together.', 'What are your goals? Share as much detail as you’d like.', 'Help me understand the look, feel and functionality you have in mind. You can select more than one.', 'These details help me create a proposal that fits your needs.', 'Take a look at your answers. You can edit any section before sending.'][step]}</p>
      <form onSubmit={step === 5 ? submit : next} aria-busy={status === 'sending'}>
        {step === 0 && <div className="inquiry-fields">{field('name', 'Your name', { required: true, autoComplete: 'name' })}{field('brand', 'Brand / Business name', { required: true, autoComplete: 'organization' })}{field('email', 'Email', { required: true, type: 'email', autoComplete: 'email' })}{field('website', 'Website or social media', { placeholder: 'Website link or @handle' })}{field('location', 'Where are you based?', { required: true, placeholder: 'City, country', autoComplete: 'country-name' })}</div>}
        {step === 1 && <fieldset><legend className="pop-sr-only">Services — select at least one</legend><div className="inquiry-options inquiry-services">{services.map(([label, image]) => <label className={`inquiry-choice ${data.services.includes(label) ? 'is-selected' : ''}`} key={label}><img src={`/brand/${image}`} alt="" /><span>{label}</span><input type="checkbox" checked={data.services.includes(label)} onChange={() => { toggle('services', label); setError(''); }} /></label>)}</div></fieldset>}
        {step === 2 && <>{area('vision', 'Tell me about your project', { required: true, placeholder: 'What do you do? Who is your audience? What would you love to achieve?' })}{area('references', 'Visual references (optional)', { placeholder: 'Paste website, Pinterest, Drive or moodboard links — please make sure shared links are accessible.' })}<p className="inquiry-small">Have images or PDFs? Share a link here, or send them by email after submitting.</p></>}
        {step === 3 && <><fieldset><legend>What style do you feel most connected to?</legend><div className="inquiry-options inquiry-styles">{styles.map((label, i) => <label key={label} className={`inquiry-choice ${data.styles.includes(label) ? 'is-selected' : ''}`}><span className={`inquiry-swatch swatch-${i}`} aria-hidden="true" /><span>{label}</span><input type="checkbox" checked={data.styles.includes(label)} onChange={() => toggle('styles', label)} /></label>)}</div></fieldset><fieldset><legend>What features do you need?</legend><div className="inquiry-features">{features.map(label => <label key={label}><input type="checkbox" checked={data.features.includes(label)} onChange={() => toggle('features', label)} />{label}</label>)}</div></fieldset>{data.features.includes('Other') && field('otherFeatures', 'Other features', { required: true })}</>}
        {step === 4 && <>{select('start', 'When would you like to start?', ['As soon as possible', 'Within 1 month', 'In 1–3 months', 'In 3–6 months', 'Just exploring / Flexible'], true)}{field('launch', 'Specific launch date (optional)', { type: 'date' })}{select('budget', 'Investment range in USD (optional)', ['Under $1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+', 'I’d appreciate your guidance'])}<p className="inquiry-small">This helps me tailor the scope to your goals. Your quote will be prepared personally.</p>{area('notes', 'Anything else you’d like to share? (optional)', { placeholder: 'Brand values, preferences, questions…' })}</>}
        {step === 5 && <div className="inquiry-review">{inquirySections(data).map((section, i) => <section key={labels[i]}><div><h2>{labels[i]}</h2><button type="button" onClick={() => { setError(''); setStep(i); }} disabled={status === 'sending'} aria-label={`Edit ${labels[i]}`}>Edit</button></div><dl>{section.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || 'Not specified'}</dd></div>)}</dl></section>)}<p className="inquiry-small">By submitting, you’re sharing these details with Carola so she can respond to your project request. This is a request for a proposal, with no payment or commitment.</p></div>}
        <div aria-live="polite">{error && <p className="inquiry-error" role="alert">{error} {status === 'error' && <a href="mailto:cvitalerrico@gmail.com">Email Carola</a>}</p>}</div>
        <div className="inquiry-actions"><button type="button" className="inquiry-back" disabled={status === 'sending'} onClick={() => { setError(''); setStep(step - 1); }}>Back</button><button type="submit" className="inquiry-primary" disabled={status === 'sending'}>{step === 5 ? (status === 'sending' ? 'Sending…' : 'Submit my project') : step === 4 ? 'Review my project' : 'Next'} <ArrowIcon /></button></div>
      </form>
    </section>}
  </main>;
}
