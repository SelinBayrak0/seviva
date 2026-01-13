import React, { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      {sent && (
        <div className="success-message">
          ✨ Your message has been sent successfully!
        </div>
      )}

      <div className="contact-box">
        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="4" required />

          <button type="submit">Send Message</button>
        </form>

        {/* FOUNDERS */}
        <div className="founders">
          <h3>Founders</h3>
          <p>Selin Bayrak</p>
          <p>Nurşin Bülbül</p>

          <div className="founder-line"></div>
          {/* CONTACT INFO */}
<div className="contact-info">
  <h3>Contact Information</h3>

  <div className="info-item">
    <span>📞</span>
    <p>+90 5XX XXX XX XX</p>
  </div>

  <div className="info-item">
    <span>✉️</span>
    <p>contact@seviva.com</p>
  </div>

  <div className="info-item">
    <span>📍</span>
    <p>İstanbul, Türkiye</p>
  </div>
</div>


          <p className="founder-note">
            SEVIVA was founded with a vision to create elegant, timeless jewelry
            that reflects confidence and individuality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

