import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TransformationForm from '../components/TransformationForm';
import ConsultationForm from '../components/ConsultationForm';

const ServicesPage = () => {
  const [showTransformationForm, setShowTransformationForm] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const services = [
    {
      icon: '🛰️',
      title: 'Orbital Scan',
      price: 'Free',
      description: 'Comprehensive AI analysis of your site\'s LLM readiness',
      features: [
        'Entity clarity assessment',
        'Schema markup analysis',
        'Internal linking structure',
        'Content gap identification',
        'SSS Score (Semantic Strength Score)',
        'Quick-win recommendations'
      ]
    },
    {
      icon: '📋',
      title: 'Cosmo Briefs',
      price: '$299/month',
      description: 'AI-generated content briefs optimized for LLM retrieval',
      features: [
        'Monthly topic research',
        'Entity-focused outlines',
        'Question frameworks',
        'Source recommendations',
        'Semantic keyword clusters',
        'Content optimization guides'
      ]
    },
    {
      icon: '⚡',
      title: 'Hyperdrive Monitor',
      price: '$599/month',
      description: 'Continuous tracking and optimization for AI visibility',
      features: [
        'LLM mention monitoring',
        'Real-time freshness alerts',
        'Link opportunity detection',
        'Performance dashboards',
        'Competitive intelligence',
        'Monthly strategy sessions'
      ]
    },
    {
      icon: '🚀',
      title: 'Enterprise Mission Control',
      price: 'Custom',
      description: 'Full-service LLM optimization for complex organizations',
      features: [
        'Dedicated account team',
        'Custom implementation',
        'Multi-site management',
        'Advanced analytics',
        'Priority support',
        'Quarterly business reviews'
      ]
    }
  ];

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
              Our <span style={{color: '#667eea'}}>Services</span>
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              Comprehensive solutions to optimize your digital presence for the LLM era
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: index === 1 ? '3px solid #667eea' : '1px solid #eee',
                position: 'relative',
                transition: 'transform 0.3s ease'
              }}>
                {index === 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#667eea',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>
                    {service.title}
                  </h3>
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: '#667eea',
                    marginBottom: '1rem'
                  }}>
                    {service.price}
                  </div>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ 
                      padding: '0.5rem 0', 
                      color: '#555',
                      borderBottom: '1px solid #f0f0f0'
                    }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                
                {service.price === 'Free' ? (
                  <Link
                    to="/audit-tool"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1rem',
                      background: '#667eea',
                      color: 'white',
                      border: '2px solid #667eea',
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    🔍 Start Free Audit
                  </Link>
                ) : index === 3 ? (
                  // No button for Enterprise Mission Control (quarterly business reviews)
                  <div style={{
                    width: '100%',
                    padding: '1rem',
                    background: '#f8f9fa',
                    color: '#666',
                    border: '2px solid #e5e7eb',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}>
                    Contact for Pricing
                  </div>
                ) : (
                  <button 
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: index === 1 ? '#667eea' : 'transparent',
                      color: index === 1 ? 'white' : '#667eea',
                      border: `2px solid #667eea`,
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setShowTransformationForm(true)}
                  >
                    🚀 Start Transformation
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <div style={{
            background: '#f8f9fa',
            padding: '3rem',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              Need a custom solution?
            </h3>
            <p style={{ marginBottom: '2rem', color: '#666' }}>
              Our team can create a tailored LLM optimization strategy for your specific industry and goals.
            </p>
            <button 
              className="btn btn-primary contact-button"
              onClick={() => setShowConsultationForm(true)}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              📞 Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Transformation Form Modal */}
      <TransformationForm 
        isOpen={showTransformationForm}
        onClose={() => setShowTransformationForm(false)}
      />

      {/* Consultation Form Modal */}
      <ConsultationForm 
        isOpen={showConsultationForm}
        onClose={() => setShowConsultationForm(false)}
      />
    </div>
  );
};

export default ServicesPage;