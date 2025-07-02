import React from 'react';
import wallpaper from "../assets/hero-bg.jpg";
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/upload');
  };

  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${wallpaper})`,
        color: 'white',
        padding: '120px 24px',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px' }}>
        Transform Your Documents With Smart AI
      </h1>
      <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
        Upload documents and get intelligent summaries, insights, and Q&A — instantly.
      </p>
      <button
        onClick={handleClick}
        style={{
          padding: '14px 30px',
          backgroundColor: 'white',
          color: '#1E3A8A',
          fontWeight: 'bold',
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease-in-out',
          display: 'inline-block',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#DBEAFE';
          e.currentTarget.style.color = '#1E40AF';
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = '#1E3A8A';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
        }}
      >
        Try It Free
      </button>
    </section>
  );
};
