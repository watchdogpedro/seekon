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
      {/* Spacing for dropdown menu */}
      <div style={{ height: '100px', backgroundColor: 'transparent' }}></div>
      
      {/* Full-Width Banner Image */}
      <section className="hero-banner">
        <img 
          src="/images/banner 4.png" 
          alt="SeekON AI-powered SEO platform"
          className="banner-image"
        />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Be found by <span className="highlight">people and AI</span><br />
              <span className="jetpack-text">Jetpack Your Rankings</span>
            </h1>
            <p>
              SeekON tunes your site for LLMs—so ChatGPT, Gemini, and search copilots actually surface you.
            </p>
            
            <div>
              <Link to="/audit-tool" className="btn btn-primary btn-lg contact-button" style={{ textDecoration: 'none' }}>
                🚀 Run Free Orbital Scan
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
            🚀 How <span style={{ color: '#FF6B6B' }}>SeekON</span> Launches Your Visibility 🌟
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