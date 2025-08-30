import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrbitalScanExplainer from '../components/OrbitalScanExplainer';
import CosmoBriefsExplainer from '../components/CosmoBriefsExplainer';
import HyperdriveMonitorExplainer from '../components/HyperdriveMonitorExplainer';
import ComprehensiveAnalysisExplainer from '../components/ComprehensiveAnalysisExplainer';
import AISearchSimulationExplainer from '../components/AISearchSimulationExplainer';
import ActionableInsightsExplainer from '../components/ActionableInsightsExplainer';

const HomePage = () => {
  const [showOrbitalExplainer, setShowOrbitalExplainer] = useState(false);
  const [showCosmoBriefsExplainer, setShowCosmoBriefsExplainer] = useState(false);
  const [showHyperdriveExplainer, setShowHyperdriveExplainer] = useState(false);
  const [showComprehensiveAnalysisExplainer, setShowComprehensiveAnalysisExplainer] = useState(false);
  const [showAISearchSimulationExplainer, setShowAISearchSimulationExplainer] = useState(false);
  const [showActionableInsightsExplainer, setShowActionableInsightsExplainer] = useState(false);

  const openOrbitalExplainer = () => setShowOrbitalExplainer(true);
  const closeOrbitalExplainer = () => setShowOrbitalExplainer(false);
  const openCosmoBriefsExplainer = () => setShowCosmoBriefsExplainer(true);
  const closeCosmoBriefsExplainer = () => setShowCosmoBriefsExplainer(false);
  const openHyperdriveExplainer = () => setShowHyperdriveExplainer(true);
  const closeHyperdriveExplainer = () => setShowHyperdriveExplainer(false);
  const openComprehensiveAnalysisExplainer = () => setShowComprehensiveAnalysisExplainer(true);
  const closeComprehensiveAnalysisExplainer = () => setShowComprehensiveAnalysisExplainer(false);
  const openAISearchSimulationExplainer = () => setShowAISearchSimulationExplainer(true);
  const closeAISearchSimulationExplainer = () => setShowAISearchSimulationExplainer(false);
  const openActionableInsightsExplainer = () => setShowActionableInsightsExplainer(true);
  const closeActionableInsightsExplainer = () => setShowActionableInsightsExplainer(false);

  return (
    <>
      
      {/* Full-Width Banner Image */}
      <section className="hero-banner">
        <img 
          src="/images/hero-seekon-jetsons.png" 
          alt="SeekON AI-powered SEO platform - Retro-futuristic AI search optimization"
          className="banner-image"
        />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="atomic-logo-container" style={{ 
              position: 'relative', 
              display: 'inline-block', 
              marginBottom: '2rem' 
            }}>
              {/* Atomic Rings Animation */}
              <div className="atomic-rings" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                pointerEvents: 'none'
              }}>
                <div className="ring ring-1" style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  border: '3px solid rgba(102, 126, 234, 0.3)',
                  borderRadius: '50%',
                  top: '-100px',
                  left: '-100px',
                  animation: 'rotate-clockwise 20s linear infinite'
                }}></div>
                <div className="ring ring-2" style={{
                  position: 'absolute',
                  width: '150px',
                  height: '150px',
                  border: '2px solid rgba(118, 75, 162, 0.4)',
                  borderRadius: '50%',
                  top: '-75px',
                  left: '-75px',
                  animation: 'rotate-counter-clockwise 15s linear infinite'
                }}></div>
                <div className="ring ring-3" style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  border: '2px solid rgba(0, 212, 170, 0.5)',
                  borderRadius: '50%',
                  top: '-50px',
                  left: '-50px',
                  animation: 'rotate-clockwise 12s linear infinite'
                }}></div>
                
                {/* Floating Atoms */}
                <div className="atom atom-1" style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#FFD700',
                  borderRadius: '50%',
                  top: '-4px',
                  right: '-104px',
                  animation: 'orbit-1 20s linear infinite',
                  boxShadow: '0 0 10px rgba(255, 215, 0, 0.6)'
                }}></div>
                <div className="atom atom-2" style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#FF6B6B',
                  borderRadius: '50%',
                  top: '-3px',
                  right: '-78px',
                  animation: 'orbit-2 15s linear infinite',
                  boxShadow: '0 0 8px rgba(255, 107, 107, 0.6)'
                }}></div>
                <div className="atom atom-3" style={{
                  position: 'absolute',
                  width: '5px',
                  height: '5px',
                  backgroundColor: '#4ECDC4',
                  borderRadius: '50%',
                  top: '-2.5px',
                  right: '-52.5px',
                  animation: 'orbit-3 12s linear infinite',
                  boxShadow: '0 0 6px rgba(78, 205, 196, 0.6)'
                }}></div>
              </div>

              {/* Main Logo Text */}
              <h1 style={{ position: 'relative', zIndex: 1, margin: 0 }}>
                <div className="ai-searchable-logo" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <span className="ai-text" style={{ 
                    fontSize: '3.5em', 
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    position: 'relative',
                    animation: 'pulse-glow 3s ease-in-out infinite'
                  }}>
                    AI
                    {/* AI Accent Decorations */}
                    <span style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-15px',
                      fontSize: '0.3em',
                      color: '#FFD700',
                      animation: 'twinkle 2s ease-in-out infinite'
                    }}>✨</span>
                  </span>
                  
                  <span className="searchable-text" style={{ 
                    fontSize: '3.5em',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #00D4AA 0%, #667eea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative',
                    animation: 'pulse-glow 3s ease-in-out infinite 0.5s'
                  }}>
                    Searchable
                    {/* Searchable Accent Decorations */}
                    <span style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-10px',
                      fontSize: '0.25em',
                      color: '#4ECDC4',
                      animation: 'float 4s ease-in-out infinite'
                    }}>🚀</span>
                  </span>
                </div>
                
                <div style={{ 
                  fontSize: '1.2em', 
                  color: '#667eea', 
                  fontWeight: '500', 
                  marginTop: '1rem', 
                  display: 'block',
                  textAlign: 'center',
                  opacity: '0.9'
                }}>
                  revolutionize your company with content creation
                </div>
              </h1>
            </div>
            <p>
              <span style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#667eea' }}>SeekON</span> tunes your site for LLMs—so ChatGPT, Gemini, and search copilots actually surface you.
            </p>
            
            <div>
              <Link to="/audit-tool" className="btn btn-primary btn-lg contact-button" style={{ textDecoration: 'none' }}>
                🚀 Run <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>FREE</span> Orbital Scan
              </Link>
              <button className="btn btn-secondary btn-lg">
                ▶️ Watch 90-sec Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#2c3e50',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            🚀 How <span style={{ color: '#FF6B6B', fontSize: '1.3em', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>SeekON</span> Launches Your Visibility 🌟
          </h2>
          
          <div className="features-grid">
            <div 
              className="feature-card" 
              onClick={openOrbitalExplainer}
              style={{ 
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="feature-icon" style={{ fontSize: '8rem', marginBottom: '1rem', animation: 'none' }}>🛰️</div>
              <h3>Orbital Scan</h3>
              <p>
                Our AI crawls your site and analyzes entity clarity, content structure, 
                internal linking, and schema markup.
              </p>
              <div className="text-cosmic" style={{
                marginTop: 'var(--space-lg)',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-xs)'
              }}>
                <span>Click to learn how it works</span>
                <span>🚀</span>
              </div>
            </div>
            
            <div 
              className="feature-card"
              onClick={openCosmoBriefsExplainer}
              style={{ 
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="feature-icon" style={{ fontSize: '8rem', marginBottom: '1rem', animation: 'none' }}>🛸</div>
              <h3>Cosmo Briefs</h3>
              <p>
                AI-generated content briefs with entities, questions, sources, and 
                structured outlines optimized for LLM retrieval.
              </p>
              <div className="text-teal" style={{
                marginTop: 'var(--space-lg)',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-xs)'
              }}>
                <span>Click to learn how it works</span>
                <span>🌟</span>
              </div>
            </div>
            
            <div 
              className="feature-card"
              onClick={openHyperdriveExplainer}
              style={{ 
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="feature-icon" style={{ fontSize: '8rem', marginBottom: '1rem', animation: 'none' }}>🌌</div>
              <h3>Hyperdrive Monitor</h3>
              <p>
                Continuous tracking of freshness, internal links, rankings, and 
                AI mention monitoring across LLM platforms.
              </p>
              <div className="text-blue" style={{
                marginTop: 'var(--space-lg)',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-xs)'
              }}>
                <span>Click to learn how it works</span>
                <span>⭐</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Process Flow Diagram Section */}
      <section style={{ 
        padding: '2rem 0', 
        background: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem',
            color: '#2c3e50',
            fontWeight: 'bold'
          }}>
            🛰️ How Our Orbital Scan Works
          </h2>
          
          <div className="process-flow" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {/* Connecting Arrow */}
            <div className="connecting-arrow" style={{
              position: 'absolute',
              top: '50%',
              left: '12%',
              right: '12%',
              height: '4px',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              zIndex: 1,
              borderRadius: '2px',
              boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
            }}>
              {/* Arrow head */}
              <div style={{
                position: 'absolute',
                right: '-12px',
                top: '-8px',
                width: 0,
                height: 0,
                borderLeft: '16px solid #764ba2',
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent'
              }}></div>
            </div>

            {/* Step 1: Crawling Pages */}
            <div className="process-step" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              width: '22%',
              minWidth: '200px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '3px solid #667eea',
              position: 'relative',
              zIndex: 2,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                background: '#667eea',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ 
                color: '#667eea', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: '700'
              }}>
                Crawling Pages
              </h3>
              <p style={{ 
                color: '#64748b', 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                margin: 0
              }}>
                Our AI scanner discovers up to 10 pages of your website, mapping structure, content, and technical elements
              </p>
            </div>

            {/* Step 2: SEO Analysis */}
            <div className="process-step" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              width: '22%',
              minWidth: '200px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '3px solid #10b981',
              position: 'relative',
              zIndex: 2,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                background: '#10b981',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ 
                color: '#10b981', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: '700'
              }}>
                SEO Analysis
              </h3>
              <p style={{ 
                color: '#64748b', 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                margin: 0
              }}>
                Traditional SEO factors analyzed: titles, content quality, schema markup, technical performance, and structure
              </p>
            </div>

            {/* Step 3: AI Bot Testing */}
            <div className="process-step" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              width: '22%',
              minWidth: '200px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '3px solid #f59e0b',
              position: 'relative',
              zIndex: 2,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                background: '#f59e0b',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ 
                color: '#f59e0b', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: '700'
              }}>
                AI Bot Testing
              </h3>
              <p style={{ 
                color: '#64748b', 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                margin: 0
              }}>
                We simulate how ChatGPT, Gemini, and Perplexity interact with your content and test citation rates
              </p>
            </div>

            {/* Step 4: Report Generation */}
            <div className="process-step" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              width: '22%',
              minWidth: '200px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '3px solid #8b5cf6',
              position: 'relative',
              zIndex: 2,
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                background: '#8b5cf6',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                4
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ 
                color: '#8b5cf6', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: '700'
              }}>
                Generating Report
              </h3>
              <p style={{ 
                color: '#64748b', 
                fontSize: '0.9rem', 
                lineHeight: '1.5',
                margin: 0
              }}>
                Comprehensive scoring across 4 dimensions with prioritized recommendations for both SEO and AI optimization
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ marginTop: '2rem' }}>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#64748b', 
              marginBottom: '1rem' 
            }}>
              Get your complete AI readiness analysis in under 30 seconds
            </p>
            <Link 
              to="/audit-tool" 
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }}
            >
              🚀 Start Your <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>FREE</span> Orbital Scan
            </Link>
          </div>
        </div>
      </section>

      {/* Orbital Scan Explainer Modal */}
      <OrbitalScanExplainer 
        isOpen={showOrbitalExplainer} 
        onClose={closeOrbitalExplainer} 
      />

      {/* Cosmo Briefs Explainer Modal */}
      <CosmoBriefsExplainer 
        isOpen={showCosmoBriefsExplainer} 
        onClose={closeCosmoBriefsExplainer} 
      />

      {/* Hyperdrive Monitor Explainer Modal */}
      <HyperdriveMonitorExplainer 
        isOpen={showHyperdriveExplainer} 
        onClose={closeHyperdriveExplainer} 
      />

      {/* Comprehensive Analysis Explainer Modal */}
      <ComprehensiveAnalysisExplainer 
        isOpen={showComprehensiveAnalysisExplainer} 
        onClose={closeComprehensiveAnalysisExplainer} 
      />

      {/* AI Search Simulation Explainer Modal */}
      <AISearchSimulationExplainer 
        isOpen={showAISearchSimulationExplainer} 
        onClose={closeAISearchSimulationExplainer} 
      />

      {/* Actionable Insights Explainer Modal */}
      <ActionableInsightsExplainer 
        isOpen={showActionableInsightsExplainer} 
        onClose={closeActionableInsightsExplainer} 
      />
    </>
  );
};

export default HomePage;