// Having imports to help us be able to use the necessary modules and components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Profile() {
  // useNavigate here will help in redirecting a user to the Home page after successfully creating an account
  // After creating an account the user is automatically logged in and redirected to the Home page
  const navigate = useNavigate(); 

  // State to help switch between Login and Register form
  const [isLogin, setIsLogin] = useState(true);

  // Using state to store form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  // State to hold registered user's data
  const [registeredUser, setRegisteredUser] = useState(null);

  // State to toggle password visibility using FaEye
  const [showPassword, setShowPassword] = useState(false);

  // State for displaying error messages incase the page doesn't load
  const [error, setError] = useState('');

  // State to display the submitted data upon successful registration
  const [submittedData, setSubmittedData] = useState(null);

  // Switch between login and registration form
  const toggleForm = () => {
    setIsLogin(!isLogin); 
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    setError('');
    setSubmittedData(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission (both for login and registration)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      // Saves registered user details
      setRegisteredUser({
        email: formData.email,
        password: formData.password,
      });

      // Displays the submitted data
      setSubmittedData(formData); 
      setError('');
      navigate('/home'); 
    } else {
      if (
        registeredUser &&
        formData.email === registeredUser.email &&
        formData.password === registeredUser.password
      ) {
        setError('');
        navigate('/home'); // Navigate to home after successful login
      } else {
        setError('Incorrect email or password.');
      }
    }
  };

  return (
    <div className="profile-container">
     <h2>{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* Email field which is same for both login and register) */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password field with show/hide toggle */}
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password field shown only during registration */}
        {!isLogin && (
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        {/* Display error messages if any */}
        {error && <p className="error">{error}</p>}

        <button type="submit">
          {isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>

      {/* Toggle between Login and Register */}
      <p onClick={toggleForm} className="toggle-link">
        {isLogin
          ? "Don't have an account? Create one"
          : 'Already have an account? Login'}
      </p>

      {/* Display submitted data after registration */}
      {submittedData && (
        <div className="submitted-data">
          <h4>Submitted Information:</h4>
          <p>
            Name: {submittedData.firstName} {submittedData.lastName}
          </p>
          <p>Email: {submittedData.email}</p>
          <p>Phone: {submittedData.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
