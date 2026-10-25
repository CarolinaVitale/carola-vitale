import emailjs from '@emailjs/browser';

// Public EmailJS identifiers, shared by contact and project requests.
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_7j3r5uy';
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_yxd2pmv';
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'R9fYHX8K6tF2ZyrZs';

export function sendContactEmail({ name, email, message }) {
  return emailjs.send(serviceId, templateId, {
    user_name: name,
    user_email: email,
    message,
  }, { publicKey });
}
