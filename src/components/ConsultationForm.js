import React, { useState } from 'react';

const ConsultationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phoneNumber: '',
    projectInterest: '',
    marketStudyOnly: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use correct API URL for localhost development
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3001/api/consultation-request'
        : '/api/consultation-request';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'SEEKON.AI Consultation Form'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({
            companyName: '',
            name: '',
            email: '',
            phoneNumber: '',
            projectInterest: '',
            marketStudyOnly: false
          });
        }, 3000);
      } else {
        throw new Error('Server error');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      console.error('Full error details:', error);
      alert('There was an error sending your message. Please try again or contact us directly at watchdogpedro@gmail.com');
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '1rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#666',
            zIndex: 1
          }}
        >
          ×
        </button>

        {isSubmitted ? (
          // Success State
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📞</div>
            <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>
              Consultation Request Sent!
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Thank you for your interest in our services. We've received your consultation request 
              and will contact you within 24 hours to schedule your consultation.
            </p>
            <p style={{ color: '#333', fontWeight: 'bold', marginTop: '1.5rem' }}>
              Check your email for confirmation details.
            </p>
          </div>
        ) : (
          // Form State
          <>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '2rem',
              borderRadius: '20px 20px 0 0',
              textAlign: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '2rem' }}>📞 Schedule Consultation</h2>
              <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>
                Let's discuss your LLM optimization needs
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Email <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Phone Number <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Project Interest
                </label>
                <textarea
                  name="projectInterest"
                  value={formData.projectInterest}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us about your project, goals, or specific needs..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ 
                marginBottom: '2rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '8px',
                border: '2px solid #e5e7eb'
              }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: '#333',
                  fontWeight: '600'
                }}>
                  <input
                    type="checkbox"
                    name="marketStudyOnly"
                    checked={formData.marketStudyOnly}
                    onChange={handleChange}
                    style={{
                      marginRight: '0.75rem',
                      width: '18px',
                      height: '18px',
                      cursor: 'pointer'
                    }}
                  />
                  Just send me a market study and information on our company
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting 
                    ? 'linear-gradient(45deg, #9ca3af, #6b7280)' 
                    : 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <span style={{ marginRight: '0.5rem' }}>⏳</span>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <span style={{ marginRight: '0.5rem' }}>📞</span>
                    SEND
                  </>
                )}
              </button>

              <p style={{ 
                textAlign: 'center', 
                color: '#666', 
                fontSize: '0.9rem', 
                marginTop: '1rem',
                lineHeight: '1.4'
              }}>
                By submitting this form, you agree to be contacted about our services. 
                We'll send your request to <strong>watchdogpedro@gmail.com</strong> for immediate follow-up.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationForm;