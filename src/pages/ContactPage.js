import ArrowIcon from '../components/ArrowIcon/ArrowIcon';
import React from 'react';
import ContactMe from '../components/ContactForm/ContactForm';
import './ContactPage.css';

export default function ContactPage() {
  return <main className="studio-contact">
    <section className="studio-contact-layout" aria-labelledby="contact-page-title">
      <div className="studio-contact-intro">
        <p className="studio-contact-label">03 / Contact me</p>
        <h1 id="contact-page-title">Let's create<br />something<br />together. ♡</h1>
        <p>Have a project in mind, a collaboration idea or just want to say hi? I'd love to hear from you.</p>
        <p>Fill out the form or reach me directly through email or my socials.</p>
        <p className="studio-contact-note">Good ideas<br />always welcome. ♡</p>
      </div>
      <ContactMe />
      <div className="studio-contact-photo-area">
        <figure className="studio-contact-polaroid"><img src="/brand/contact-workspace-watercolor-v2.png" alt="Watercolor illustration of Carola with her laptop in a cozy, plant-filled workspace" width="1086" height="1448" /><figcaption>A little creativity, every day. ♡</figcaption></figure>
        <img className="studio-contact-flower" src="/brand/petals-sticker@4x.png" alt="" />
        <img className="studio-contact-heart" src="/brand/heart-sticker@4x.png" alt="" />
      </div>
    </section>
    <section className="studio-contact-direct" aria-label="More ways to connect">
      <a href="mailto:cvitalerrico@gmail.com"><span className="studio-contact-badge" aria-hidden="true">@</span><div><h2>cvitalerrico@gmail.com</h2><p>For projects, collaborations<br />or just to say hi.</p></div></a>
      <a href="https://www.instagram.com/souraw.us/" target="_blank" rel="noopener noreferrer"><span className="studio-contact-badge" aria-hidden="true">♡</span><div><h2>@souraw.us</h2><p>Sourdough, food &<br />creative content.</p></div></a>
      <a href="https://www.instagram.com/souraw.lab/" target="_blank" rel="noopener noreferrer"><span className="studio-contact-badge" aria-hidden="true">✳</span><div><h2>@souraw.lab</h2><p>Design, creative projects<br />& behind the scenes.</p></div></a>
    </section>
    <div className="studio-contact-signoff"><a href="https://www.linkedin.com/in/carolinavitale/" target="_blank" rel="noopener noreferrer">Let's connect on LinkedIn <ArrowIcon direction="upRight" /></a><img src="/brand/laptop-sticker.png" alt="" /><img src="/brand/bread-sticker@4x.png" alt="" /></div>
  </main>;
}
