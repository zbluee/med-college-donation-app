import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} Tibebe Ghion Specialized Teaching Hospital. All rights reserved.</p>
        <p className="footer-text">
          Developed with <span role="img" aria-label="heart">❤️</span> by{' '}
          <a
            href="https://t.me/Danniielo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Daniel Esubalew Dessie
          </a>
        </p>
        <p className="footer-text">
          Email : 
          <a href="mailto:dessiedaniel25@gmail.com" className="footer-link"> dessiedaniel25@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
