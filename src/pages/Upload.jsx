import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import wallpaper from "../assets/hero-bg.jpg";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const token = localStorage.getItem('token');
      const res = await axios.post('https://documindbackend.onrender.com/api/docs/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResult(res.data.extracted);
    } catch (err) {
      console.error('Upload error:', err);
      setResult('Something went wrong while processing the file.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="upload"
      style={{
        backgroundImage: `url(${wallpaper})`,
        color: 'white',
        padding: '80px 24px',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
        Upload & Analyze
      </h2>
      <p style={{ fontSize: '16px', marginBottom: '30px', color: '#DBEAFE' }}>
        Upload documents and get intelligent summaries, insights, and Q&A — instantly.
      </p>

      {!isAuthenticated ? (
        <div
          style={{
            backgroundColor: 'white',
            color: '#1E3A8A',
            padding: '24px',
            maxWidth: '500px',
            margin: '0 auto',
            borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
            Sign In Required
          </h3>
          <p>
            Please{' '}
            <Link to="/login" style={{ color: '#2563EB', fontWeight: 'bold' }}>
              Login
            </Link>{' '}
            or{' '}
            <Link to="/register" style={{ color: '#2563EB', fontWeight: 'bold' }}>
              Register
            </Link>{' '}
            to upload and analyze documents.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              backgroundColor: 'white',
              color: '#1E3A8A',
              padding: '10px',
              borderRadius: '8px',
              fontWeight: '500',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
          <button
            onClick={handleUpload}
            disabled={loading || !file}
            style={{
              backgroundColor: 'white',
              color: '#1E3A8A',
              fontWeight: 'bold',
              padding: '12px 30px',
              borderRadius: '8px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease-in-out',
              opacity: loading || !file ? 0.6 : 1,
              cursor: loading || !file ? 'not-allowed' : 'pointer',
            }}
            onMouseOver={(e) => {
              if (!loading && file) {
                e.currentTarget.style.backgroundColor = '#DBEAFE';
                e.currentTarget.style.color = '#1E40AF';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#1E3A8A';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {loading ? 'Processing...' : 'Upload & Analyze'}
          </button>
        </div>
      )}

      {result && (
        <div
          style={{
            marginTop: '40px',
            backgroundColor: 'white',
            color: '#1E3A8A',
            padding: '24px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            textAlign: 'left',
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
            Result:
          </h3>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
        </div>
      )}
    </section>
  );
};

export default Upload;
