import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '2rem', 
              color: '#333',
              textAlign: 'center'
            }}>
              About <span style={{color: '#667eea'}}>SeekON</span>
            </h1>
            
            <div style={{ 
              fontSize: '1.2rem', 
              lineHeight: '1.8', 
              color: '#555',
              marginBottom: '3rem'
            }}>
              <p style={{ marginBottom: '2rem' }}>
                SeekON represents the evolution of search optimization for the AI era. 
                Built by a team with over <strong>30 years of experience</strong> in technology 
                marketing and branding, we understand how digital discovery is fundamentally changing.
              </p>
              
              <p style={{ marginBottom: '2rem' }}>
                Our deep expertise spans critical industries where precision and authority matter most:
              </p>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr', 
                gap: '2rem',
                margin: '2rem 0'
              }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '10px',
                  textAlign: 'center',
                  height: 'fit-content'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧬</div>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Life Sciences</h3>
                  <p>Regulatory compliance, research publications, and medical device marketing</p>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '10px',
                  textAlign: 'center',
                  height: 'fit-content'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏭</div>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Manufacturing</h3>
                  <p>Industrial automation, precision equipment, and technical specifications</p>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '10px',
                  textAlign: 'center',
                  height: 'fit-content'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💾</div>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Semiconductor</h3>
                  <p>Chip design, fabrication processes, and cutting-edge technology</p>
                </div>
              </div>
              
              <p style={{ marginBottom: '2rem' }}>
                We've witnessed the evolution from directory listings to Google dominance, 
                and now we're pioneering the next frontier: <strong>LLM-optimized content</strong> 
                that ensures your expertise is discovered by both human searchers and AI systems.
              </p>
              
              <p style={{ marginBottom: '2rem' }}>
                Traditional SEO focused on keywords and backlinks. SeekON focuses on 
                <strong> entity clarity, semantic relationships, and knowledge graph representation</strong> 
                — the building blocks of how AI systems understand and surface information.
              </p>
              
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                marginTop: '3rem'
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Ready to be found in the AI era?</h3>
                <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                  Let our three decades of marketing expertise guide your transition to LLM-optimized content.
                </p>
                <button className="btn btn-primary">
                  🚀 Start Your Orbital Scan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;