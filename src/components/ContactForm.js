import React from "react";
import "../css/ContactForm.css";
import callIcon from "../assets/call-icon.svg";
import mailIcon from "../assets/mail-icon.svg";

function ContactForm() {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-box" data-aos="fade-up">
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
                  <a href="tel:(408)889-6007">(408) 889-6007</a>

                </div>
              </div>
              <div className="email-info">
                <div className="mail-icon">
                  <img src={mailIcon} alt="service-img" />
                </div>
                <div className="email-text">
                  <h4>Email</h4>
                  <a href="mailto:operations@thesubpoenaservice.com">operations@thesubpoenaservice.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="contact-input-form">
            <form>
              <div className="form-group top">
                <input type="text" id="fullName" name="FullName" placeholder="Full Name" />
                <input type="text" id="phone" name="PhoneNo" placeholder="Phone Number (optional)" autoComplete="phone"/>
              </div>
              <div className="form-group">
              <input type="email" id="email" name="Email" placeholder="Email" autoComplete="email" />
              </div>
              <div className="form-group">
                <textarea id="message" name="Massage" placeholder="Message"></textarea>
              </div>
              <div className="form-group is-last">
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
