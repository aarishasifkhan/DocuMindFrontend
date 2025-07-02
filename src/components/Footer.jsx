import React from 'react';
import wallpaper from "../assets/wallpaper1.jpg";

export const Footer = () => {
  const handleFooterHover = (e) => {
    e.target.style.color = '#ffffff';
    e.target.style.transform = 'translateX(4px)';
  };

  const handleFooterLeave = (e) => {
    e.target.style.color = '#ffffff';
    e.target.style.transform = 'translateX(0)';
  };

  return (
    <footer style={{
      backgroundImage: `url(${wallpaper})`,
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif',
      padding: '60px 24px'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '30px'
      }}>
        <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px' }}>DocuMind AI</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ffffff' }}>
            Smart document AI assistant. Upload, summarize, and understand your data better.
          </p>
        </div>

        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px'}}>
            <li><a href="#about" style={footerLinkStyle} onMouseEnter={handleFooterHover} onMouseLeave={handleFooterLeave}>About Us</a></li>
            <li><a href="#careers" style={footerLinkStyle} onMouseEnter={handleFooterHover} onMouseLeave={handleFooterLeave}>Careers</a></li>
            <li><a href="#contact" style={footerLinkStyle} onMouseEnter={handleFooterHover} onMouseLeave={handleFooterLeave}>Contact</a></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Product</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px'}}>
            <li><a href="#features" style={footerLinkStyle} onMouseEnter={handleFooterHover} onMouseLeave={handleFooterLeave}>Features</a></li>
            <li><a href="#pricing" style={footerLinkStyle} onMouseEnter={handleFooterHover} onMouseLeave={handleFooterLeave}>Pricing</a></li>
            <li><a href="#upload" style={footerLinkStyle} onMouseEnter={handleFooterHover} onMouseLeave={handleFooterLeave}>Upload</a></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '40px', color: '#ffffff' }}>
        © {new Date().getFullYear()} DocuMind AI. All rights reserved.
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '8px',
  transition: 'all 0.3s ease'
};
