import React from 'react';
import './ContactSection.css';

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic later (e.g., send to an API or mailto)
    alert('Form submitted (placeholder)! Thank you for your message.');
    event.target.reset(); // Reset form fields
  };

  return (
    <section id="contact-us-section" className="contact-section">
      <div className="contact-content-wrapper">
        <h2 className="contact-title">Let's keep in touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="query">How can we help you?</label>
            <textarea id="query" name="query" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection; 