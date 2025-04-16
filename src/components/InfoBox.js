// src/components/InfoBox.js
import React from 'react';
import './InfoBox.css'; // We'll add styling here

const InfoBox = ({ title, children }) => {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default InfoBox;
