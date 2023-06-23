import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-message-container">
      <p className="error-message-text">{message}</p>
    </div>
  );
}

export default ErrorMessage;
