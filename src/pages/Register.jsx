import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import wallpaper from "../assets/hero-bg.jpg";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hover, setHover] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://documindbackend.onrender.com/api/auth/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);

      // ✅ Show success message
      setSuccessMessage("✅ You're signed in! You can log out anytime and will need to log in again.");
      
      // Optional: Navigate after a short delay
      setTimeout(() => {
        navigate('/upload');
      }, 2500); // 2.5 seconds

    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  // ✅ Your styles here (unchanged)
  const cardStyle = {
    backgroundColor: 'white',
    color: '#1E3A8A',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '24px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    color: '#1E3A8A',
    fontSize: '16px',
  };

  const baseButtonStyle = {
    width: '100%',
    padding: '12px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease-in-out',
  };

  const buttonStyle = {
    ...baseButtonStyle,
    backgroundColor: hover ? '#DBEAFE' : 'white',
    color: hover ? '#1E40AF' : '#1E3A8A',
    transform: hover ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <section
      style={{
        backgroundImage: `url(${wallpaper})`,
        padding: '80px 24px',
        fontFamily: 'Inter, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={cardStyle}>
        <h2 style={headingStyle}>Register</h2>
        
        {successMessage && (
          <div style={{
            backgroundColor: '#DCFCE7',
            color: '#166534',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontWeight: '500',
            textAlign: 'center',
          }}>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
