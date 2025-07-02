import React from 'react';
import wallpaper from "../assets/wallpaper1.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha Malik",
      title: "Data Analyst",
      comment: "DocuMind AI completely transformed how I analyze documents. It's fast, reliable, and easy to use!",
    },
    {
      name: "John Carter",
      title: "Startup Founder",
      comment: "This platform saved my team hours of manual work. The AI summaries are incredibly accurate!",
    },
    {
      name: "Liam Zhao",
      title: "Product Manager",
      comment: "I’m impressed with the interface and performance. Great tool for understanding large data quickly.",
    }
  ];

  return (
    <section style={sectionStyle} id="testimonials">
      <h2 style={headingStyle}>What People Are Saying</h2>
      <div style={testimonialsContainer}>
        {testimonials.map((t, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
            }}
          >
            <p style={commentStyle}>“{t.comment}”</p>
            <h4 style={nameStyle}>{t.name}</h4>
            <span style={titleStyle}>{t.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles
const sectionStyle = {
  backgroundImage: `url(${wallpaper})`,
  padding: '60px 24px',
  fontFamily: 'Inter, sans-serif',
  textAlign: 'center'
};

const headingStyle = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '40px'
};

const testimonialsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
  padding: '24px',
  maxWidth: '320px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'default'
};

const commentStyle = {
  fontSize: '16px',
  color: '#334155',
  marginBottom: '20px',
  lineHeight: '1.6',
};

const nameStyle = {
  fontSize: '17px',
  fontWeight: '600',
  color: '#1E3A8A',
  marginBottom: '4px'
};

const titleStyle = {
  fontSize: '14px',
  color: '#475569'
};
