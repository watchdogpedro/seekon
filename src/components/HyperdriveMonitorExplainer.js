import React from 'react';

const HyperdriveMonitorExplainer = ({ isOpen, onClose }) => {
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
          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>
              How Hyperdrive Monitor Works
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              Continuous tracking and optimization for AI visibility
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
              <span style={{ color: '#8b5cf6' }}>🎯</span>
              What Hyperdrive Monitor Does
            </h3>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.7', 
              fontSize: '1rem',
              marginBottom: '1rem'
            }}>
              Hyperdrive Monitor is your 24/7 AI visibility surveillance system. It continuously tracks how AI systems 
              like ChatGPT, Gemini, and Perplexity discover, understand, and reference your content. Think of it as 
              mission control for your digital presence in the AI era.
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
              <span style={{ color: '#8b5cf6' }}>⚙️</span>
              Continuous Monitoring Process
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  step: '1',
                  title: 'LLM Mention Monitoring',
                  description: 'Tracks when and how your business is mentioned across major AI platforms. We monitor ChatGPT, Gemini, Perplexity, and other AI systems to see how accurately they represent your company.',
                  icon: '🤖'
                },
                {
                  step: '2', 
                  title: 'Real-Time Freshness Alerts',
                  description: 'Monitors your content for staleness that could hurt AI citations. Gets alerts when key pages need updates, new information should be added, or content falls behind current events.',
                  icon: '🚨'
                },
                {
                  step: '3',
                  title: 'Link Opportunity Detection',
                  description: 'Identifies new linking opportunities and relationship building that could improve your authority in AI knowledge graphs. Spots when competitors gain ground in AI citations.',
                  icon: '🔗'
                },
                {
                  step: '4',
                  title: 'Performance Intelligence',
                  description: 'Comprehensive dashboards showing your AI visibility trends, competitive positioning, and optimization opportunities with detailed analytics and actionable insights.',
                  icon: '📊'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#faf5ff',
                  borderRadius: '16px',
                  border: '1px solid #e9d5ff'
                }}>
                  <div style={{
                    background: '#8b5cf6',
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
              <span style={{ color: '#8b5cf6' }}>📊</span>
              Your Hyperdrive Dashboard Includes
            </h3>
            
            <div style={{
              background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #c4b5fd'
            }}>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'AI mention tracking across ChatGPT, Gemini, Perplexity, and emerging LLMs',
                  'Content freshness scoring with automated update recommendations',
                  'Competitive AI visibility analysis and market positioning',
                  'Link opportunity alerts for authority building',
                  'Citation accuracy monitoring and correction suggestions',
                  'Performance trend analysis with month-over-month improvements',
                  'Monthly strategy sessions with AI optimization specialists',
                  'Custom alerts for industry keyword mentions and opportunities'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#333'
                  }}>
                    <span style={{ 
                      color: '#8b5cf6', 
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

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
              Ready for AI-Era Performance Monitoring?
            </h3>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
              Stay ahead of the curve with continuous AI visibility tracking and optimization
            </p>
            <button
              onClick={onClose}
              style={{
                background: '#FF6B6B',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              ⚡ Explore Hyperdrive Monitor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperdriveMonitorExplainer;