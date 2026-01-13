import React, { useState } from "react";

function Checkout() {
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompleted(true);
  };

  if (completed) {
    return (
      <div className="container">
        <h2>Purchase completed successfully 🎉</h2>
        <p>Thank you for your order.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name Surname" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Card Number (16 digits)" maxLength={16} pattern="\d{16}" inputMode="numeric" required
/>


        <button type="submit">Confirm Purchase</button>
      </form>
    </div>
  );
}

export default Checkout;
