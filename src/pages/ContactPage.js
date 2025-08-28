import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare the data with timestamp
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'SEEKON.AI Contact Form'
      };

      // Submit to our backend API
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3001/api/contact-form'
        : '/api/contact-form';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('Contact form submitted successfully:', result);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          industry: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem', 
              color: '#333'
            }}>
              Get <span style={{color: '#667eea'}}>Started</span>
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              Ready to optimize your digital presence for the LLM era? Let's talk.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '2rem', color: '#333' }}>Send us a message</h2>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {submitStatus === 'success' && (
                  <div style={{
                    background: '#4CAF50',
                    color: 'white',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
                  }}>
                    🎉 Thanks for connecting! We will get right back to you within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div style={{
                    background: '#f44336',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    marginBottom: '1rem'
                  }}>
                    ❌ Something went wrong. Please try again.
                  </div>
                )}
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #eee',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #eee',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Company
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #eee',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Industry
                  </label>
                  <select 
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #eee',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    <option value="">Select your industry</option>
                    <option value="life-sciences">Life Sciences</option>
                    <option value="manufacturing">Manufacturing Automation</option>
                    <option value="semiconductor">Semiconductor</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
                    Message *
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    rows={5}
                    disabled={isSubmitting}
                    placeholder="Tell us about your LLM optimization goals..."
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #eee',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: isSubmitting 
                      ? '#ccc' 
                      : 'linear-gradient(45deg, #667eea, #764ba2)',
                    color: 'white',
                    padding: '1rem 2rem',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid white',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '2rem', color: '#333' }}>Get in touch</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Quick Start */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '15px'
                }}>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🚀 Quick Start</h3>
                  <p style={{ marginBottom: '1rem', color: '#666' }}>
                    Ready to begin? Start with our comprehensive audit to see how AI-ready your site is.
                  </p>
                  <Link to="/audit-tool" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                    Get Free SEO & AI Audit
                  </Link>
                </div>
                
                {/* Schedule Call */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '15px'
                }}>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📞 Schedule a Call</h3>
                  <p style={{ marginBottom: '1rem', color: '#666' }}>
                    Book a 30-minute consultation to discuss your specific LLM optimization needs.
                  </p>
                  <button className="btn btn-secondary">
                    Book Consultation
                  </button>
                </div>
                
                {/* Experience */}
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '15px'
                }}>
                  <h3 style={{ marginBottom: '1rem' }}>💡 30+ Years Experience</h3>
                  <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                    Our team brings three decades of technology marketing expertise across:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>✓ Life Sciences & Medical Devices</li>
                    <li style={{ marginBottom: '0.5rem' }}>✓ Manufacturing Automation</li>
                    <li style={{ marginBottom: '0.5rem' }}>✓ Semiconductor Technology</li>
                    <li style={{ marginBottom: '0.5rem' }}>✓ Digital Marketing Evolution</li>
                  </ul>
                </div>
                
                {/* Contact Details */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '15px'
                }}>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📧 Direct Contact</h3>
                  <div style={{ color: '#666' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Email:</strong>
                      <div style={{
                        display: 'inline-block',
                        marginLeft: '10px',
                        padding: '8px 15px',
                        background: 'linear-gradient(135deg, #E9424E, #00D4AA)',
                        borderRadius: '5px',
                        fontFamily: 'monospace',
                        fontSize: '0.95rem',
                        color: 'white',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        border: '2px solid #fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}>
                        infoai@seekon.ai
                      </div>
                    </div>
                    <p style={{ 
                      fontSize: '0.85rem', 
                      fontStyle: 'italic', 
                      color: '#888', 
                      marginBottom: '1rem' 
                    }}>
                      📝 Please type the email address above (anti-spam protection)
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>
                      <strong>Response time:</strong> Within 24 hours
                    </p>
                    <p>
                      <strong>Time zone:</strong> Available globally
                    </p>
                  </div>
                </div>
                
                {/* Location Map */}
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '15px'
                }}>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🌍 Our Reach</h3>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '10px',
                    padding: '2rem',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌐</div>
                    <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Global AI Optimization</h4>
                    <p style={{ opacity: 0.9, maxWidth: '300px', lineHeight: '1.5' }}>
                      Serving clients worldwide with cutting-edge LLM optimization and AI-ready SEO strategies
                    </p>
                    <div style={{
                      marginTop: '1rem',
                      display: 'flex',
                      justifyContent: 'space-around',
                      width: '100%',
                      maxWidth: '200px'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>🇺🇸</span>
                      <span style={{ fontSize: '1.5rem' }}>🇬🇧</span>
                      <span style={{ fontSize: '1.5rem' }}>🇪🇺</span>
                      <span style={{ fontSize: '1.5rem' }}>🇦🇺</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;