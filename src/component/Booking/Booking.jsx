import React, { useState } from 'react';
import './Booking.css'; 

function Booking() {
  const [fullname, setfullname] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [destination, setdestination] = useState('');
  const [Charges, setCharges] = useState('');

  const sendDate = (e) => {
    e.preventDefault();
    console.log(fullname, contact, email, password, destination, Charges);
  };

  return (
    <center>
      <div className="form-container">
        <form onSubmit={sendDate} className="booking-form">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            placeholder="Enter the name"
            onChange={(e) => setfullname(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Contact No:</label>
          <input
            type="text"
            onChange={(e) => setcontact(e.target.value)}
            className="form-input"
          />

          <label className="form-label">E-mail:</label>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Password:</label>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Destination:</label>
          <input
            type="text"
            onChange={(e) => setdestination(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Charges:</label>
          <input
            type="number"
            onChange={(e) => setCharges(e.target.value)}
            className="form-input"
          />

          <input
            type="submit"
            value="Book"
            className="submit-button"
          />
        </form>
      </div>
    </center>
  );
}

export default Booking;
