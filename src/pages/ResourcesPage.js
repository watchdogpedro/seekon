import React from 'react';

const ResourcesPage = () => {
  const resources = [
    {
      id: 1,
      title: "The Death of Traditional SEO",
      description: "A comprehensive study on how AI search is replacing keyword-based optimization strategies.",
      image: "📈",
      downloadUrl: "#",
      category: "Market Analysis",
      date: "2025",
      fileType: "PDF"
    },
    {
      id: 2,
      title: "LLM Citation Patterns Study",
      description: "Research on how Large Language Models cite and reference content in their responses.",
      image: "🤖",
      downloadUrl: "#",
      category: "Technical Research",
      date: "2024",
      fileType: "PDF"
    },
    {
      id: 3,
      title: "AI Search Ranking Factors",
      description: "The new metrics that matter for visibility in ChatGPT, Claude, and Gemini responses.",
      image: "🎯",
      downloadUrl: "#",
      category: "Best Practices",
      date: "2024",
      fileType: "PDF"
    },
    {
      id: 4,
      title: "Entity Optimization Guide",
      description: "Complete handbook for optimizing your content for entity-based AI understanding.",
      image: "🏢",
      downloadUrl: "#",
      category: "Implementation",
      date: "2024",
      fileType: "PDF"
    },
    {
      id: 5,
      title: "Schema Markup for AI",
      description: "Advanced structured data strategies specifically designed for LLM comprehension.",
      image: "🔗",
      downloadUrl: "#",
      category: "Technical Guide",
      date: "2024",
      fileType: "PDF"
    },
    {
      id: 6,
      title: "AI Search Case Studies",
      description: "Real-world examples of companies that successfully transitioned to AI-first visibility.",
      image: "📊",
      downloadUrl: "#",
      category: "Case Studies",
      date: "2024",
      fileType: "PDF"
    }
  ];

  const handleDownload = (resource) => {
    // Open PDF in new window for viewing/printing
    if (resource.pdfUrl) {
      window.open(resource.pdfUrl, '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes,menubar=yes,toolbar=yes');
    } else {
      // For demo purposes, create a simple PDF viewer
      const pdfContent = `
        <html>
          <head>
            <title>${resource.title} - SeekON AI</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; max-width: 800px; margin: 0 auto; }
              h1 { color: #E9424E; border-bottom: 3px solid #00D4AA; padding-bottom: 10px; }
              .header { background: linear-gradient(135deg, #E9424E, #00D4AA); color: white; padding: 20px; border-radius: 10px; margin-bottom: 30px; }
              .content { background: #f8f9fa; padding: 30px; border-radius: 10px; margin-bottom: 30px; }
              .footer { text-align: center; color: #666; font-size: 0.9em; }
              @media print { .no-print { display: none; } }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>${resource.title}</h1>
              <p><strong>Category:</strong> ${resource.category} | <strong>Date:</strong> ${resource.date}</p>
            </div>
            
            <div class="content">
              <p><strong>Description:</strong> ${resource.description}</p>
              
              <h2>Overview</h2>
              <p>This comprehensive guide provides detailed insights into ${resource.title.toLowerCase()}. Our research team has compiled the most current and actionable information available in the industry.</p>
              
              <h2>Key Findings</h2>
              <ul>
                <li>AI search behavior is fundamentally different from traditional search</li>
                <li>Entity-based optimization outperforms keyword-based approaches</li>
                <li>Structured data and schema markup are critical for AI visibility</li>
                <li>Citation-worthy content drives AI recommendation algorithms</li>
              </ul>
              
              <h2>Implementation Steps</h2>
              <ol>
                <li><strong>Audit Current State:</strong> Assess your website's AI readiness</li>
                <li><strong>Optimize Entity Definitions:</strong> Clearly define your business, products, and services</li>
                <li><strong>Implement Structured Data:</strong> Add comprehensive schema markup</li>
                <li><strong>Create Citation-Worthy Content:</strong> Develop authoritative, fact-based content</li>
                <li><strong>Monitor AI Visibility:</strong> Track mentions in AI responses</li>
              </ol>
              
              <h2>Measuring Success</h2>
              <p>Success in AI search optimization is measured by:</p>
              <ul>
                <li>Frequency of citations in AI responses</li>
                <li>Accuracy of AI-generated information about your business</li>
                <li>Improved entity recognition across AI platforms</li>
                <li>Increased qualified traffic from AI-powered searches</li>
              </ul>
            </div>
            
            <div class="footer">
              <p><strong>SeekON AI</strong> | Advanced AI Search Optimization | seekon.ai</p>
              <p class="no-print">
                <button onclick="window.print()" style="background: #E9424E; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">🖨️ Print This Document</button>
                <button onclick="window.close()" style="background: #666; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">✕ Close Window</button>
              </p>
            </div>
          </body>
        </html>
      `;
      
      const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes,menubar=yes,toolbar=yes');
      newWindow.document.write(pdfContent);
      newWindow.document.close();
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--cosmic-red) 0%, var(--space-teal) 50%, var(--sky-blue) 100%)',
      minHeight: '100vh',
      paddingTop: '2rem'
    }}>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        
        {/* TEST BOX - CENTER */}
        <div style={{
          background: 'red',
          border: '5px solid blue',
          padding: '50px',
          margin: '50px auto',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
          maxWidth: '400px'
        }}>
          TEST BOX - If you can see this, the page is updating correctly
        </div>

        {/* Header Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-3xl)',
          marginBottom: 'var(--space-2xl)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'var(--deep-space)',
            marginBottom: 'var(--space-lg)'
          }}>
            📚 <span className="text-cosmic">Resource Library</span>
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'var(--nebula-gray)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Free studies, guides, and research papers on AI search optimization. 
            Download our latest insights on how to succeed in the LLM-powered discovery era.
          </p>

          {/* Floating decorative elements */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '2rem',
            opacity: '0.3'
          }} className="animate-float">
            🚀
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            fontSize: '1.5rem',
            opacity: '0.3'
          }} className="animate-orbit">
            ⭐
          </div>
        </div>

        {/* Resources Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-2xl)'
        }}>
          {resources.map((resource) => (
            <div key={resource.id} style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-lg)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(233, 66, 78, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              
              {/* Resource Item Layout */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-md)'
              }}>
                
                {/* Left: 100px Square Graphic */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, var(--cosmic-red), var(--space-teal))',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)'
                }} className="animate-float">
                  {resource.image}
                </div>

                {/* Right: Content */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100px'
                }}>
                  
                  {/* Title and Description */}
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--deep-space)',
                      marginBottom: 'var(--space-xs)'
                    }}>
                      {resource.title}
                    </h3>
                    
                    <p style={{
                      color: 'var(--nebula-gray)',
                      fontSize: '0.9rem',
                      lineHeight: '1.4'
                    }}>
                      {resource.description}
                    </p>
                  </div>

                  {/* Bottom: Category, Date, and Download Button */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'var(--space-xs)'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: 'var(--space-xs)',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        background: 'var(--cosmic-red)',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>
                        {resource.category}
                      </span>
                      
                      <span style={{
                        color: 'var(--nebula-gray)',
                        fontSize: '0.75rem'
                      }}>
                        {resource.date} • {resource.fileType}
                      </span>
                    </div>

                    <button 
                      onClick={() => handleDownload(resource)}
                      style={{
                        background: 'linear-gradient(135deg, var(--space-teal), var(--sky-blue))',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 4px 15px rgba(0, 212, 170, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      📥 Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(15px)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-2xl)',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: 'var(--space-lg)'
          }}>
            Need Custom Research?
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: 'var(--space-xl)',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto var(--space-xl)'
          }}>
            Looking for specific insights or custom analysis for your industry? 
            Our team can create tailored research reports and implementation guides.
          </p>

          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn btn-primary btn-lg"
            style={{ margin: '0 auto' }}
          >
            🚀 Request Custom Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;