import React from 'react';
import './AboutUsPage.css';

function AboutUsPage() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-description">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-text">
          Welcome to the Med-College Donation App, your gateway to supporting the future of medicine! We are delighted to introduce you to a platform that facilitates seamless online donations, provides information on volunteer opportunities, offers an FAQ section, and ensures easy access to contact information.

At the heart of this initiative is our commitment to advancing medical education, research, and healthcare at Tibebe Ghion Specialized Teaching Hospital. The Med-College Donation App streamlines the process of contributing to the Medicine College, making it convenient for individuals and organizations to make a positive impact on the medical community.
          </p>
          <p className="about-us-text">
          <h3>Our Mission:</h3>

The Med-College Donation App is more than just a platform; it's a commitment to the advancement of medical education and healthcare. By fostering a community of support, we aim to contribute to the growth and excellence of Medicine College.

<h3>Meet the Creator:</h3>


This initiative was brought to life by <a
            href="https://t.me/Danniielo"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
           <strong>Daniel Esubalew Dessie</strong>
          </a>, a visionary creator passionate about leveraging technology to make a positive impact. Daniel envisions a future where education and healthcare go hand in hand, and the Med-College Donation App is a testament to his dedication to this cause.

<div className="about-foot"> Thank you for being part of our journey. Together, let's shape the future of medicine!</div> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
