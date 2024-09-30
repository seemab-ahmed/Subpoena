import React from "react";
import { Link } from 'react-router-dom';
import '../css/banner.css';
import 'aos/dist/aos.css';
function Banner() { 
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-inner" data-aos="fade-right">
          <h1>The Subpoena Service</h1>
          <span className="tagline">Modern Subpoena Solutions</span>
          <p className="hero-text">
            From preparation to production, we are <i>The Subpoena Service</i> for the
            State of California. We combine our honed expertise and easy-to-use
            technological solution to deliver the most efficient, dependable
            support for all your subpoena needs.
          </p>
          <span className="hero-btm-line">Call us at <a href="tel:408889-6007"> (408) 889-6007</a> at any time for assistance.</span>
          <Link to='/contact' className="primary-btn btn-blue">Contact Us</Link>
        </div>
        <span className="banner-btm-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Specificity. Particularity. Results.</span>
      </div>
    </section>
  );
}
export default Banner;
