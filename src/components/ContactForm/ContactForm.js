import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '../ContactForm/ContactForm.css';

export const ContactUs = () => {
    const [namePlaceholder, setNamePlaceholder] = useState('NAME *');
    const [emailPlaceholder, setEmailPlaceholder] = useState('EMAIL *');
    const [messagePlaceholder, setMessagePlaceholder] = useState('MESSAGE *');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleInputChange = (e, setStateFunction, placeholderValue) => {
        if (e.target.value !== '') {
            setStateFunction('');
        } else {
            setStateFunction(placeholderValue);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_6210qxq',
                'template_1orrt39',
                e.target, {
                publicKey:
                    'x91JMh1N52GJBjivZ',
            })
            .then(
                () => {
                    e.target.reset();
                    setNamePlaceholder('NAME *');
                    setEmailPlaceholder('EMAIL *');
                    setMessagePlaceholder('MESSAGE *');
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 8000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const [contactFormRef, contactFormInView] = useInView({ threshold: 0.5 });

    return (
        <div className="form-container">
            <div className="motion">
                <motion.div

                    ref={contactFormRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: contactFormInView ? 1 : 0, y: contactFormInView ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <form ref={contactFormRef} className="contact-form-motion" onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="user_name"
                            onChange={(e) => handleInputChange(e, setNamePlaceholder, 'NAME *')}
                            placeholder={namePlaceholder}
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            onChange={(e) => handleInputChange(e, setEmailPlaceholder, 'EMAIL *')}
                            placeholder={emailPlaceholder}
                            required
                        />
                        <textarea
                            name="message"
                            onChange={(e) => handleInputChange(e, setMessagePlaceholder, 'MESSAGE *')}
                            placeholder={messagePlaceholder}
                            required
                        />

                        <input type="submit" value="SEND" />

                    </form>
                </motion.div>
            </div>


            {showSuccessMessage && (
                <div className="success-message">
                    Your message has been sent successfully!
                </div>
            )}

        </div>
    );
};



export default ContactUs;