import React from 'react';

const CosmoBriefsExplainer = ({ isOpen, onClose }) => {
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
          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📋</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>
              How Cosmo Briefs Work
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              AI-generated content briefs optimized for LLM retrieval
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
              <span style={{ color: '#06b6d4' }}>🎯</span>
              What Cosmo Briefs Do
            </h3>
            <p style={{ 
              color: '#666', 
              lineHeight: '1.7', 
              fontSize: '1rem',
              marginBottom: '1rem'
            }}>
              Cosmo Briefs are AI-generated content blueprints that bridge the gap between traditional SEO content 
              and what AI systems actually need to understand, cite, and recommend your business. Each brief is 
              custom-crafted to maximize your content's visibility in both search engines and AI responses.
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
              <span style={{ color: '#06b6d4' }}>⚙️</span>
              The Brief Creation Process
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  step: '1',
                  title: 'Topic Research & AI Query Analysis',
                  description: 'We analyze what questions people actually ask AI systems about your industry, then identify content gaps where your expertise could be the definitive answer.',
                  icon: '🔍'
                },
                {
                  step: '2', 
                  title: 'Entity-Focused Outline Creation',
                  description: 'Each brief includes clear entity definitions, relationship mapping, and structured content that AI systems can easily parse and understand for accurate citations.',
                  icon: '🗺️'
                },
                {
                  step: '3',
                  title: 'Question Framework Development',
                  description: 'We provide specific questions your content should answer, formatted in the exact way AI systems prefer to find and extract information for responses.',
                  icon: '❓'
                },
                {
                  step: '4',
                  title: 'Source & Validation Recommendations',
                  description: 'Strategic guidance on authoritative sources to reference, internal linking structure, and credibility signals that boost AI system confidence in your content.',
                  icon: '📚'
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#f0fdff',
                  borderRadius: '16px',
                  border: '1px solid #cffafe'
                }}>
                  <div style={{
                    background: '#06b6d4',
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
              <span style={{ color: '#06b6d4' }}>📊</span>
              Each Cosmo Brief Includes
            </h3>
            
            <div style={{
              background: 'linear-gradient(135deg, #f0fdff 0%, #cffafe 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid #a5f3fc'
            }}>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'AI-optimized topic focus with semantic keyword clusters',
                  'Question-answer frameworks that AI systems prefer',
                  'Entity relationship mapping for your industry',
                  'Structured content outline with clear headings hierarchy',
                  'Internal linking recommendations to boost topic authority',
                  'Schema markup suggestions for enhanced AI understanding',
                  'Source credibility guidelines and citation strategies',
                  'Content optimization checklist for maximum AI visibility'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#333'
                  }}>
                    <span style={{ 
                      color: '#06b6d4', 
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

export default CosmoBriefsExplainer;