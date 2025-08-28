import React, { useState } from 'react';

const DownloadableResources = ({ title = "Resources & Downloads", resources = [] }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleDownload = (resource) => {
    // Open PDF in new window for viewing/printing
    if (resource.pdfUrl) {
      window.open(resource.pdfUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    } else if (resource.pdfPath) {
      // For local PDF files
      window.open(`/${resource.pdfPath}`, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    }
  };

  const defaultResources = [
    {
      id: 'ai-methodology',
      icon: '🛰️',
      title: 'AI Searchability Methodology',
      description: 'Complete technical guide to our 4-stage evaluation process for AI-ready websites.',
      pdfPath: 'documents/AI_Searchability_Methodology.pdf',
      color: 'var(--cosmic-red)'
    },
    {
      id: 'audit-guide',
      icon: '📊',
      title: 'Orbital Scan Guide',
      description: 'How our proprietary audit works and what each score means for your business.',
      pdfPath: 'documents/Orbital_Scan_Guide.pdf',
      color: 'var(--space-teal)'
    },
    {
      id: 'ai-optimization',
      icon: '🚀',
      title: 'AI Optimization Checklist',
      description: 'Essential steps to prepare your website for AI-powered search engines.',
      pdfPath: 'documents/AI_Optimization_Checklist.pdf',
      color: 'var(--sky-blue)'
    },
    {
      id: 'case-studies',
      icon: '💼',
      title: 'Success Case Studies',
      description: 'Real results from businesses that optimized for AI search visibility.',
      pdfPath: 'documents/Success_Case_Studies.pdf',
      color: 'var(--atomic-gold)'
    }
  ];

  const resourcesToShow = resources.length > 0 ? resources : defaultResources;

  return (
    <section style={{ 
      padding: 'var(--space-3xl) 0',
      background: 'transparent'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--deep-space)',
            marginBottom: 'var(--space-lg)'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--nebula-gray)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Download our comprehensive guides and resources to master AI-powered search optimization.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--space-lg)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {resourcesToShow.map((resource) => (
            <div
              key={resource.id}
              style={{
                background: 'linear-gradient(135deg, white 0%, var(--stardust-gray) 100%)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                boxShadow: hoveredItem === resource.id 
                  ? '0 15px 35px rgba(0,0,0,0.2)' 
                  : 'var(--shadow-md)',
                border: `2px solid ${hoveredItem === resource.id ? resource.color : 'transparent'}`,
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: hoveredItem === resource.id 
                  ? 'translateY(-8px) scale(1.02)' 
                  : 'translateY(0) scale(1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredItem(resource.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleDownload(resource)}
            >
              {/* Animated background effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle, ${resource.color}15 0%, transparent 70%)`,
                transform: hoveredItem === resource.id 
                  ? 'translate(25%, 25%) scale(1)' 
                  : 'translate(-25%, -25%) scale(0.5)',
                transition: 'all 0.6s ease',
                pointerEvents: 'none'
              }}></div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-lg)',
                position: 'relative',
                zIndex: 2
              }}>
                {/* Icon section */}
                <div style={{
                  minWidth: '80px',
                  height: '80px',
                  background: hoveredItem === resource.id 
                    ? `linear-gradient(135deg, ${resource.color}, ${resource.color}dd)`
                    : 'linear-gradient(135deg, var(--stardust-gray), #E9ECEF)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  boxShadow: hoveredItem === resource.id 
                    ? `0 8px 20px ${resource.color}40`
                    : '0 4px 15px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  transform: hoveredItem === resource.id ? 'rotate(10deg)' : 'rotate(0deg)'
                }}>
                  {resource.icon}
                </div>

                {/* Content section */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: hoveredItem === resource.id ? resource.color : 'var(--deep-space)',
                    marginBottom: 'var(--space-sm)',
                    transition: 'color 0.3s ease'
                  }}>
                    {resource.title}
                  </h3>
                  <p style={{
                    color: 'var(--nebula-gray)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-md)'
                  }}>
                    {resource.description}
                  </p>
                  
                  {/* Download indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)',
                    color: resource.color,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    opacity: hoveredItem === resource.id ? 1 : 0.7,
                    transition: 'opacity 0.3s ease'
                  }}>
                    <span>📄</span>
                    <span>Click to open PDF</span>
                    {hoveredItem === resource.id && (
                      <span style={{
                        animation: 'float 2s ease-in-out infinite',
                        marginLeft: 'var(--space-xs)'
                      }}>→</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover shine effect */}
              {hoveredItem === resource.id && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'shine 0.8s ease-out',
                  pointerEvents: 'none'
                }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div style={{
          textAlign: 'center',
          marginTop: 'var(--space-3xl)',
          padding: 'var(--space-xl)',
          background: 'linear-gradient(135deg, var(--cosmic-red) 0%, var(--space-teal) 100%)',
          borderRadius: 'var(--radius-lg)',
          color: 'white'
        }}>
          <h3 style={{ marginBottom: 'var(--space-md)', fontSize: '1.5rem' }}>
            Need Custom AI Optimization?
          </h3>
          <p style={{ marginBottom: 'var(--space-lg)', opacity: 0.9 }}>
            Get personalized recommendations with our comprehensive Orbital Scan audit.
          </p>
          <a href="/audit-tool" style={{
            background: 'white',
            color: 'var(--cosmic-red)',
            padding: 'var(--space-md) var(--space-xl)',
            borderRadius: 'var(--radius-full)',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            🛰️ Start Your Orbital Scan
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadableResources;