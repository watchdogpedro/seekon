import React from 'react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      company: "MedTech Innovations",
      industry: "Life Sciences",
      challenge: "Complex medical device specifications were invisible to AI search tools",
      solution: "Implemented entity-rich content architecture and structured schema markup",
      results: {
        metric1: "+245% LLM Citations",
        metric2: "+89% Organic Traffic", 
        metric3: "3x More Qualified Leads"
      },
      timeline: "4 months",
      quote: "SeekON transformed how physicians discover our products. We're now the go-to source for AI-powered medical research.",
      author: "Dr. Sarah Chen, CMO"
    },
    {
      company: "Precision Manufacturing Corp",
      industry: "Manufacturing Automation", 
      challenge: "Technical specifications buried in PDFs, invisible to search engines and AI",
      solution: "Created semantic content clusters linking products, applications, and specifications",
      results: {
        metric1: "+156% Entity Coverage",
        metric2: "+92% Technical Queries",
        metric3: "2.5x Engineering Engagement"
      },
      timeline: "3 months",
      quote: "Engineers now find our exact specifications instantly. Our technical content finally works as hard as our products do.",
      author: "Mike Rodriguez, VP Engineering"
    },
    {
      company: "ChipFlow Semiconductor",
      industry: "Semiconductor",
      challenge: "Cutting-edge chip designs lost in competitive landscape",
      solution: "Built comprehensive knowledge graph connecting processes, materials, and applications", 
      results: {
        metric1: "+189% Research Mentions",
        metric2: "+134% Partnership Inquiries",
        metric3: "5x Industry Recognition"
      },
      timeline: "6 months",
      quote: "We went from invisible to indispensable in the AI research community. SeekON made our innovations discoverable.",
      author: "Dr. Raj Patel, CTO"
    }
  ];

  return (
    <div style={{ background: 'white', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem', 
              color: '#333'
            }}>
              Success <span style={{color: '#667eea'}}>Stories</span>
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              See how industry leaders are winning in the LLM era
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '3rem'
          }}>
            {caseStudies.map((study, index) => (
              <div key={index} style={{
                background: index % 2 === 0 ? 'white' : '#f8f9fa',
                padding: '3rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ 
                    display: 'inline-block',
                    background: '#667eea',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    {study.industry}
                  </div>
                  
                  <h2 style={{ 
                    fontSize: '2rem', 
                    marginBottom: '1rem', 
                    color: '#333' 
                  }}>
                    {study.company}
                  </h2>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Challenge:</h4>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>{study.challenge}</p>
                    
                    <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Solution:</h4>
                    <p style={{ color: '#666' }}>{study.solution}</p>
                  </div>
                  
                  <div style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    border: '1px solid #eee'
                  }}>
                    <blockquote style={{ 
                      fontStyle: 'italic', 
                      color: '#555', 
                      marginBottom: '1rem',
                      fontSize: '1.1rem'
                    }}>
                      "{study.quote}"
                    </blockquote>
                    <cite style={{ color: '#667eea', fontWeight: 'bold' }}>
                      — {study.author}
                    </cite>
                  </div>
                </div>
                
                <div>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ marginBottom: '2rem' }}>Results in {study.timeline}</h3>
                    
                    <div style={{ 
                      display: 'grid', 
                      gap: '1rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                          {study.results.metric1.split(' ')[0]}
                        </div>
                        <div style={{ opacity: 0.9 }}>
                          {study.results.metric1.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                      
                      <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                          {study.results.metric2.split(' ')[0]}
                        </div>
                        <div style={{ opacity: 0.9 }}>
                          {study.results.metric2.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                      
                      <div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                          {study.results.metric3.split(' ')[0]}
                        </div>
                        <div style={{ opacity: 0.9 }}>
                          {study.results.metric3.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '3rem',
            borderRadius: '20px',
            textAlign: 'center',
            marginTop: '4rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to be our next success story?</h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Join industry leaders who are already winning in the LLM era
            </p>
            <button className="btn btn-primary" style={{ background: 'white', color: '#667eea' }}>
              🚀 Start Your Transformation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;