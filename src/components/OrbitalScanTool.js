import React, { useState } from 'react';

const OrbitalScanTool = ({ isModal = false, onClose }) => {
  const [website, setWebsite] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [email, setEmail] = useState('');

  const handleScan = async (e) => {
    e.preventDefault();
    if (!website) return;

    setIsScanning(true);
    setScanResults(null);

    try {
      // Simulate scanning process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Generate mock results
      const mockResults = {
        sssScore: Math.floor(Math.random() * 40) + 60, // 60-100
        entityClarity: Math.floor(Math.random() * 30) + 70,
        schemaMarkup: Math.floor(Math.random() * 50) + 30,
        internalLinking: Math.floor(Math.random() * 40) + 60,
        contentStructure: Math.floor(Math.random() * 35) + 65,
        recommendations: [
          'Add structured data markup for better AI understanding',
          'Improve internal linking between related topics',
          'Enhance entity definitions in content',
          'Optimize headings for question-answer format'
        ]
      };
      
      setScanResults(mockResults);
    } catch (error) {
      console.error('Scan failed:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#4CAF50';
    if (score >= 60) return '#FF9800';
    return '#f44336';
  };

  const containerStyle = {
    background: 'white',
    padding: isModal ? '2rem' : '3rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    maxWidth: isModal ? '500px' : '600px',
    margin: '0 auto',
    position: 'relative'
  };

  return (
    <div style={containerStyle}>
      {isModal && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          ✕
        </button>
      )}

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛰️</div>
        <h2 style={{ color: '#333', marginBottom: '1rem' }}>
          Free Orbital Scan
        </h2>
        <p style={{ color: '#666' }}>
          Discover how AI-ready your website is in 30 seconds
        </p>
      </div>

      {!scanResults ? (
        <form onSubmit={handleScan}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              color: '#333',
              fontWeight: 'bold'
            }}>
              Website URL *
            </label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://yourwebsite.com"
              required
              disabled={isScanning}
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #eee',
                borderRadius: '10px',
                fontSize: '1rem',
                opacity: isScanning ? 0.7 : 1
              }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              color: '#333',
              fontWeight: 'bold'
            }}>
              Email (for results) *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={isScanning}
              style={{
                width: '100%',
                padding: '1rem',
                border: '2px solid #eee',
                borderRadius: '10px',
                fontSize: '1rem',
                opacity: isScanning ? 0.7 : 1
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isScanning || !website || !email}
            style={{
              width: '100%',
              background: isScanning || !website || !email
                ? '#ccc'
                : 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: isScanning || !website || !email ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {isScanning ? (
              <>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid white',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Scanning...
              </>
            ) : (
              <>
                🚀 Start Orbital Scan
              </>
            )}
          </button>
        </form>
      ) : (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>
              Scan Complete for {website}
            </h3>
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: getScoreColor(scanResults.sssScore),
              marginBottom: '0.5rem'
            }}>
              {scanResults.sssScore}/100
            </div>
            <p style={{ color: '#666' }}>SSS Score (Semantic Strength Score)</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#333', marginBottom: '1rem' }}>Detailed Analysis:</h4>
            
            {[
              { label: 'Entity Clarity', score: scanResults.entityClarity },
              { label: 'Schema Markup', score: scanResults.schemaMarkup },
              { label: 'Internal Linking', score: scanResults.internalLinking },
              { label: 'Content Structure', score: scanResults.contentStructure }
            ].map((item, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#333' }}>{item.label}</span>
                  <span style={{ 
                    color: getScoreColor(item.score),
                    fontWeight: 'bold'
                  }}>
                    {item.score}%
                  </span>
                </div>
                <div style={{
                  background: '#f0f0f0',
                  height: '8px',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    background: getScoreColor(item.score),
                    height: '100%',
                    width: `${item.score}%`,
                    transition: 'width 0.5s ease'
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: '#333', marginBottom: '1rem' }}>Recommendations:</h4>
            <ul style={{ paddingLeft: '1.5rem', color: '#666' }}>
              {scanResults.recommendations.map((rec, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{rec}</li>
              ))}
            </ul>
          </div>

          <div style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              📧 Full detailed report sent to {email}
            </p>
            <button
              onClick={() => {
                setScanResults(null);
                setWebsite('');
                setEmail('');
              }}
              style={{
                background: '#667eea',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                marginRight: '1rem'
              }}
            >
              Scan Another Site
            </button>
            <button
              style={{
                background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer'
              }}
            >
              Get Full Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrbitalScanTool;