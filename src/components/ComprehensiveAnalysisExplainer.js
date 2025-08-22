import React from 'react';

const ComprehensiveAnalysisExplainer = ({ isOpen, onClose }) => {
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
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>
              Comprehensive Analysis
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              Deep-dive examination of your website's search and AI readiness
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
              <span style={{ color: '#10b981' }}>🎯</span>
              What Comprehensive Analysis Covers
            </h3>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.7', 
              fontSize: '1rem',
              marginBottom: '1rem'
            }}>
              Our Comprehensive Analysis goes beyond surface-level SEO checks. We examine 10+ critical pages 
              across your website, evaluating both traditional search engine factors and modern AI system 
              requirements to give you a complete picture of your digital discoverability.
            </p>
          </section>

          {/* Analysis Areas */}
          <section style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              color: '#333', 
              marginBottom: '1.5rem', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#10b981' }}>⚙️</span>
              Multi-Layer Analysis Process
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  step: '1',
                  title: 'SEO Technical Performance',
                  description: 'Page speed analysis, mobile optimization scoring, URL structure evaluation, and technical SEO health checks across your key pages.',
                  icon: '🔧'
                },
                {
                  step: '2', 
                  title: 'Content Quality Assessment',
                  description: 'Evaluation of content depth, keyword optimization, topic authority, and how well your content answers user questions and search intent.',
                  icon: '📝'
                },
                {
                  step: '3',
                  title: 'AI Bot Accessibility Testing',
                  description: 'Verification that ChatGPT, Gemini, Perplexity, and other AI systems can properly crawl, understand, and reference your content.',
                  icon: '🤖'
                },
                {
                  step: '4',
                  title: 'Schema & Structured Data Audit',
                  description: 'Complete review of your structured data implementation, schema markup coverage, and opportunities to improve AI understanding.',
                  icon: '🏗️'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#f0fdf4',
                  borderRadius: '16px',
                  border: '1px solid #bbf7d0'
                }}>
                  <div style={{
                    background: '#10b981',
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
              <span style={{ color: '#10b981' }}>📊</span>
              Your Analysis Report Includes
            </h3>
            
            <div style={{
              background: 'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #86efac'
            }}>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'Detailed scoring for 10+ key pages across multiple criteria',
                  'Page-by-page performance breakdown with color-coded status indicators',
                  'Technical SEO health assessment with specific fix recommendations',
                  'Content quality evaluation and optimization opportunities',
                  'AI bot accessibility report showing crawl and citation potential',
                  'Schema markup implementation analysis and enhancement suggestions',
                  'Competitive benchmarking against industry standards',
                  'Prioritized action items ranked by impact and implementation difficulty'
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

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
              Ready for Your Comprehensive Analysis?
            </h3>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
              Get detailed insights into your website's performance across all critical factors
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
              📊 Start Comprehensive Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAnalysisExplainer;