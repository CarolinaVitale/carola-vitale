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
      <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
      <input id="contact-name" name="user_name" type="text" autoComplete="name" placeholder="Your name" required maxLength={150} />
      <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
      <input id="contact-email" name="user_email" type="email" autoComplete="email" placeholder="your@email.com" required maxLength={254} />
      <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
      <textarea id="contact-message" name="message" placeholder="Tell me about your project, idea or just say hi…" required rows={5} maxLength={5000} />
      <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <ArrowIcon /></button>
      <div className="studio-contact-feedback" aria-live="polite" aria-atomic="true">
        {status === 'success' && <p>Your message has been sent. Thank you — I'll be in touch! ♡</p>}
        {status === 'error' && <p>Your message couldn't be sent. Please try again or <a href="mailto:cvitalerrico@gmail.com">email me directly</a>.</p>}
        {status === 'error' && process.env.NODE_ENV === 'development' && <p role="alert">Email service: {errorDetail}</p>}
      </div>
    </form>
  </div>;
};
export default ContactUs;
