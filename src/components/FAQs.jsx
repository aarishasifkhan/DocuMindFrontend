import React, { useState } from 'react';
import wallpaper from "../assets/hero-bg.jpg";

const faqs = [
  {
    question: 'What file types can I upload?',
    answer: 'You can upload PDF, DOCX, or TXT files. We support most common document formats.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, your documents are processed securely and not stored on our servers.',
  },
  {
    question: 'How long does processing take?',
    answer: 'Typically just a few seconds. Larger documents may take slightly longer.',
  },
  {
    question: 'Do I need an account to use the service?',
    answer: 'Yes, registration is required to access the upload and summary features.',
  },
  {
    question: 'Can I download the summary?',
    answer: 'Currently, summaries are displayed on-screen. Download support is coming soon.',
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      style={{
        backgroundImage: `url(${wallpaper})`,
        color: 'white',
        padding: '80px 24px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '700', marginBottom: '48px' }}>
        Frequently Asked Questions
      </h2>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            style={{
              backgroundColor: 'white',
              color: '#1E3A8A',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              userSelect: 'none',
              transform: openIndex === index ? 'scale(1.02)' : 'scale(1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              e.currentTarget.querySelector('h3').style.color = '#2563EB'; // blue-600
              e.currentTarget.querySelector('h3').style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
              e.currentTarget.querySelector('h3').style.color = '#1E3A8A'; // original
              e.currentTarget.querySelector('h3').style.transform = 'scale(1)';
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: openIndex === index ? '8px' : '0',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {faq.question}
            </h3>
            {openIndex === index && (
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginTop: '8px',
                  transition: 'opacity 0.3s ease-in-out',
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
