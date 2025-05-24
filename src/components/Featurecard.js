import React from 'react';
import './Featurecard.css';

function Featurecard({ title, image, description }) {
  return (
    <div className="feature-card">
      <img src={image} alt={title} className="feature-image" />
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Featurecard;
