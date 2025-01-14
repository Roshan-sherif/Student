// FeatureCard.jsx
import React from 'react';
import './CardsMobile.css'; // Style for the card

const FeatureCard = ({ title, icon, onClick }) => {
  return (
    <div className="feature-card" onClick={onClick}>
      <img src={icon} alt={title} className="feature-icon" />
      <h6>{title}</h6>
    </div>
  );
};

export default FeatureCard;
