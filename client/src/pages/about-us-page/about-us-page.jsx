import React from 'react';
import './AboutUsPage.css';

function AboutUsPage() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-description">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium lacus ac nibh
            malesuada, sed mattis felis tristique. Aliquam erat volutpat. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam consequat,
            tellus ac aliquam hendrerit, elit massa consequat mi, ut faucibus mi ligula id purus.
          </p>
          <p className="about-us-text">
            Vestibulum congue neque sed ligula finibus, ac aliquet mauris venenatis. Nunc
            egestas, urna sit amet efficitur consectetur, nunc odio congue enim, et fringilla enim
            diam ut dui. Donec faucibus, elit a porttitor dictum, ante tortor imperdiet sem, ac
            dapibus felis lacus a erat. Sed in tortor at erat volutpat vestibulum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
