import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../customers/customersSlice';
import { useNavigate } from 'react-router-dom';
import './Register.css';  // Assuming you're using a separate CSS file for styling

const Register = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer({ ...customer, id: Date.now() }));
    navigate('/customers');
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register New Customer</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
