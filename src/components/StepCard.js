import React from 'react';
import "../css/StepCard.css";
const StepCard = ({ imgSrc, title, content, readLink }) => {
  return (
    <div className="step-row">
      <div className="step-icon">
        <img src={imgSrc} alt="Step Icon" />
      </div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <p className="default-text">{content}</p>
        <a href={readLink} className="read-btn">Read more</a>
      </div>
    </div>
  );
};

export default StepCard;
