import React, { useState } from 'react';

const KeySciencePage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const keyPoints = [
    {
      icon: '🤖',
      title: 'AEO vs. SEO: The New Game',
      description: 'AEO optimizes for AI engines and conversational questions, while SEO targets traditional keyword searches.',
      detailed: 'Answer Engine Optimization (AEO) represents a fundamental shift in how we approach digital visibility. While traditional SEO focuses on ranking for specific keywords in search results, AEO optimizes content to be the source that AI engines like ChatGPT, Gemini, and Perplexity cite when answering user questions. This means creating content that directly answers questions people ask AI assistants, structuring information clearly, and ensuring your expertise is easily digestible by artificial intelligence. The goal shifts from "being found" to "being cited as the authoritative answer."'
    },
    {
      icon: '💬',
      title: 'How People Really Talk to AI',
      description: 'Users ask full questions like "what are the best yoga studios for men over 40?" instead of typing keywords.',
      detailed: 'The conversational nature of AI interactions fundamentally changes how people search for information. Instead of typing fragmented keywords like "yoga studio men 40+", users engage in natural conversations: "I\'m a 40-year-old man looking to start yoga. What are some beginner-friendly studios in my area that cater to men?" This shift requires content creators to anticipate and answer complete questions rather than just targeting keyword phrases. Your content needs to sound like a knowledgeable friend explaining something, not a keyword-stuffed article.'
    },
    {
      icon: '🎯',
      title: 'Your New Optimization Mission',
      description: 'Optimize pages to answer specific questions your audience asks, not just target keywords.',
      detailed: 'Your optimization strategy needs a complete reframe. Instead of building content around "solar panels cost" as a keyword, create content that answers "How much do solar panels actually cost for a 2,000 square foot home in 2024?" This means conducting question research, understanding your audience\'s pain points, and structuring content as comprehensive answers. Use tools like AnswerThePublic, analyze customer service inquiries, and monitor social media discussions to discover the real questions your audience asks.'
    },
    {
      icon: '🔧',
      title: 'Same Foundation, New Focus',
      description: 'AEO builds on existing SEO signals - you\'re evolving your strategy, not starting over.',
      detailed: 'The good news is that AEO doesn\'t require throwing away your SEO work. Core ranking factors like quality content, site speed, mobile optimization, and authoritative backlinks remain crucial. However, the focus shifts toward expertise, authoritativeness, and trustworthiness (E-A-T) signals that AI engines can easily verify. This includes clear author credentials, comprehensive source citations, structured data markup, and content that demonstrates deep subject matter expertise. Think of AEO as SEO 2.0 - evolved for the AI era.'
    },
    {
      icon: '🏗️',
      title: 'Structure is Your Superpower',
      description: 'AI engines love well-organized content with clear headings and logical flow.',
      detailed: 'AI engines excel at parsing well-structured content. Use hierarchical headings (H1, H2, H3) to create a logical information architecture. Implement bullet points, numbered lists, and clear section breaks. Each section should flow logically to the next, building a comprehensive answer. Consider using summary boxes, key takeaway sections, and consistent formatting that makes it easy for AI to extract and cite specific information. The clearer your information hierarchy, the more likely AI engines will understand and reference your content.'
    },
    {
      icon: '📝',
      title: 'The Question-Answer Formula',
      description: 'Structure each page around one question: clear heading + organized answer below.',
      detailed: 'The most effective AEO pages follow a simple formula: pose a specific question as your main heading, then provide a comprehensive, well-organized answer. Start with a direct answer summary, followed by detailed explanations, examples, and supporting evidence. For instance, "How Long Does SEO Take to Work?" followed by a immediate answer ("3-6 months for noticeable results"), then detailed explanation of factors, timeline expectations, and case studies. This structure makes it incredibly easy for AI engines to extract and cite your information.'
    },
    {
      icon: '❓',
      title: 'FAQ Sections Are Gold',
      description: 'FAQs provide perfect question-answer pairs that AI engines easily understand and cite.',
      detailed: 'FAQ sections are AEO goldmines because they naturally create the question-answer format that AI engines love. But not all FAQs are created equal. Effective AEO FAQs use real questions from customers, provide detailed answers (not just one-sentence responses), and implement FAQ schema markup to help AI understand the content structure. Consider creating separate FAQ pages for different topics, and ensure each answer could standalone as valuable information. This format perfectly matches how people interact with AI assistants.'
    },
    {
      icon: '🔍',
      title: 'Discover Your AI Mentions',
      description: 'Ask ChatGPT: "What questions lead AI to mention [my website]?" to find current visibility.',
      detailed: 'Understanding your current AI visibility is crucial for AEO strategy. Regularly audit how AI engines perceive and cite your content by asking direct questions about your industry and monitoring when your brand appears. Try queries like "What are the best resources for learning [your topic]?" or "Who are the leading experts in [your field]?" across multiple AI platforms. Document which content gets cited, which questions trigger mentions of your brand, and which competitors appear more frequently. This intelligence guides your content optimization priorities.'
    },
    {
      icon: '💡',
      title: 'Uncover New Opportunities',
      description: 'Use ChatGPT to discover new questions people ask about your industry or brand.',
      detailed: 'AI assistants are goldmines for content opportunity discovery. Ask ChatGPT: "What are the most common questions people ask about [your industry]?" or "What would someone new to [your field] want to know?" Analyze the response patterns to identify content gaps in your current strategy. You can also use AI to brainstorm question variations, explore adjacent topics, and understand how your audience might phrase their inquiries differently. This research reveals untapped content opportunities that your competitors might be missing.'
    },
    {
      icon: '🎖️',
      title: 'The Ultimate Goal',
      description: 'Create content that answers questions so well that AI engines cite you as their trusted source.',
      detailed: 'The pinnacle of AEO success is becoming the go-to source that AI engines consistently cite when answering questions in your domain. This requires creating content that is not just comprehensive, but definitively authoritative. Combine original research, expert insights, detailed examples, and clear explanations in ways that demonstrate unmatched expertise. When AI engines can reliably extract accurate, well-explained information from your content, you become their preferred source. This builds compound authority - each citation reinforces your position as the trusted expert in your field.'
    }
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <style>{`
        .speech-bubble:before {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 30px;
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 15px solid;
          border-top-color: inherit;
          transform: rotate(20deg);
        }
        .speech-bubble:after {
          content: '✨';
          position: absolute;
          top: -15px;
          right: -10px;
          font-size: 1.2rem;
          animation: sparkle 2s infinite;
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
      `}</style>
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem', 
              color: 'white'
            }}>
              The <span style={{color: '#00d4ff'}}>Key Science</span>
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              color: 'rgba(255, 255, 255, 0.9)', 
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Master the fundamentals of Answer Engine Optimization (AEO) and transform 
              how AI discovers and recommends your content
            </p>
          </div>
          
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem'
          }}>
            {/* Decorative Background Elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50px',
              fontSize: '2rem',
              opacity: 0.3,
              animation: 'sparkle 3s infinite'
            }}>🚀</div>
            <div style={{
              position: 'absolute',
              top: '100px',
              right: '30px',
              fontSize: '1.5rem',
              opacity: 0.4,
              animation: 'sparkle 2.5s infinite'
            }}>⭐</div>
            <div style={{
              position: 'absolute',
              bottom: '50px',
              left: '20px',
              fontSize: '1.8rem',
              opacity: 0.3,
              animation: 'sparkle 4s infinite'
            }}>💫</div>
            <div style={{
              position: 'absolute',
              bottom: '200px',
              right: '60px',
              fontSize: '1.3rem',
              opacity: 0.4,
              animation: 'sparkle 3.5s infinite'
            }}>🌟</div>

            {/* Professional Interactive Cards */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 10
            }}>
              {keyPoints.map((point, index) => {
                const colors = [
                  { bg: '#667eea', accent: '#4f46e5' },
                  { bg: '#06b6d4', accent: '#0891b2' },
                  { bg: '#10b981', accent: '#059669' },
                  { bg: '#f59e0b', accent: '#d97706' },
                  { bg: '#8b5cf6', accent: '#7c3aed' },
                  { bg: '#ef4444', accent: '#dc2626' },
                  { bg: '#ec4899', accent: '#db2777' },
                  { bg: '#84cc16', accent: '#65a30d' },
                  { bg: '#f97316', accent: '#ea580c' },
                  { bg: '#6366f1', accent: '#4f46e5' }
                ];
                
                const colorScheme = colors[index % colors.length];
                
                const isExpanded = expandedCard === index;
                
                return (
                  <div 
                    key={index} 
                    className="professional-card"
                    onClick={() => toggleCard(index)}
                    style={{
                      background: 'white',
                      borderRadius: '16px',
                      boxShadow: isExpanded 
                        ? `0 20px 60px ${colorScheme.bg}60` 
                        : '0 4px 20px rgba(0,0,0,0.08)',
                      border: `2px solid ${colorScheme.bg}`,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      transform: isExpanded ? 'scale(2)' : 'scale(1)',
                      zIndex: isExpanded ? 1000 : 1,
                      gridColumn: isExpanded ? 'span 2' : 'span 1',
                      minHeight: isExpanded ? '600px' : 'auto'
                    }}
                    onMouseEnter={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.transform = 'translateY(-8px) scale(1)';
                        e.currentTarget.style.boxShadow = `0 12px 40px ${colorScheme.bg}40`;
                        e.currentTarget.querySelector('.card-content').style.background = `${colorScheme.bg}08`;
                        e.currentTarget.querySelector('.card-header').style.background = colorScheme.accent;
                        e.currentTarget.querySelector('.card-description').style.opacity = '1';
                        e.currentTarget.querySelector('.card-description').style.maxHeight = '200px';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                        e.currentTarget.querySelector('.card-content').style.background = 'white';
                        e.currentTarget.querySelector('.card-header').style.background = colorScheme.bg;
                        e.currentTarget.querySelector('.card-description').style.opacity = '0.7';
                        e.currentTarget.querySelector('.card-description').style.maxHeight = '60px';
                      }
                    }}
                  >
                    <div 
                      className="card-header"
                      style={{
                        background: colorScheme.bg,
                        color: 'white',
                        padding: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ 
                        fontSize: '2.5rem',
                        flexShrink: 0,
                        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))'
                      }}>
                        {point.icon}
                      </div>
                      
                      <div>
                        <h3 style={{ 
                          fontSize: '1.25rem', 
                          fontWeight: '700',
                          margin: 0,
                          lineHeight: '1.2'
                        }}>
                          {point.title}
                        </h3>
                        <div style={{
                          background: 'rgba(255,255,255,0.2)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          marginTop: '0.5rem',
                          display: 'inline-block'
                        }}>
                          AEO Strategy #{index + 1}
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className="card-content"
                      style={{
                        padding: '1.5rem',
                        background: 'white',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <p 
                        className="card-description"
                        style={{ 
                          lineHeight: '1.6',
                          color: '#4b5563',
                          margin: 0,
                          fontSize: isExpanded ? '1.1rem' : '0.95rem',
                          opacity: isExpanded ? '1' : '0.7',
                          maxHeight: isExpanded ? 'none' : '60px',
                          overflow: isExpanded ? 'visible' : 'hidden',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isExpanded ? point.detailed : point.description}
                      </p>
                      
                      <div style={{
                        marginTop: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: colorScheme.bg,
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}>
                        <span>{isExpanded ? 'Click to Collapse' : 'Click to Expand'}</span>
                        <span style={{ 
                          transition: 'transform 0.3s ease',
                          display: 'inline-block',
                          transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'
                        }}>{isExpanded ? '↓' : '→'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '3rem',
            borderRadius: '20px',
            textAlign: 'center',
            marginTop: '4rem',
            maxWidth: '800px',
            margin: '4rem auto 0'
          }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>
              Ready to Master AEO? 🚀
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9, fontSize: '1.1rem' }}>
              Put this key science into action with our Orbital Scan. 
              See exactly how AI-ready your website is right now.
            </p>
            <button className="btn btn-primary" style={{ 
              background: 'white', 
              color: '#667eea',
              fontSize: '1.1rem',
              padding: '1rem 2rem'
            }}>
              🛰️ Run Your Free Orbital Scan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeySciencePage;