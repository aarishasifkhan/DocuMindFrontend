import React, { useEffect, useState } from 'react';
import wallpaper from "../assets/wallpaper1.jpg";
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Track current location

  // ✅ Update auth state every time route changes (login/logout/register)
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    alert('You have been logged out.');
    navigate('/login');
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#DBEAFE';
    e.target.style.color = '#1E40AF';
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#dbeafe';
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = 'none';
  };

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#1E3A8A';
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
  };

  return (
    <nav style={{
      backgroundImage: `url(${wallpaper})`,
      color: '#dbeafe',
      padding: '16px 24px',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ fontWeight: 'bold', fontSize: '20px', textDecoration: 'none', color: '#dbeafe' }}>
        DocuMind AI
      </Link>

      <div className="nav-links" style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <a href="#about" style={navLinkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</a>
        <a href="#features" style={navLinkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Features</a>
        <a href="#pricing" style={navLinkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Pricing</a>
        <a href="#testimonials" style={navLinkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Testimonials</a>
        <a href="#faqs" style={navLinkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>FAQs</a>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            style={navButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleButtonLeave}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate('/upload')}
            style={navButtonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleButtonLeave}
          >
            Get Started
          </button>
        )}
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: '#dbeafe',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '500',
  padding: '6px 10px',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  border: 'none',
};

const navButtonStyle = {
  backgroundColor: 'white',
  color: '#1E3A8A',
  padding: '10px 20px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: '600',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
  cursor: 'pointer',
  border: 'none',
};
