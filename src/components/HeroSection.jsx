import React from 'react';
import '../css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>The Browser Built to Be</h1>
      <p>Fast, secure, and free web browser built for the modern web.</p>
      <a href="#download" className="download-btn">Download Chrome</a>
    </section>
  );
};

export default HeroSection;
