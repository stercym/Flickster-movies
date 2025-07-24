import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [registeredUser, setRegisteredUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle between login and registration
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
  };

  // Input form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // login and registration
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      // Registration mode
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      setRegisteredUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      setIsLoggedIn(true);
      setError('');
      navigate('/home');
    } else {
      // Login mode
      const savedUser = JSON.parse(localStorage.getItem('user'));

      if (
        savedUser &&
        formData.email === savedUser.email &&
        formData.password === savedUser.password
      ) {
        setRegisteredUser(savedUser);
        setIsLoggedIn(true);
        setError('');
        navigate('/home');
      } else {
        setError('Incorrect email or password.');
      }
    }
  };



  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setRegisteredUser(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="profile-container">
      {isLoggedIn && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}

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

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

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

        {error && <p className="error">{error}</p>}

        <button type="submit" className="submit-button">
          {isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>

      <p onClick={toggleForm} className="toggle-link">
        {isLogin
          ? "Don't have an account? Create one"
          : 'Already have an account? Login'}
      </p>
    </div>
  );
}

export default Profile;
