import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setDropdownOpen(false);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">Medicine College</Link>
        <nav className={`nav ${isDropdownOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" className="nav-link" onClick={handleMenuItemClick}>
                Donation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donation-history" className="nav-link" onClick={handleMenuItemClick}>
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/volunteer-opportunities" className="nav-link" onClick={handleMenuItemClick}>
              Vopp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link" onClick={handleMenuItemClick}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={handleMenuItemClick}>
              about
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link" onClick={handleMenuItemClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={handleDropdownToggle}>
          <div className="dropdown-line"></div>
          <div className="dropdown-line"></div>
          <div className="dropdown-line"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
