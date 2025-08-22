import React, { useState } from 'react';
import { addEmailToSheet } from '../services/googleSheets';

const EmailCapture = ({ onEmailSubmitted, title = "Get Your Free SEO Evaluation" }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await addEmailToSheet(email);
      
      if (result.success) {
        onEmailSubmitted(email);
      } else {
        setError(`Error: ${result.error || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      if (error.message.startsWith('RATE_LIMIT:')) {
        const message = error.message.replace('RATE_LIMIT: ', '');
        setError(`🚫 ${message} Please contact us directly for additional evaluations.`);
      } else {
        setError(`Error: ${error.message || 'Something went wrong. Please try again.'}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>{title}</h2>
      <p style={{ marginBottom: '25px', color: '#666', fontSize: '16px' }}>
        Enter your email to receive your comprehensive SEO analysis and actionable insights.
      </p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          style={{
            padding: '12px 16px',
            borderRadius: '5px',
            border: '2px solid #ddd',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#007bff'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
        
        {error && (
          <div style={{ color: '#dc3545', fontSize: '14px', textAlign: 'left' }}>
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '12px 24px',
            backgroundColor: isSubmitting ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#007bff')}
        >
          {isSubmitting ? 'Processing...' : 'Get Free Evaluation'}
        </button>
      </form>
      
      <p style={{ marginTop: '15px', fontSize: '12px', color: '#888' }}>
        We respect your privacy. Your email will only be used for your SEO evaluation.
      </p>
    </div>
  );
};

export default EmailCapture;