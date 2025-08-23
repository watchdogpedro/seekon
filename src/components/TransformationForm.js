import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const TransformationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    currentTraffic: '',
    mainGoal: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - using public demo keys, replace with actual keys
      await emailjs.send(
        'service_seekon', // Replace with your EmailJS service ID
        'template_transformation', // Replace with your EmailJS template ID
        {
          to_email: 'watchdogpedro@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          website: formData.website,
          phone: formData.phone,
          current_traffic: formData.currentTraffic,
          main_goal: formData.mainGoal,
          timeline: formData.timeline,
          budget: formData.budget,
          additional_info: formData.additionalInfo,
          subject: `🚀 SEEKON Transformation Request from ${formData.company || formData.name}`,
          message: `
NEW TRANSFORMATION REQUEST:

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company}
- Website: ${formData.website}
- Phone: ${formData.phone}

Project Details:
- Current Monthly Traffic: ${formData.currentTraffic}
- Main Goal: ${formData.mainGoal}
- Timeline: ${formData.timeline}
- Budget Range: ${formData.budget}

Additional Information:
${formData.additionalInfo}

This lead was generated from SEEKON.AI transformation form.
          `
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          name: '', email: '', company: '', website: '', phone: '',
          currentTraffic: '', mainGoal: '', timeline: '', budget: '', additionalInfo: ''
        });
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
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
        maxWidth: '600px',
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
            <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>
              Transformation Request Sent!
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Thank you for your interest in SEEKON's AI transformation services. 
              We've received your request and will contact you within 24 hours to discuss your project.
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
              <h2 style={{ margin: 0, fontSize: '2rem' }}>🚀 Start Your AI Transformation</h2>
              <p style={{ margin: '0.5rem 0 0', opacity: 0.9 }}>
                Let's optimize your site for the LLM era
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                    Full Name *
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

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                    Email Address *
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
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
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

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
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
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                    Current Monthly Traffic
                  </label>
                  <select
                    name="currentTraffic"
                    value={formData.currentTraffic}
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
                  >
                    <option value="">Select range</option>
                    <option value="<1K">Less than 1,000 visitors</option>
                    <option value="1K-10K">1,000 - 10,000 visitors</option>
                    <option value="10K-50K">10,000 - 50,000 visitors</option>
                    <option value="50K-100K">50,000 - 100,000 visitors</option>
                    <option value="100K+">100,000+ visitors</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
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
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP - Urgent</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just exploring">Just exploring options</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Main Goal *
                </label>
                <select
                  name="mainGoal"
                  value={formData.mainGoal}
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
                >
                  <option value="">Select primary goal</option>
                  <option value="Increase AI visibility">Get found by AI engines (ChatGPT, Gemini)</option>
                  <option value="More organic traffic">Increase organic search traffic</option>
                  <option value="Better conversions">Improve conversion rates</option>
                  <option value="Competitive advantage">Stay ahead of competition</option>
                  <option value="Full transformation">Complete LLM-era transformation</option>
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
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
                >
                  <option value="">Select budget range</option>
                  <option value="<$5K">Less than $5,000</option>
                  <option value="$5K-$15K">$5,000 - $15,000</option>
                  <option value="$15K-$30K">$15,000 - $30,000</option>
                  <option value="$30K-$50K">$30,000 - $50,000</option>
                  <option value="$50K+">$50,000+</option>
                  <option value="Not sure">Not sure yet</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '600' }}>
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your current challenges, specific needs, or any questions you have..."
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
                    Sending Your Request...
                  </>
                ) : (
                  <>
                    <span style={{ marginRight: '0.5rem' }}>🚀</span>
                    Start My Transformation
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
                By submitting this form, you agree to be contacted by our team about your transformation project. 
                We'll send your request to <strong>watchdogpedro@gmail.com</strong> for immediate follow-up.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TransformationForm;