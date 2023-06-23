import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Help Us Provide Care to the Needy</h1>
        <h3 className="subtitle">Make a difference in the lives of the underprivileged patients in our hospitals.</h3>
        <Link to="/donate" className="button">
          Donate Now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;


