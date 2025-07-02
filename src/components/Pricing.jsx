import React from 'react';
import wallpaper from "../assets/hero-bg.jpg";

export const Pricing = () => (
  <section
    id="pricing"
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
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '48px',
      }}
    >
      Choose Your Plan
    </h2>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
      }}
    >
      {["Free Plan", "Pro Plan", "Enterprise Plan"].map((plan, index) => (
        <div
          key={index}
          style={pricingCardStyle}
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
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '16px',
            }}
          >
            {plan}
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '20px',
              color: '#374151',
              fontSize: '14px',
              lineHeight: '1.8',
            }}
          >
            <li>
              ✔ {plan === 'Free Plan' ? '5 uploads' : plan === 'Pro Plan' ? '100 uploads' : 'Unlimited uploads'}
            </li>
            <li>✔ AI Summaries</li>
            <li>✔ Priority Support</li>
          </ul>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {plan === 'Free Plan' ? 'Free' : plan === 'Pro Plan' ? '$19/mo' : 'Custom'}
          </p>
        </div>
      ))}
    </div>
  </section>
);

// Hoverable pricing card base styles
const pricingCardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  width: '300px',
  borderRadius: '12px',
  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease-in-out',
  transform: 'scale(1)',
  cursor: 'default'
};
