import React from "react";
import "../css/ContactForm.css";
import callIcon from "../assets/call-icon.svg";
import mailIcon from "../assets/mail-icon.svg";

function ContactForm() {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-box">
          {/* Left side information */}
          <div className="contact-info">
            <p className="contact-para">
              Please call our specialists on our number or reach out to us via
              the contact form.
            </p>
            <div className="contact-details">
              <div className="phone-info">
                <div className="mail-icon">
                  <img src={callIcon} alt="service-img" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:(000) 555-0000">(000) 555-0000</a>

                </div>
              </div>
              <div className="email-info">
                <div className="mail-icon">
                  <img src={mailIcon} alt="service-img" />
                </div>
                <div className="email-text">
                  <h4>Email</h4>
                  <a href="mailto:email@thesubpoenaservice.com">email@thesubpoenaservice.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="contact-input-form">
            <form>
              <div className="form-group top">
                <input type="text" id="fullName" placeholder="Full Name" />
                <input type="text" id="phone" placeholder="Phone Number (optional)" />
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea id="message" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="primary-btn btn-blue submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
