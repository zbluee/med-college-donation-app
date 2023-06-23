import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  const modalClass = isOpen ? 'modal-container modal-open' : 'modal-container';

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
