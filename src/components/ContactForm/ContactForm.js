import ArrowIcon from '../ArrowIcon/ArrowIcon';
import React, { useState } from 'react';
import { sendContactEmail } from '../../services/contactEmail';
import './ContactForm.css';

export const ContactUs = () => {
  const [status, setStatus] = useState('idle');
  const [errorDetail, setErrorDetail] = useState('');
  const sendEmail = async event => {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    setStatus('sending');
    setErrorDetail('');
    try {
      const values = new FormData(form);
      await sendContactEmail({ name: values.get('user_name'), email: values.get('user_email'), message: values.get('message') });
      form.reset();
      setStatus('success');
    } catch (error) {
      console.error('Contact email failed', { status: error?.status, text: error?.text || error?.message });
      setErrorDetail(error?.text || error?.message || 'Connection error');
      setStatus('error');
    }
  };
  return <div className="studio-contact-form-panel">
    <form className="studio-contact-form" onSubmit={sendEmail} aria-busy={status === 'sending'}>
      <div className="contact-field case-reveal"><label htmlFor="contact-name">Name <span aria-hidden="true">*</span><span className="field-heart" aria-hidden="true">♡</span></label>
      <input id="contact-name" name="user_name" type="text" autoComplete="name" placeholder="Your name" required maxLength={150} /></div>
      <div className="contact-field case-reveal"><label htmlFor="contact-email">Email <span aria-hidden="true">*</span><span className="field-heart" aria-hidden="true">♡</span></label>
      <input id="contact-email" name="user_email" type="email" autoComplete="email" placeholder="your@email.com" required maxLength={254} /></div>
      <div className="contact-field case-reveal"><label htmlFor="contact-message">Message <span aria-hidden="true">*</span><span className="field-heart" aria-hidden="true">♡</span></label>
      <textarea id="contact-message" name="message" placeholder="Tell me about your project, idea or just say hi…" required rows={5} maxLength={5000} /></div>
      <div className="contact-send-wrap case-reveal"><button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : status === 'success' ? 'Sent ♡' : 'Send message'} <ArrowIcon /></button>
      {status === 'success' && <span className="contact-success-hearts" aria-hidden="true">{Array.from({ length: 6 }, (_, index) => <span key={index} style={{ '--heart-index': index }}>♡</span>)}</span>}</div>
      <div className="studio-contact-feedback" aria-live="polite" aria-atomic="true">
        {status === 'success' && <p>Thank you! I'll get back to you soon. ♡</p>}
        {status === 'error' && <p>Oops, something went wrong. You can email me at <a href="mailto:cvitalerrico@gmail.com">cvitalerrico@gmail.com</a></p>}
        {status === 'error' && process.env.NODE_ENV === 'development' && <p role="alert">Email service: {errorDetail}</p>}
      </div>
    </form>
  </div>;
};
export default ContactUs;
