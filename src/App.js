import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Full-Width Banner Image */}
      <section className="hero-banner">
        <img 
          src="/images/hero-seekon-jetsons.png" 
          alt="SeekON AI-powered SEO platform"
          className="banner-image"
        />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Be found by <span className="highlight">people and AI</span>
            </h1>
            <p>
              SeekON tunes your site for LLMs—so ChatGPT, Gemini, and search copilots actually surface you.
            </p>
            
            <div>
              <button className="btn btn-primary">
                🚀 Run Free Orbital Scan
              </button>
              <button className="btn btn-secondary">
                ▶️ Watch 90-sec Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>How <span style={{color: '#667eea'}}>SeekON</span> Works</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛰️</div>
              <h3>Orbital Scan</h3>
              <p>
                Our AI crawls your site and analyzes entity clarity, content structure, 
                internal linking, and schema markup.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Cosmo Briefs</h3>
              <p>
                AI-generated content briefs with entities, questions, sources, and 
                structured outlines optimized for LLM retrieval.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Hyperdrive Monitor</h3>
              <p>
                Continuous tracking of freshness, internal links, rankings, and 
                AI mention monitoring across LLM platforms.
              </p>
            </div>
          </div>

          {/* Control Room Image */}
          <img 
            src="/images/control-room-dashboard.png" 
            alt="Control room dashboard"
            style={{
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              display: 'block',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;