import React, { useState } from 'react';
import './ContactUsPage.css';
import FormInput from '../../components/form-input/form-input';
import LoadingSpinner from '../../components/loading-spinner/spinner';

function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can show a loading spinner while submitting the form
    setIsLoading(true);

    // Simulating a loading delay
    setTimeout(() => {
      // Perform form submission logic here
      console.log('Form submitted');
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      {isSubmitted ? (
        <div className="contact-us-success">
          <p className="success-message">Thank you for your message!</p>
          <p className="success-submessage">We will get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            label="Message"
            type="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="contact-us-submit-btn" disabled={isLoading}>
            {isLoading && <LoadingSpinner className="contact-us-loading-spinner" />}
            <span>{isLoading ? 'Submitting...' : 'Submit'}</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactUsPage;
