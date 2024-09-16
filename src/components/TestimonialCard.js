import React from 'react';
import "../css/TestimonialCard.css";


const TestimonialCard = ({ para, firstName, lastName, companyName }) => {
  return (
    <div className="testimonial-card">
      <p className="testi-para">
      “{para}”
      </p>
      <div className="testimonial-name">
        <span className="first-name">{firstName} </span>
        <span className="last-name">{lastName}</span>
      </div>
      <span className="testi-company-name">{companyName}</span>
    </div>
  );
};

export default TestimonialCard;
