import React from 'react';
import wallpaper from "../assets/wallpaper1.jpg";

export const Features = () => (
  <section
    id="features"
    style={{
      padding: '80px 24px',
      backgroundImage: `url(${wallpaper})`,
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <h2
      style={{
        textAlign: 'center',
        fontSize: '32px',
        color: '#ffffff',
        fontWeight: '700',
        marginBottom: '48px',
      }}
    >
      Why DocuMind AI?
    </h2>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
      }}
    >
      {["AI-Powered Analysis", "Secure Uploads", "Instant Summaries"].map((feature, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
          }}
        >
          <h3
            style={{
              color: '#1E3A8A',
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '10px',
            }}
          >
            {feature}
          </h3>
          <p style={{ color: '#4B5563', fontSize: '14px', lineHeight: '1.6' }}>
            {feature === "AI-Powered Analysis" && "Uses GPT-4o to analyze documents and extract actionable insights."}
            {feature === "Secure Uploads" && "Uploaded documents are securely processed and never stored."}
            {feature === "Instant Summaries" && "Receive summaries, bullet points, and insights in seconds."}
          </p>
        </div>
      ))}
    </div>
  </section>
);

// Hoverable card base styles
const cardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  width: '300px',
  borderRadius: '10px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  transform: 'scale(1)',
  cursor: 'default',
};
