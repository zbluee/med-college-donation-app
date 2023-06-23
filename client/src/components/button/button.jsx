import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ variant, color, size, onClick,to, children }) {
  const buttonClass = `button ${variant} ${color} ${size}`;
  if (to) {
    return (
      <Link className={buttonClass} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  onClick: () => {},
};

export default Button;
