import React from 'react';
import './FormInput.css';

function FormInput({ label, type, value, onChange, required }) {
  return (
    <div className="form-input">
      <label className="form-label">{label}</label>
      {type === 'textarea' ? (
        <textarea
          className="form-textarea"
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <input
          className="form-text-input"
          type={type}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}

export default FormInput;
