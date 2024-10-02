import React, { useState } from 'react';
import "../css/StepCard.css";

const StepCard = ({ imgSrc, title, content, detailContent, detailContent2 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="step-row" data-aos="fade-right">
      <div className="step-icon">
        <img src={imgSrc} alt="Step Icon" />
      </div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <p className="default-text">{content}</p>
        <p className={`default-text detail-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {detailContent}
        </p>
        {detailContent2 &&
          <p className={`default-text detail-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {detailContent2}
        </p>
        }
        {/* {isExpanded && <p className="default-text detail-text">{detailContent}</p>} */}
        <button onClick={toggleContent} className="read-btn">
          {isExpanded ? 'Show less.' : 'Read more.'}
        </button>
      </div>
      <div className="step-line"></div>
    </div>
  );
};

export default StepCard;