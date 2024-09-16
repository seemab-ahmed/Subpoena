import React from "react";
import '../css/ContactBanner.css';
function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="top-link-bar">
          <a href="/" className="pagelink">
            Home{" "}
          </a>
          <span className="current-page">/ Contact</span>
        </div>
        <h1>Contact Us</h1>
        <p className="hero-text">
          Whether you’d like to learn more about our services or schedule a
          demo, we’d love to hear from you!
        </p>
      </div>
    </section>
  );
}
export default ContactBanner;
