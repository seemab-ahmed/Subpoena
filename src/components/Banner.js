import React from "react";
import '../css/banner.css';
function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-inner">
          <h1>The Subpoena Service</h1>
          <span className="tagline">Modern Subpoena Solutions</span>
          <p className="hero-text">
            From preparation to production, we are <i>The Subpoena Service</i> for the
            State of California. We combine our honed expertise and easy-to-use
            technological solution to deliver the most efficient, dependable
            support for all your subpoena needs.
          </p>
          <span className="hero-btm-line">Call us at <a href="/">(000) 555-0000</a> at any time for assistance.</span>
          <a href='/' className="primary-btn btn-blue">Contact Us</a>
        </div>
        <span className="banner-btm-text">Specificity. Particularity. Results.</span>
      </div>
    </section>
  );
}
export default Banner;
