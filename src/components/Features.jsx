import React from 'react';
import '../css/Features.css';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="feature">
        <h3>Speed</h3>
        <p>Fast browsing speeds with minimal resource consumption.</p>
      </div>
      <div className="feature">
        <h3>Security</h3>
        <p>Advanced security features to protect your privacy and data.</p>
      </div>
      <div className="feature">
        <h3>Simplicity</h3>
        <p>A clean and intuitive interface designed for ease of use.</p>
      </div>
    </section>
  );
};

export default Features;
