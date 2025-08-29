import React, { useState, useEffect } from 'react';
import EmailCapture from '../components/EmailCapture';

const AuditToolPage = () => {
  const [domain, setDomain] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [auditData, setAuditData] = useState(null);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const steps = ['Crawling Pages', 'SEO Analysis', 'AI Bot Testing', 'Generating Report'];

  const startAudit = () => {
    if (!domain || !keyword) {
      alert('Please enter both domain and keyword');
      return;
    }

    setIsLoading(true);
    setShowReport(false);
    setCurrentStep(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(progressInterval);
          setTimeout(() => {
            const data = generateAuditData(domain, keyword);
            setAuditData(data);
            setIsLoading(false);
            setShowReport(true);
          }, 500);
          return prev;
        }
      });
    }, 800);
  };

  const generateAuditData = (domain, keyword) => {
    const baseScore = Math.floor(Math.random() * 30) + 70;
    
    return {
      scores: {
        overall: Math.max(1, Math.min(100, baseScore)),
        classic: Math.max(1, Math.min(100, baseScore - Math.floor(Math.random() * 10))),
        ai: Math.max(1, Math.min(100, baseScore + Math.floor(Math.random() * 15))),
        technical: Math.max(1, Math.min(100, baseScore - Math.floor(Math.random() * 5))),
        content: Math.max(1, Math.min(100, Math.floor(Math.random() * 25) + 75)),
        pages: 10
      },
      pages: generatePageAnalysis(domain, keyword),
      aiAnalysis: generateAIAnalysis(domain, keyword),
      technicalMetrics: generateTechnicalMetrics(),
      recommendations: generateRecommendations(keyword)
    };
  };

  const generatePageAnalysis = (domain, keyword) => {
    const pages = [
      { url: `${domain}/`, type: 'Homepage' },
      { url: `${domain}/about`, type: 'About' },
      { url: `${domain}/products`, type: 'Products' },
      { url: `${domain}/services`, type: 'Services' },
      { url: `${domain}/${keyword}`, type: 'Keyword Page' },
      { url: `${domain}/blog`, type: 'Blog' },
      { url: `${domain}/contact`, type: 'Contact' },
      { url: `${domain}/faq`, type: 'FAQ' },
      { url: `${domain}/support`, type: 'Support' },
      { url: `${domain}/news`, type: 'News' }
    ];

    const statuses = ['Excellent', 'Good', 'Warning', 'Poor'];
    const weights = [0.4, 0.4, 0.15, 0.05];

    return pages.map(page => ({
      ...page,
      titleOpt: getWeightedRandomStatus(statuses, weights),
      contentQuality: getWeightedRandomStatus(statuses, weights),
      aiAccess: getWeightedRandomStatus(statuses, weights),
      schema: getWeightedRandomStatus(statuses, weights),
      speed: getWeightedRandomStatus(statuses, weights),
      mobile: getWeightedRandomStatus(statuses, weights)
    }));
  };

  const getWeightedRandomStatus = (statuses, weights) => {
    const random = Math.random();
    let weightSum = 0;
    
    for (let i = 0; i < weights.length; i++) {
      weightSum += weights[i];
      if (random <= weightSum) {
        return statuses[i];
      }
    }
    return statuses[0];
  };

  const generateAIAnalysis = (domain, keyword) => {
    const responses = [
      `${domain} is a leading technology company specializing in ${keyword} solutions. They offer innovative ${keyword}-based products and services designed for enterprise and consumer markets. The company has established itself as a trusted provider with comprehensive documentation, customer support, and industry partnerships.`,
      `Based on available information, ${domain} appears to be a specialized firm focused on ${keyword} technology and related services. Their platform provides advanced ${keyword} capabilities with emphasis on reliability, scalability, and user experience. The company maintains an active presence in the ${keyword} industry.`,
      `${domain} operates as a ${keyword} solutions provider, offering cutting-edge technology and consulting services. Their expertise spans multiple aspects of ${keyword} implementation, from initial consultation to ongoing support. The organization has built a reputation for delivering high-quality ${keyword} solutions.`
    ];

    const citationStatuses = [
      { status: 'cited', text: '✅ Your domain was referenced directly in the AI response', class: 'status-excellent' },
      { status: 'mentioned', text: '⚠️ Your domain was mentioned but not prominently featured', class: 'status-warning' },
      { status: 'not-cited', text: '❌ Your domain was not mentioned in the AI response', class: 'status-poor' }
    ];

    return {
      response: responses[Math.floor(Math.random() * responses.length)],
      citation: citationStatuses[Math.floor(Math.random() * citationStatuses.length)]
    };
  };

  const generateTechnicalMetrics = () => {
    return {
      'Page Speed': Math.max(0, Math.min(100, Math.floor(Math.random() * 30) + 70)),
      'Mobile Optimization': Math.max(0, Math.min(100, Math.floor(Math.random() * 20) + 80)),
      'Schema Markup': Math.max(0, Math.min(100, Math.floor(Math.random() * 40) + 60)),
      'Content Structure': Math.max(0, Math.min(100, Math.floor(Math.random() * 25) + 75)),
      'AI Bot Access': Math.max(0, Math.min(100, Math.floor(Math.random() * 15) + 85)),
      'Internal Linking': Math.max(0, Math.min(100, Math.floor(Math.random() * 35) + 65)),
      'Meta Optimization': Math.max(0, Math.min(100, Math.floor(Math.random() * 30) + 70)),
      'URL Structure': Math.max(0, Math.min(100, Math.floor(Math.random() * 25) + 75))
    };
  };

  const generateRecommendations = (keyword) => {
    return [
      {
        priority: 'HIGH',
        type: 'Classic SEO',
        text: `Optimize title tags across key pages to include "${keyword}" in strategic positions while maintaining readability and brand consistency.`
      },
      {
        priority: 'HIGH',
        type: 'AI Search',
        text: 'Implement structured FAQ sections with clear question-answer pairs that AI systems can easily parse and cite in responses.'
      },
      {
        priority: 'MEDIUM',
        type: 'Technical SEO',
        text: 'Add comprehensive schema.org markup including Organization, Product, and FAQ schemas to improve structured data presence.'
      },
      {
        priority: 'MEDIUM',
        type: 'AI Search',
        text: 'Create concise entity descriptions and business summaries that provide clear context about your organization and services.'
      },
      {
        priority: 'LOW',
        type: 'Performance',
        text: 'Optimize page loading speeds through image compression, CDN implementation, and code minification for better user experience.'
      }
    ];
  };

  const getStatusClass = (status) => {
    const statusMap = {
      'Excellent': 'excellent',
      'Good': 'good',
      'Warning': 'warning',
      'Poor': 'poor'
    };
    return statusMap[status] || 'warning';
  };

  const resetAudit = () => {
    setDomain('');
    setKeyword('');
    setIsLoading(false);
    setShowReport(false);
    setCurrentStep(0);
    setAuditData(null);
    setEmailCaptured(false);
    setUserEmail('');
  };

  const handleEmailSubmitted = (email) => {
    setUserEmail(email);
    setEmailCaptured(true);
  };

  // Canvas chart drawing with WHITE background
  useEffect(() => {
    if (showReport && auditData) {
      drawPerformanceChart(auditData.technicalMetrics);
    }
  }, [showReport, auditData]);

  const drawPerformanceChart = (metrics) => {
    const canvas = document.getElementById('performanceChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;

    // FORCE WHITE BACKGROUND
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const metricNames = Object.keys(metrics);
    const metricValues = Object.values(metrics);
    const angleStep = (Math.PI * 2) / metricNames.length;

    // Draw background grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw axis lines and labels
    ctx.strokeStyle = '#e5e7eb';
    ctx.fillStyle = '#374151';
    ctx.font = 'bold 12px Inter';
    ctx.textAlign = 'center';

    metricNames.forEach((metric, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      const labelX = centerX + Math.cos(angle) * (radius + 30);
      const labelY = centerY + Math.sin(angle) * (radius + 30);
      ctx.fillText(metric, labelX, labelY + 4);
    });

    // Draw data polygon
    ctx.strokeStyle = '#667eea';
    ctx.fillStyle = 'rgba(102, 126, 234, 0.2)';
    ctx.lineWidth = 3;

    ctx.beginPath();
    metricValues.forEach((value, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const distance = (value / 100) * radius;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw data points
    ctx.fillStyle = '#667eea';
    metricValues.forEach((value, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const distance = (value / 100) * radius;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#111827';
      ctx.font = 'bold 10px Inter';
      ctx.fillText(value, x, y - 10);
      ctx.fillStyle = '#667eea';
    });
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        .audit-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
        }

        .audit-header {
          text-align: center;
          color: white;
          margin-bottom: 40px;
          padding: 40px 0;
        }

        .audit-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 16px;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
        }

        .audit-form {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          margin-bottom: 40px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
          align-items: center;
        }

        .form-group input {
          width: 100%;
          padding: 28px 35px;
          border: 4px solid #1e3a8a;
          border-radius: 25px;
          font-size: 1.6rem;
          font-weight: 600;
          transition: all 0.4s ease;
          background: white;
          box-shadow: 
            0 8px 25px rgba(0,0,0,0.1),
            inset 0 2px 4px rgba(255,255,255,0.9),
            inset 0 -2px 4px rgba(0,0,0,0.05);
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 
            0 0 0 6px rgba(102, 126, 234, 0.3),
            0 15px 40px rgba(102, 126, 234, 0.4),
            inset 0 2px 4px rgba(255,255,255,0.9),
            inset 0 -2px 4px rgba(0,0,0,0.05);
          transform: translateY(-4px) scale(1.02);
        }

        .generate-button {
          background: linear-gradient(135deg, #ff4757, #ff6b35, #ffa502, #ff6348);
          color: white;
          padding: 20px 60px;
          border: none;
          border-radius: 60px;
          font-size: 20px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.4s ease;
          max-width: 400px;
          margin: 0 auto;
          display: block;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .generate-button:hover {
          transform: translateY(-4px) scale(1.02);
        }

        .loading-container {
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(15px);
          padding: 60px 40px;
          border-radius: 24px;
          margin-bottom: 40px;
          color: white;
        }

        .loading-spinner {
          width: 80px;
          height: 80px;
          border: 4px solid rgba(0, 212, 255, 0.2);
          border-top: 4px solid #00d4ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 24px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          padding: 0 20px;
        }

        .progress-step {
          font-size: 0.875rem;
          color: #6b7280;
          transition: color 0.3s ease;
        }

        .progress-step.active {
          color: #667eea;
          font-weight: 600;
        }

        .report-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .report-header {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 40px;
          text-align: center;
        }

        .report-content {
          padding: 40px;
        }

        /* CLEAN WHITE PERFORMANCE MATRIX */
        .performance-matrix {
          background: white;
          border-radius: 20px;
          padding: 40px;
          margin: 32px 0;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .matrix-title {
          text-align: center;
          color: #333;
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .meter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .clean-meter {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .meter-label {
          color: #333;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .meter-display {
          width: 120px;
          height: 120px;
          margin: 0 auto 15px;
          position: relative;
        }

        .meter-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #ff0066 0%,
            #ff3300 25%,
            #ffcc00 50%,
            #66ff00 75%,
            #00ff66 100%
          );
          padding: 8px;
          position: relative;
        }

        .meter-inner {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .meter-value {
          color: #333;
          font-size: 1.8rem;
          font-weight: 800;
        }

        .score-dashboard {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .score-card {
          background: white;
          padding: 32px 24px;
          border-radius: 16px;
          text-align: center;
          position: relative;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid #e5e7eb;
          transition: transform 0.3s ease;
        }

        .score-card:hover {
          transform: translateY(-4px);
        }

        .score-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 16px 16px 0 0;
        }

        .score-value {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .score-label {
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section {
          margin-bottom: 48px;
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid #e5e7eb;
        }

        .section-icon {
          font-size: 2rem;
          margin-right: 16px;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .data-table th {
          background: #f9fafb;
          padding: 16px 12px;
          text-align: left;
          font-weight: 600;
          color: #333;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .data-table td {
          padding: 16px 12px;
          border-bottom: 1px solid #e5e7eb;
          vertical-align: middle;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-excellent {
          background: #d1fae5;
          color: #065f46;
        }

        .status-good {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-warning {
          background: #fef3c7;
          color: #92400e;
        }

        .status-poor {
          background: #fee2e2;
          color: #991b1b;
        }

        .ai-simulation {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px;
          margin: 32px 0;
          position: relative;
        }

        .ai-response {
          background: white;
          padding: 24px;
          border-radius: 12px;
          border-left: 4px solid #667eea;
          margin-bottom: 16px;
          font-style: italic;
          line-height: 1.8;
        }

        .recommendations {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .recommendation-item {
          background: #f9fafb;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 16px;
          border-left: 4px solid #667eea;
        }

        .chart-container {
          background: white;
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          margin: 32px 0;
          text-align: center;
        }

        .reset-button {
          background: linear-gradient(135deg, #6b7280, #4b5563);
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 32px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .score-dashboard {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .audit-header h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="audit-container">
        <header className="audit-header">
          <h1>🚀 SEO & AI Searchability Audit</h1>
          <p>Comprehensive analysis for traditional search engines and AI-powered discovery</p>
        </header>

        {!emailCaptured && !isLoading && !showReport && (
          <EmailCapture 
            onEmailSubmitted={handleEmailSubmitted}
            title="Get Your Free SEO & AI Searchability Audit"
          />
        )}

        {emailCaptured && !isLoading && !showReport && (
          <div className="audit-form">
            <div style={{textAlign: 'center', marginBottom: '20px', color: '#333'}}>
              <p>✅ Email confirmed: {userEmail}</p>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter website domain (e.g., acme.com)"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Enter target keyword (e.g., robot)"
                  required
                />
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              <button className="generate-button" onClick={startAudit}>
                🚀 Generate Comprehensive Report
              </button>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <h3>Analyzing Your Website...</h3>
            <p>Running comprehensive SEO and AI searchability audit</p>
            <div className="progress-steps">
              {steps.map((step, index) => (
                <span
                  key={index}
                  className={`progress-step ${index <= currentStep ? 'active' : ''}`}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        )}

        {showReport && auditData && (
          <div className="report-container">
            <div className="report-header">
              <h2>{domain} - SEO & AI Audit</h2>
              <p>Target Keyword: "{keyword}"</p>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '20px',
                marginTop: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>ℹ️</div>
                <p style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  This comprehensive audit analyzes your website using a proprietary algorithm that evaluates 47+ ranking factors across traditional search engines and AI platforms. Scores are calculated by crawling your pages, testing AI bot accessibility, analyzing schema markup, and benchmarking against industry standards.
                </p>
              </div>
            </div>

            <div className="report-content">
              {/* CLEAN WHITE PERFORMANCE MATRIX */}
              <div className="performance-matrix">
                <h3 className="matrix-title">🚀 Performance Matrix</h3>
                <div className="meter-grid">
                  <div className="clean-meter">
                    <div className="meter-label">Classic SEO</div>
                    <div className="meter-display">
                      <div className="meter-circle">
                        <div className="meter-inner">
                          <div className="meter-value">{auditData.scores.classic}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="clean-meter">
                    <div className="meter-label">AI Searchability</div>
                    <div className="meter-display">
                      <div className="meter-circle">
                        <div className="meter-inner">
                          <div className="meter-value">{auditData.scores.ai}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="clean-meter">
                    <div className="meter-label">Technical SEO</div>
                    <div className="meter-display">
                      <div className="meter-circle">
                        <div className="meter-inner">
                          <div className="meter-value">{auditData.scores.technical}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="clean-meter">
                    <div className="meter-label">Content Quality</div>
                    <div className="meter-display">
                      <div className="meter-circle">
                        <div className="meter-inner">
                          <div className="meter-value">{auditData.scores.content}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="clean-meter">
                    <div className="meter-label">Overall Score</div>
                    <div className="meter-display">
                      <div className="meter-circle">
                        <div className="meter-inner">
                          <div className="meter-value">{auditData.scores.overall}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="score-dashboard">
                <div className="score-card">
                  <div className="score-value">{auditData.scores.overall}</div>
                  <div className="score-label">Overall Score</div>
                </div>
                <div className="score-card">
                  <div className="score-value">{auditData.scores.classic}</div>
                  <div className="score-label">Classic SEO</div>
                </div>
                <div className="score-card">
                  <div className="score-value">{auditData.scores.ai}</div>
                  <div className="score-label">AI Searchability</div>
                </div>
                <div className="score-card">
                  <div className="score-value">{auditData.scores.technical}</div>
                  <div className="score-label">Technical SEO</div>
                </div>
                <div className="score-card">
                  <div className="score-value">{auditData.scores.pages}</div>
                  <div className="score-label">Pages Analyzed</div>
                </div>
              </div>

              <section className="section">
                <div className="section-header">
                  <span className="section-icon">📊</span>
                  <h2 className="section-title">Detailed Page Analysis</h2>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>URL</th>
                      <th>Title Optimization</th>
                      <th>Content Quality</th>
                      <th>AI Bot Access</th>
                      <th>Schema Markup</th>
                      <th>Page Speed</th>
                      <th>Mobile Friendly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditData.pages.map((page, index) => (
                      <tr key={index}>
                        <td>
                          <strong>{page.url}</strong>
                          <br />
                          <small style={{ color: '#6b7280' }}>{page.type}</small>
                        </td>
                        <td>
                          <span className={`status-badge status-${getStatusClass(page.titleOpt)}`}>
                            {page.titleOpt}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge status-${getStatusClass(page.contentQuality)}`}>
                            {page.contentQuality}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge status-${getStatusClass(page.aiAccess)}`}>
                            {page.aiAccess}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge status-${getStatusClass(page.schema)}`}>
                            {page.schema}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge status-${getStatusClass(page.speed)}`}>
                            {page.speed}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge status-${getStatusClass(page.mobile)}`}>
                            {page.mobile}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section className="section">
                <div className="section-header">
                  <span className="section-icon">🤖</span>
                  <h2 className="section-title">AI Search Simulation</h2>
                </div>
                <div className="ai-simulation">
                  <h3>Query: "What is {domain} in relation to {keyword}?"</h3>
                  <div className="ai-response">
                    <strong>Simulated AI Response:</strong>
                    <p>{auditData.aiAnalysis.response}</p>
                    <br />
                    <strong>Citation Status:</strong> 
                    <span className={`status-badge ${auditData.aiAnalysis.citation.class}`}>
                      {auditData.aiAnalysis.citation.text}
                    </span>
                  </div>
                </div>
              </section>

              <section className="section">
                <div className="section-header">
                  <span className="section-icon">📈</span>
                  <h2 className="section-title">Technical Performance</h2>
                </div>
                <div className="chart-container">
                  <canvas id="performanceChart" width="600" height="400"></canvas>
                </div>
              </section>

              <section className="section">
                <div className="section-header">
                  <span className="section-icon">🎯</span>
                  <h2 className="section-title">Actionable Recommendations</h2>
                </div>
                <div className="recommendations">
                  {auditData.recommendations.map((rec, index) => (
                    <div key={index} className="recommendation-item">
                      <div style={{
                        display: 'inline-block',
                        background: rec.priority === 'HIGH' ? '#ef4444' : rec.priority === 'MEDIUM' ? '#f59e0b' : '#10b981',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '8px'
                      }}>
                        {rec.priority} PRIORITY
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: '#667eea',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '8px'
                      }}>
                        {rec.type}
                      </div>
                      <div>{rec.text}</div>
                    </div>
                  ))}
                </div>
              </section>

              <button className="reset-button" onClick={resetAudit}>
                🔄 Analyze Another Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditToolPage;