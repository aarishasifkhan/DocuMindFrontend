import React, { useState } from 'react';
import axios from 'axios';
import wallpaper from "../assets/hero-bg.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://documindbackend.onrender.com/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/upload');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  const cardStyle = {
  backgroundColor: 'white',
  color: '#1E3A8A',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const headingStyle = {
  fontSize: '28px',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  fontSize: '16px',
  backgroundColor: '#EFF6FF',
  outline: 'none',
};

const baseButtonStyle = (hover) => ({
  padding: '14px',
  borderRadius: '10px',
  fontWeight: 'bold',
  border: 'none',
  backgroundColor: hover ? '#DBEAFE' : 'white',
  color: hover ? '#1E40AF' : '#1E3A8A',
  cursor: 'pointer',
  boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
  transform: hover ? 'scale(1.03)' : 'scale(1)',
  transition: 'all 0.3s ease-in-out',
});


  return (
    <section
      style={{
        backgroundImage: `url(${wallpaper})`,
        padding: '80px 24px',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form style={cardStyle} onSubmit={handleLogin}>
        <h2 style={headingStyle}>Login</h2>
        <input
          type="email"
          placeholder="admin@demo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={baseButtonStyle(hover)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
