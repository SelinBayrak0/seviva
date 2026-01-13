import React, { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      phone,
      email,
      gender,
      birthDate,
    };

    localStorage.setItem("sevivaUser", JSON.stringify(user));
    setSuccessMessage("Welcome to Seviva! Your account has been created 💖");
  };

  return (
    <div className="container">
      <div className="register-header">
        <img
          src="/images/registericon.jpeg"
          alt="User Icon"
          className="register-icon"
        />
        <h1>Create Account</h1>
        <p>Please fill in the information below.</p>
      </div>

      {successMessage && (
  <p style={{ color: "green", textAlign: "center", marginBottom: "15px" }}>
    {successMessage}
  </p>
)}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number (10 digits)"
          maxLength={10}
          pattern="\d{10}"
         inputMode="numeric"
          required
        />


        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
