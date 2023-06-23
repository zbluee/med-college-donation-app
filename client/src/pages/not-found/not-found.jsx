import React from 'react';
import './NotFoundPage.css';
import Button from '../../components/button/button';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">Oops! Page Not Found</h1>
        <p className="not-found-subtitle">The requested page does not exist.</p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/"
          className="not-found-button"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
