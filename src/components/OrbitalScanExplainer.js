import React from 'react';

const OrbitalScanExplainer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '24px',
          width: '50%',
          maxWidth: '700px',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: '24px 24px 0 0',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛰️</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>
              How Orbital Scan Works
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              Deep AI-powered analysis of your website's search readiness
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          {/* What It Does */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#333', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#667eea' }}>🎯</span>
              What Orbital Scan Does
            </h3>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.7', 
              fontSize: '1rem',
              marginBottom: '1rem'
            }}>
              Orbital Scan is our AI-powered analysis engine that examines your website through the lens of both 
              traditional search engines and modern AI systems like ChatGPT, Gemini, and Perplexity. It identifies 
              exactly how discoverable your content is in the new era of AI-powered search.
            </p>
          </section>

          {/* How It Works - Steps */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#333', 
              marginBottom: '1.5rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#667eea' }}>⚙️</span>
              The Scanning Process
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  step: '1',
                  title: 'Entity Clarity Analysis',
                  description: 'Scans your content to identify how clearly you define who you are, what you do, and what problems you solve. AI systems need crystal-clear entity definitions to understand and cite your business.',
                  icon: '🔍'
                },
                {
                  step: '2', 
                  title: 'Content Structure Assessment',
                  description: 'Evaluates how your information is organized. AI systems prefer structured data, clear headings, and logical content flow. We check if your content tells a coherent story.',
                  icon: '📋'
                },
                {
                  step: '3',
                  title: 'Internal Linking Intelligence',
                  description: 'Maps your internal link structure to see how well your pages connect related topics. Strong internal linking helps AI systems understand the relationships between your content areas.',
                  icon: '🔗'
                },
                {
                  step: '4',
                  title: 'Schema Markup Detection',
                  description: 'Checks for structured data markup that helps search engines and AI systems understand your content context. Missing schema is a major blind spot for AI discovery.',
                  icon: '🏷️'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#f8f9fa',
                  borderRadius: '16px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{
                    background: '#667eea',
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {item.step}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                      <h4 style={{ 
                        color: '#333', 
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        {item.title}
                      </h4>
                    </div>
                    <p style={{ 
                      color: '#666', 
                      lineHeight: '1.6',
                      margin: 0,
                      fontSize: '0.95rem'
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What You Get */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#333', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#667eea' }}>📊</span>
              Your Scan Results Include
            </h3>
            
            <div style={{
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #dee2e6'
            }}>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'SSS Score (Semantic Strength Score) - your overall AI-readiness rating',
                  'Entity clarity rating and specific improvement recommendations',
                  'Content structure analysis with optimization priorities',
                  'Internal linking strength assessment',
                  'Schema markup coverage report',
                  'Quick-win recommendations you can implement immediately'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#333'
                  }}>
                    <span style={{ 
                      color: '#10b981', 
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      flexShrink: 0,
                      marginTop: '0.1rem'
                    }}>
                      ✓
                    </span>
                    <span style={{ lineHeight: '1.5' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default OrbitalScanExplainer;