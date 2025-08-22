import React from 'react';

const ActionableInsightsExplainer = ({ isOpen, onClose }) => {
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
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>
              Actionable Insights
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              Get prioritized recommendations for both classic SEO and AI optimization
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
              <span style={{ color: '#f59e0b' }}>🎯</span>
              What Actionable Insights Provide
            </h3>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.7', 
              fontSize: '1rem',
              marginBottom: '1rem'
            }}>
              Actionable Insights transform your audit data into a strategic roadmap. Instead of overwhelming 
              you with technical jargon, we deliver prioritized, implementable recommendations that bridge 
              traditional SEO and AI optimization, ranked by impact and implementation difficulty.
            </p>
          </section>

          {/* How We Prioritize */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#333', 
              marginBottom: '1.5rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#f59e0b' }}>⚙️</span>
              Smart Prioritization System
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  priority: 'HIGH',
                  title: 'Quick Wins with Maximum Impact',
                  description: 'Low-effort changes that deliver immediate results in both search rankings and AI citations. These are your "do first" recommendations.',
                  icon: '🚀',
                  color: '#ef4444'
                },
                {
                  priority: 'MEDIUM', 
                  title: 'Strategic Foundation Building',
                  description: 'Medium-effort improvements that establish long-term authority and AI trust. These build on quick wins for sustained growth.',
                  icon: '🏗️',
                  color: '#f59e0b'
                },
                {
                  priority: 'LOW',
                  title: 'Advanced Optimization Opportunities',
                  description: 'Higher-effort enhancements that provide competitive advantages and future-proof your AI discoverability strategy.',
                  icon: '🎖️',
                  color: '#10b981'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#fffbeb',
                  borderRadius: '16px',
                  border: '1px solid #fed7aa'
                }}>
                  <div style={{
                    background: item.color,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    minWidth: '80px',
                    height: 'fit-content'
                  }}>
                    {item.priority}
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
              <span style={{ color: '#f59e0b' }}>📊</span>
              Your Insights Include
            </h3>
            
            <div style={{
              background: 'linear-gradient(135deg, #fffbeb 0%, #fed7aa 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #fdba74'
            }}>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'Priority-ranked recommendations with impact scores',
                  'Implementation difficulty ratings and time estimates',
                  'Step-by-step instructions for each optimization',
                  'Before/after examples showing expected improvements',
                  'Classic SEO and AI optimization balance for each task',
                  'Resource requirements and potential ROI calculations',
                  'Timeline suggestions for optimal implementation sequence',
                  'Success metrics to track progress and measure results'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#333'
                  }}>
                    <span style={{ 
                      color: '#f59e0b', 
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

          {/* Example Insights */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#333', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#f59e0b' }}>💡</span>
              Example Insights You Might Receive
            </h3>
            
            <div style={{
              background: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  background: '#ef4444',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  marginBottom: '0.5rem'
                }}>
                  HIGH PRIORITY
                </div>
                <p style={{ color: '#333', fontWeight: '600', margin: '0.5rem 0' }}>
                  Add FAQ Schema to Your Support Page
                </p>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Impact: High | Effort: Low | Time: 2 hours<br />
                  "Your support page answers common questions but lacks structured data. Adding FAQ schema will help AI systems cite your solutions directly."
                </p>
              </div>
              
              <div>
                <div style={{
                  background: '#f59e0b',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  marginBottom: '0.5rem'
                }}>
                  MEDIUM PRIORITY
                </div>
                <p style={{ color: '#333', fontWeight: '600', margin: '0.5rem 0' }}>
                  Improve Internal Linking Between Product Pages
                </p>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
                  Impact: Medium | Effort: Medium | Time: 1 week<br />
                  "AI systems struggle to understand relationships between your products. Strategic internal linking will improve topic clustering."
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
              Ready for Your Strategic Roadmap?
            </h3>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
              Get prioritized, actionable recommendations tailored to your specific situation
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
              🎯 Get Actionable Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionableInsightsExplainer;