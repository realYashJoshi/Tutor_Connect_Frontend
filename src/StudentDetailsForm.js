
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function StudentDetailsForm({ location }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [institution, setInstitution] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [tutorName, setTutorName] = useState('');
  const currentLocation = useLocation();
  useEffect(() => {
    if (currentLocation.state && currentLocation.state.tutorName) {
      setTutorName(currentLocation.state.tutorName);
    }
  }, [currentLocation]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8083/createStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tutorId: tutorName,
        name,
        year,
        institution,
        paymentOption,
        tutorName,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert('Payment made successfully');
      window.location.href = 'http://localhost:3000/student';
    } else {
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 style={{ color: 'black' }}><strong>Enroll Under:</strong> {tutorName}</h2>
      {/* Render tutor's name somewhere on the screen */}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ color: 'black' }}>Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label" style={{ color: 'black' }}>Currently Studying Year:</label>
          <input
            type="text"
            className="form-control"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="institution" className="form-label" style={{ color: 'black' }}>Institution:</label>
          <input
            type="text"
            className="form-control"
            id="institution"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentOption" className="form-label" style={{ color: 'black' }}>Payment Option (Rs 500):</label>
          <select
            className="form-select"
            id="paymentOption"
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
            required
          >
            <option value="">Select a payment option</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="gpay">Google Pay (GPay)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-warning">Enroll</button>
      </form>
    </div>
  );
}

export default StudentDetailsForm;

