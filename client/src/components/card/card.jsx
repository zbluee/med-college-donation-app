import React from 'react';
import './Card.css';

function Card({ title, description, image, amount, date, location }) {
  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <p className="card-amount">{amount? `$${amount}` : location}</p>
          <p className="card-date">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
