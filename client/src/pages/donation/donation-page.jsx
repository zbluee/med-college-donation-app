import React, { useState } from 'react';
import './DonationPage.css';

function DonationPage() {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation amount:', donationAmount);
    // Additional logic for processing the donation
  };

  return (
    <div className="donation-container">
      <div className="donation-content">
        <h1 className="donation-title">Make a Donation</h1>
        <p className="donation-subtitle">
          Your contribution can help provide essential care to those in need.
        </p>
      </div>
      <form className="donation-form" onSubmit={handleSubmit}>
        <input
          className="donation-input"
          type="number"
          placeholder="Donation Amount"
          required
          value={donationAmount}
          onChange={handleDonationChange}
          min="1"
        />
        <button className="donation-button" type="submit">
          Donate Now
        </button>
      </form>
    </div>
  );
}

export default DonationPage;
