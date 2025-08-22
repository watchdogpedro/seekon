import React from 'react';

const AISearchSimulationExplainer = ({ isOpen, onClose }) => {
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
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>
              AI Search Simulation
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              See how AI systems like ChatGPT and Gemini describe your business
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
              <span style={{ color: '#3b82f6' }}>🎯</span>
              What AI Search Simulation Does
            </h3>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.7', 
              fontSize: '1rem',
              marginBottom: '1rem'
            }}>
              AI Search Simulation shows you exactly how major AI systems like ChatGPT, Gemini, and Perplexity 
              understand and describe your business when users ask about your industry, products, or services. 
              This reveals your current AI visibility and citation accuracy.
            </p>
          </section>

          {/* How It Works */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#333', 
              marginBottom: '1.5rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#3b82f6' }}>⚙️</span>
              AI Testing Process
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  step: '1',
                  title: 'Multi-Platform Query Testing',
                  description: 'We ask ChatGPT, Gemini, Perplexity, and Claude specific questions about your business domain and industry to see how they respond.',
                  icon: '🔍'
                },
                {
                  step: '2', 
                  title: 'Citation Accuracy Analysis',
                  description: 'Evaluate whether AI systems mention your business correctly, cite accurate information, and position you appropriately in their responses.',
                  icon: '✅'
                },
                {
                  step: '3',
                  title: 'Competitive Context Review',
                  description: 'Assess how AI systems position you relative to competitors and whether you appear in relevant industry discussions and recommendations.',
                  icon: '🏆'
                },
                {
                  step: '4',
                  title: 'Response Quality Scoring',
                  description: 'Rate the completeness, accuracy, and favorability of AI-generated descriptions of your business and offerings.',
                  icon: '📈'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#eff6ff',
                  borderRadius: '16px',
                  border: '1px solid #bfdbfe'
                }}>
                  <div style={{
                    background: '#3b82f6',
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
              <span style={{ color: '#3b82f6' }}>📊</span>
              Your AI Simulation Report Shows
            </h3>
            
            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #93c5fd'
            }}>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'Actual AI responses to questions about your domain and keyword',
                  'Citation status: whether your business is mentioned and how accurately',
                  'Response completeness and favorability scoring',
                  'Comparison across ChatGPT, Gemini, Perplexity, and Claude',
                  'Competitive positioning analysis within AI responses',
                  'Missing information opportunities where AI has gaps',
                  'Recommendations to improve AI citation quality and frequency',
                  'Industry context analysis showing your AI visibility landscape'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#333'
                  }}>
                    <span style={{ 
                      color: '#3b82f6', 
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
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
              Ready to See How AI Describes Your Business?
            </h3>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
              Discover your current AI visibility and citation accuracy across major platforms
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
              🤖 Test AI Search Simulation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISearchSimulationExplainer;