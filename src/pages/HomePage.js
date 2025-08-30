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
            <h1>
              <span style={{ fontSize: '3.5em', fontWeight: 'bold' }}>AI</span> <span className="highlight">Searchable</span><br />
              <span style={{ fontSize: '1.2em', color: '#667eea', fontWeight: '500', marginTop: '0.5rem', display: 'block' }}>revolutionize your company with content creation</span>
            </h1>
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
        padding: '4rem 0', 
        background: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '3rem',
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
            gap: '2rem'
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
          <div style={{ marginTop: '3rem' }}>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#64748b', 
              marginBottom: '2rem' 
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