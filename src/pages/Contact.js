import React from 'react';
import ContactBanner from '../components/ContactBanner';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="contact-page">
      <ContactBanner />
      <ContactForm />
    </div>
  );
}

export default Contact;
