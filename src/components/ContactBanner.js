import React from "react";
import { Link } from 'react-router-dom';
import '../css/ContactBanner.css';
function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="top-link-bar">
          <Link to="/" className="pagelink">
            Home{" "}
          </Link>
          <span className="current-page">/ Contact</span>
        </div>
        <h1 data-aos="fade-up">Contact Us</h1>
        <p className="hero-text" data-aos="fade-up">
        If you’d like to learn more about our services, we’d love to hear from you!
        </p>
      </div>
    </section>
  );
}
export default ContactBanner;
