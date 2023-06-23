import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Medicine College</h1>
        <p className="hero-description">
          Transforming healthcare through education and innovation
        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </section>
  );
}

export default HeroSection;


