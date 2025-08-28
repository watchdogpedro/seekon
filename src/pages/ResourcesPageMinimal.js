import React, { useState } from 'react';

const ResourcesPageMinimal = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const createPDFContent = (title, content) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title} - SeekON AI</title>
          <style>
            body { 
              font-family: 'Segoe UI', Arial, sans-serif; 
              padding: 40px; 
              line-height: 1.6; 
              max-width: 800px; 
              margin: 0 auto;
              background: #fff;
            }
            .header { 
              background: linear-gradient(135deg, #E9424E, #00D4AA); 
              color: white; 
              padding: 30px; 
              border-radius: 10px; 
              margin-bottom: 30px; 
              text-align: center;
            }
            .header h1 { 
              margin: 0 0 10px 0; 
              font-size: 2.2rem; 
              font-weight: bold;
            }
            .header p { 
              margin: 0; 
              opacity: 0.9; 
              font-size: 1.1rem;
            }
            .content { 
              background: #f8f9fa; 
              padding: 30px; 
              border-radius: 10px; 
              margin-bottom: 30px;
              border-left: 5px solid #E9424E;
            }
            .section { 
              margin-bottom: 25px;
            }
            .section h2 { 
              color: #E9424E; 
              font-size: 1.4rem; 
              margin-bottom: 15px;
              border-bottom: 2px solid #00D4AA;
              padding-bottom: 8px;
            }
            .section h3 { 
              color: #2C3E50; 
              font-size: 1.2rem; 
              margin: 20px 0 10px 0;
            }
            .section ul, .section ol { 
              margin-left: 20px;
            }
            .section li { 
              margin-bottom: 8px;
            }
            .highlight { 
              background: #fff3cd; 
              padding: 20px; 
              border-radius: 8px; 
              border-left: 4px solid #F1C40F;
              margin: 20px 0;
            }
            .footer { 
              text-align: center; 
              color: #666; 
              font-size: 0.9rem; 
              border-top: 2px solid #eee; 
              padding-top: 20px;
              margin-top: 40px;
            }
            .controls { 
              position: fixed; 
              top: 20px; 
              right: 20px; 
              z-index: 1000;
            }
            .btn { 
              background: #E9424E; 
              color: white; 
              padding: 10px 20px; 
              border: none; 
              border-radius: 5px; 
              cursor: pointer; 
              margin-left: 10px;
              font-size: 0.9rem;
              font-weight: bold;
            }
            .btn:hover { 
              background: #d63031; 
            }
            .btn-secondary { 
              background: #666; 
            }
            .btn-secondary:hover { 
              background: #555; 
            }
            @media print { 
              .controls { display: none; } 
              .header { background: #E9424E !important; }
            }
          </style>
        </head>
        <body>
          <div class="controls">
            <button onclick="window.print()" class="btn">🖨️ Print PDF</button>
            <button onclick="window.close()" class="btn btn-secondary">✕ Close</button>
          </div>

          <div class="header">
            <h1>${title}</h1>
            <p>Advanced AI Search Optimization Guide</p>
          </div>
          
          ${content}
          
          <div class="footer">
            <p><strong>SeekON AI</strong> | Advanced AI Search Optimization | seekon.ai</p>
            <p>© 2025 SeekON. All rights reserved. Generated: ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
      </html>
    `;
  };

  const openPDF = (resourceType) => {
    let content = '';
    let title = '';

    switch (resourceType) {
      case 'entity':
        title = 'Entity Optimization Guide';
        content = `
          <div class="content">
            <div class="section">
              <h2>Understanding Entity-Based AI Search</h2>
              <p>AI systems like ChatGPT, Claude, and Perplexity don't just search for keywords—they search for <strong>entities</strong>: people, places, organizations, products, and concepts. Your business needs to be clearly defined as an entity to be discoverable.</p>
              
              <div class="highlight">
                <strong>Key Insight:</strong> AI systems need to understand WHAT your business is, not just what keywords you rank for.
              </div>

              <h3>What Are Entities?</h3>
              <ul>
                <li><strong>Organization Entity:</strong> Your company name, location, industry</li>
                <li><strong>Product/Service Entities:</strong> What you sell or provide</li>
                <li><strong>Person Entities:</strong> Key executives, founders, experts</li>
                <li><strong>Location Entities:</strong> Where you operate or serve</li>
              </ul>
            </div>

            <div class="section">
              <h2>Schema Markup Implementation</h2>
              
              <h3>Organization Schema (JSON-LD)</h3>
              <p>Add this code to your website's head section:</p>
              <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "description": "Clear description of what you do",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service"
  }
}</pre>

              <h3>Product/Service Schema</h3>
              <ul>
                <li>Use Product schema for physical products</li>
                <li>Use Service schema for services offered</li>
                <li>Include clear descriptions, pricing, availability</li>
                <li>Add review/rating markup when possible</li>
              </ul>
            </div>

            <div class="section">
              <h2>Business Profile Optimization</h2>
              
              <h3>Google Business Profile</h3>
              <ul>
                <li>Complete all profile sections (description, hours, photos)</li>
                <li>Use consistent NAP (Name, Address, Phone) across all platforms</li>
                <li>Add detailed service/product descriptions</li>
                <li>Encourage and respond to reviews</li>
              </ul>

              <h3>Social Media Consistency</h3>
              <ul>
                <li>Use identical business names across platforms</li>
                <li>Maintain consistent branding and descriptions</li>
                <li>Link all profiles together</li>
                <li>Regular posting to maintain active presence</li>
              </ul>
            </div>

            <div class="section">
              <h2>Content Structure for Entity Recognition</h2>
              
              <h3>About Page Essentials</h3>
              <ul>
                <li><strong>Clear business description:</strong> What you do in simple terms</li>
                <li><strong>Founded information:</strong> When and where you started</li>
                <li><strong>Key personnel:</strong> Founders, executives with brief bios</li>
                <li><strong>Mission/values:</strong> Why you exist and what drives you</li>
              </ul>

              <h3>Service/Product Pages</h3>
              <ul>
                <li>Lead with clear definitions of what you offer</li>
                <li>Use FAQ sections to answer common questions</li>
                <li>Include technical specifications when relevant</li>
                <li>Add customer testimonials and case studies</li>
              </ul>

              <div class="highlight">
                <strong>Implementation Checklist:</strong><br>
                ✓ Add Organization schema to homepage<br>
                ✓ Create detailed About page with entity information<br>
                ✓ Optimize Google Business Profile<br>
                ✓ Ensure consistent NAP across all platforms<br>
                ✓ Add Product/Service schema to relevant pages
              </div>
            </div>
          </div>
        `;
        break;

      case 'citation':
        title = 'AI Citation Analysis';
        content = `
          <div class="content">
            <div class="section">
              <h2>The New Citation Economy</h2>
              <p>In traditional SEO, ranking #1 on Google was the goal. In AI search, getting <strong>cited</strong> in AI responses is the new #1 ranking. When someone asks ChatGPT or Claude about your industry, does it mention your business?</p>
              
              <div class="highlight">
                <strong>Key Shift:</strong> From "ranking for keywords" to "being cited as an authority"
              </div>

              <h3>What Makes Content Citation-Worthy?</h3>
              <ul>
                <li><strong>Factual Accuracy:</strong> Information that can be verified</li>
                <li><strong>Unique Data:</strong> Original research, statistics, studies</li>
                <li><strong>Expert Opinions:</strong> Insights from recognized authorities</li>
                <li><strong>Current Information:</strong> Up-to-date facts and figures</li>
                <li><strong>Clear Attribution:</strong> Proper sourcing and crediting</li>
              </ul>
            </div>

            <div class="section">
              <h2>Authority Signals That Matter</h2>
              
              <h3>Content Authority Indicators</h3>
              <ul>
                <li><strong>Author Expertise:</strong> Clear author bios with credentials</li>
                <li><strong>Publication Date:</strong> Recent content gets priority</li>
                <li><strong>External Links:</strong> Links to authoritative sources</li>
                <li><strong>Internal Consistency:</strong> Information aligns across your site</li>
                <li><strong>Update Frequency:</strong> Regular content updates and maintenance</li>
              </ul>

              <h3>Domain Authority Factors</h3>
              <ul>
                <li>Years in business and online presence</li>
                <li>Industry certifications and partnerships</li>
                <li>Media mentions and press coverage</li>
                <li>Professional associations and memberships</li>
                <li>Customer testimonials and case studies</li>
              </ul>
            </div>

            <div class="section">
              <h2>Creating Citation-Worthy Content</h2>
              
              <h3>Content Types AI Systems Prefer</h3>
              <ul>
                <li><strong>FAQ Pages:</strong> Direct questions with authoritative answers</li>
                <li><strong>How-to Guides:</strong> Step-by-step instructions</li>
                <li><strong>Industry Reports:</strong> Data-driven insights and analysis</li>
                <li><strong>Case Studies:</strong> Real-world examples with measurable results</li>
                <li><strong>Glossaries/Definitions:</strong> Clear explanations of industry terms</li>
              </ul>

              <h3>Content Structure Best Practices</h3>
              <ul>
                <li><strong>Lead with the answer:</strong> Put key information first</li>
                <li><strong>Use clear headings:</strong> H2, H3 tags for organization</li>
                <li><strong>Include statistics:</strong> Numbers and data points</li>
                <li><strong>Add context:</strong> Explain why information matters</li>
                <li><strong>Link to sources:</strong> Credit original research</li>
              </ul>
            </div>

            <div class="section">
              <h2>Measuring Citation Success</h2>
              
              <h3>Manual Testing Methods</h3>
              <ul>
                <li>Ask AI systems questions about your industry</li>
                <li>Search for your company name + industry terms</li>
                <li>Test competitor comparisons</li>
                <li>Monitor mentions in AI-generated content</li>
              </ul>

              <h3>Key Metrics to Track</h3>
              <ul>
                <li><strong>Citation Frequency:</strong> How often you're mentioned</li>
                <li><strong>Citation Context:</strong> Positive vs. neutral mentions</li>
                <li><strong>Citation Accuracy:</strong> Correctness of information</li>
                <li><strong>Competitive Citations:</strong> Mentions vs. competitors</li>
              </ul>

              <div class="highlight">
                <strong>Citation Optimization Checklist:</strong><br>
                ✓ Create comprehensive FAQ pages<br>
                ✓ Publish original research and data<br>
                ✓ Establish clear author expertise<br>
                ✓ Maintain current, accurate information<br>
                ✓ Test AI responses regularly for mentions
              </div>
            </div>
          </div>
        `;
        break;

      case 'structured':
        title = 'Structured Data Mastery';
        content = `
          <div class="content">
            <div class="section">
              <h2>Why Structured Data Matters for AI</h2>
              <p>AI systems excel at processing structured, machine-readable data. While they can parse regular HTML, structured data using schema.org markup makes your content exponentially easier for AI to understand, categorize, and cite.</p>
              
              <div class="highlight">
                <strong>Core Principle:</strong> Structured data is like giving AI systems a map to your content instead of making them guess.
              </div>

              <h3>Schema.org Fundamentals</h3>
              <ul>
                <li><strong>JSON-LD Format:</strong> Preferred by search engines and AI</li>
                <li><strong>Schema Types:</strong> Organization, Product, Service, FAQ, etc.</li>
                <li><strong>Properties:</strong> Specific attributes like name, description, price</li>
                <li><strong>Nested Schemas:</strong> Complex relationships between entities</li>
              </ul>
            </div>

            <div class="section">
              <h2>Essential Schema Types</h2>
              
              <h3>Organization Schema</h3>
              <p>Foundation schema for any business:</p>
              <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "alternateName": ["Brand Name", "Common Name"],
  "description": "What your company does",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "foundingDate": "2020-01-01",
  "numberOfEmployees": "10-50",
  "industry": "Your Industry",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  }
}</pre>

              <h3>FAQ Schema</h3>
              <p>Critical for AI citation - directly answers questions:</p>
              <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What services do you provide?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide [specific services] including..."
    }
  }]
}</pre>
            </div>

            <div class="section">
              <h2>Advanced Schema Implementation</h2>
              
              <h3>Product Schema for E-commerce</h3>
              <ul>
                <li><strong>Basic Info:</strong> Name, description, SKU, brand</li>
                <li><strong>Pricing:</strong> Current price, currency, availability</li>
                <li><strong>Reviews:</strong> Aggregate rating and review data</li>
                <li><strong>Variants:</strong> Different sizes, colors, models</li>
              </ul>

              <h3>Service Schema for Service Businesses</h3>
              <ul>
                <li><strong>Service Type:</strong> Specific category and description</li>
                <li><strong>Provider Info:</strong> Who delivers the service</li>
                <li><strong>Area Served:</strong> Geographic coverage</li>
                <li><strong>Pricing:</strong> Cost structure or price range</li>
              </ul>

              <h3>Article/BlogPosting Schema</h3>
              <ul>
                <li><strong>Author Information:</strong> Clear attribution</li>
                <li><strong>Publication Date:</strong> When content was created</li>
                <li><strong>Article Body:</strong> Main content structure</li>
                <li><strong>Keywords:</strong> Relevant topics covered</li>
              </ul>
            </div>

            <div class="section">
              <h2>Testing and Validation</h2>
              
              <h3>Google's Rich Results Test</h3>
              <ul>
                <li>URL: search.google.com/test/rich-results</li>
                <li>Test individual pages with schema markup</li>
                <li>Identify parsing errors and warnings</li>
                <li>Preview how content appears to search engines</li>
              </ul>

              <h3>Schema.org Validator</h3>
              <ul>
                <li>URL: validator.schema.org</li>
                <li>Comprehensive validation of all schema types</li>
                <li>Detailed error reporting and suggestions</li>
                <li>Supports JSON-LD, RDFa, and Microdata</li>
              </ul>

              <div class="highlight">
                <strong>Implementation Priority Order:</strong><br>
                1. Organization schema on homepage<br>
                2. FAQ schema on key pages<br>
                3. Product/Service schema<br>
                4. Article schema for blog content<br>
                5. Review/Rating schema where applicable
              </div>
            </div>
          </div>
        `;
        break;

      case 'metrics':
        title = 'AI Search Performance Metrics';
        content = `
          <div class="content">
            <div class="section">
              <h2>Measuring Success in AI Search</h2>
              <p>Traditional SEO metrics like keyword rankings and organic traffic are still important, but AI search requires new measurement approaches. You need to track how often AI systems mention, cite, and recommend your business.</p>
              
              <div class="highlight">
                <strong>New Reality:</strong> Your content might be working perfectly for AI search even if traditional SEO metrics don't show it.
              </div>

              <h3>Why Traditional Metrics Fall Short</h3>
              <ul>
                <li><strong>Zero-Click Searches:</strong> AI provides answers without sending traffic</li>
                <li><strong>Citation vs. Clicks:</strong> Being mentioned matters more than being clicked</li>
                <li><strong>Conversational Queries:</strong> People ask different questions to AI</li>
                <li><strong>Context Matters:</strong> AI considers broader context, not just keywords</li>
              </ul>
            </div>

            <div class="section">
              <h2>Key AI Search Metrics</h2>
              
              <h3>Citation Tracking</h3>
              <ul>
                <li><strong>Direct Citations:</strong> Your domain/company mentioned by name</li>
                <li><strong>Indirect References:</strong> Your content referenced without attribution</li>
                <li><strong>Citation Context:</strong> Positive, neutral, or negative mentions</li>
                <li><strong>Citation Frequency:</strong> How often you appear in responses</li>
              </ul>

              <h3>Entity Recognition Scores</h3>
              <ul>
                <li><strong>Brand Recognition:</strong> AI correctly identifies your company</li>
                <li><strong>Product/Service Recognition:</strong> AI understands what you offer</li>
                <li><strong>Industry Association:</strong> AI correctly categorizes your business</li>
                <li><strong>Competitive Positioning:</strong> How you're positioned vs. competitors</li>
              </ul>

              <h3>Content Comprehension Metrics</h3>
              <ul>
                <li><strong>Factual Accuracy:</strong> AI correctly represents your information</li>
                <li><strong>Content Coverage:</strong> Breadth of your content AI references</li>
                <li><strong>Update Recognition:</strong> AI uses your latest information</li>
                <li><strong>Schema Utilization:</strong> AI leverages your structured data</li>
              </ul>
            </div>

            <div class="section">
              <h2>Manual Testing Methods</h2>
              
              <h3>Direct Query Testing</h3>
              <p>Test these query types across ChatGPT, Claude, Perplexity, and Google Bard:</p>
              <ul>
                <li><strong>Company Queries:</strong> "Tell me about [Your Company]"</li>
                <li><strong>Industry Queries:</strong> "Best [industry] companies in [location]"</li>
                <li><strong>Service Queries:</strong> "Who provides [your service] in [area]"</li>
                <li><strong>Problem-Solution:</strong> "How to solve [problem you address]"</li>
                <li><strong>Comparison Queries:</strong> "[Your company] vs [competitor]"</li>
              </ul>

              <h3>Query Documentation</h3>
              <ul>
                <li>Create spreadsheet of test queries</li>
                <li>Record responses from each AI system</li>
                <li>Note citations, accuracy, and context</li>
                <li>Track changes over time</li>
                <li>Share results with team monthly</li>
              </ul>
            </div>

            <div class="section">
              <h2>Automated Monitoring Tools</h2>
              
              <h3>Brand Monitoring Services</h3>
              <ul>
                <li><strong>Google Alerts:</strong> Basic mention tracking</li>
                <li><strong>Mention.com:</strong> Comprehensive brand monitoring</li>
                <li><strong>Brand24:</strong> Real-time mention tracking</li>
                <li><strong>Hootsuite Insights:</strong> Social and web monitoring</li>
              </ul>

              <h3>SEO Tools with AI Features</h3>
              <ul>
                <li><strong>SEMrush:</strong> Tracks some AI-related metrics</li>
                <li><strong>Ahrefs:</strong> Content gap analysis for AI queries</li>
                <li><strong>Moz:</strong> Entity relationship tracking</li>
                <li><strong>BrightEdge:</strong> AI content optimization</li>
              </ul>

              <h3>Custom Tracking Setup</h3>
              <ul>
                <li>Set up Google Analytics goals for AI-driven traffic</li>
                <li>Create monthly AI citation reports</li>
                <li>Track competitor citation frequency</li>
                <li>Monitor brand sentiment in AI responses</li>
              </ul>

              <div class="highlight">
                <strong>Monthly AI Audit Checklist:</strong><br>
                ✓ Test 20+ queries across 4 AI platforms<br>
                ✓ Document citation frequency and accuracy<br>
                ✓ Compare performance vs. competitors<br>
                ✓ Identify content gaps or opportunities<br>
                ✓ Update content based on AI feedback
              </div>
            </div>
          </div>
        `;
        break;

      case 'strategy':
        title = 'Future-Proof SEO Strategy';
        content = `
          <div class="content">
            <div class="section">
              <h2>The Post-Google Search Landscape</h2>
              <p>We're witnessing the biggest shift in search since Google's inception. AI-powered search is moving beyond traditional web results to provide direct answers, recommendations, and interactive assistance. Your SEO strategy must evolve to remain competitive.</p>
              
              <div class="highlight">
                <strong>The Shift:</strong> From "ranking for searches" to "powering AI responses"
              </div>

              <h3>Current Search Evolution</h3>
              <ul>
                <li><strong>Google SGE:</strong> AI-generated overviews above traditional results</li>
                <li><strong>ChatGPT Search:</strong> Direct competition to Google</li>
                <li><strong>Voice Assistants:</strong> Alexa, Siri increasingly using AI</li>
                <li><strong>Perplexity:</strong> Citation-based AI search engine</li>
                <li><strong>Microsoft Copilot:</strong> Integrated AI across all products</li>
              </ul>
            </div>

            <div class="section">
              <h2>Voice Search Optimization</h2>
              
              <h3>Conversational Content Strategy</h3>
              <ul>
                <li><strong>Natural Language:</strong> Write how people actually speak</li>
                <li><strong>Question Format:</strong> Structure content around questions</li>
                <li><strong>Local Context:</strong> Include location-specific information</li>
                <li><strong>Action-Oriented:</strong> Focus on what users want to do</li>
              </ul>

              <h3>Featured Snippet Optimization</h3>
              <ul>
                <li>Create concise, direct answers to common questions</li>
                <li>Use numbered lists and bullet points</li>
                <li>Include relevant keywords naturally</li>
                <li>Structure content with clear headings</li>
                <li>Provide comprehensive but scannable information</li>
              </ul>

              <h3>Long-Tail Conversational Keywords</h3>
              <ul>
                <li>"How do I..." questions</li>
                <li>"What's the best way to..." queries</li>
                <li>"Where can I find..." searches</li>
                <li>"Why should I..." considerations</li>
              </ul>
            </div>

            <div class="section">
              <h2>AI-Ready Content Architecture</h2>
              
              <h3>Content Hub Strategy</h3>
              <ul>
                <li><strong>Topic Clusters:</strong> Comprehensive coverage of core topics</li>
                <li><strong>Pillar Pages:</strong> Authoritative guides on main subjects</li>
                <li><strong>Supporting Content:</strong> Detailed articles on subtopics</li>
                <li><strong>Internal Linking:</strong> Clear relationships between content</li>
              </ul>

              <h3>Semantic Content Organization</h3>
              <ul>
                <li><strong>Entity-Based Structure:</strong> Organize around key business entities</li>
                <li><strong>Context-Rich Content:</strong> Provide background and relationships</li>
                <li><strong>Multilayered Information:</strong> Brief answers plus detailed explanations</li>
                <li><strong>Cross-Referenced Data:</strong> Link related concepts and topics</li>
              </ul>
            </div>

            <div class="section">
              <h2>Technical Infrastructure for AI</h2>
              
              <h3>Site Speed and Performance</h3>
              <ul>
                <li>Core Web Vitals optimization</li>
                <li>Mobile-first design approach</li>
                <li>Fast server response times</li>
                <li>Optimized images and media</li>
                <li>Clean, efficient code structure</li>
              </ul>

              <h3>Structured Data Implementation</h3>
              <ul>
                <li><strong>Comprehensive Schema:</strong> Organization, products, services, FAQs</li>
                <li><strong>JSON-LD Format:</strong> Preferred by AI systems</li>
                <li><strong>Regular Updates:</strong> Keep structured data current</li>
                <li><strong>Validation:</strong> Use Google's Rich Results Test</li>
              </ul>

              <h3>API Readiness</h3>
              <ul>
                <li>Prepare for AI systems that may access your data via APIs</li>
                <li>Consider headless CMS architecture</li>
                <li>Ensure content is accessible programmatically</li>
                <li>Plan for real-time content updates</li>
              </ul>
            </div>

            <div class="section">
              <h2>Adaptation Strategy Timeline</h2>
              
              <h3>Immediate Actions (0-3 months)</h3>
              <ul>
                <li>Add comprehensive FAQ sections to key pages</li>
                <li>Implement basic Organization and FAQ schema</li>
                <li>Start manual testing with AI platforms</li>
                <li>Optimize for featured snippets</li>
              </ul>

              <h3>Medium-term Goals (3-12 months)</h3>
              <ul>
                <li>Develop comprehensive content hub strategy</li>
                <li>Implement advanced structured data</li>
                <li>Create voice search optimized content</li>
                <li>Establish AI citation tracking system</li>
              </ul>

              <h3>Long-term Vision (12+ months)</h3>
              <ul>
                <li>Build API-ready content architecture</li>
                <li>Develop AI-first content creation process</li>
                <li>Establish thought leadership in AI search</li>
                <li>Create proprietary AI search optimization tools</li>
              </ul>

              <div class="highlight">
                <strong>Future-Proof SEO Checklist:</strong><br>
                ✓ Implement conversational content strategy<br>
                ✓ Optimize for voice and AI search<br>
                ✓ Create comprehensive structured data<br>
                ✓ Build topic cluster content architecture<br>
                ✓ Establish AI performance monitoring
              </div>
            </div>
          </div>
        `;
        break;

      default:
        title = 'AI Search Guide';
        content = '<p>Content not found.</p>';
    }

    const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes,menubar=yes,toolbar=yes');
    newWindow.document.write(createPDFContent(title, content));
    newWindow.document.close();
  };
  return (
    <div style={{ 
      padding: '120px 20px', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Page Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem' 
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: '#E9424E',
            marginBottom: '1rem'
          }}>
            Resources & Downloads
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Learn how AI systems find and use data to power search results
          </p>
        </div>

        {/* Resources List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Resource 1: Entity Optimization */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '2rem',
            boxShadow: hoveredItem === 'entity' ? '0 8px 30px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: hoveredItem === 'entity' ? 'translateY(-8px)' : 'translateY(0)'
          }}
          onMouseEnter={() => setHoveredItem('entity')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => openPDF('entity')}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #E9424E, #FF6B6B)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(233, 66, 78, 0.3)'
            }}>
              🤖
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2C3E50', marginBottom: '0.5rem' }}>
                Entity Optimization Guide
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Structure your business, products, and services for AI recognition through schema markup, business profiles, and clear entity definitions.
              </p>
            </div>
          </div>

          {/* Resource 2: AI Citation Analysis */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '2rem',
            boxShadow: hoveredItem === 'citation' ? '0 8px 30px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: hoveredItem === 'citation' ? 'translateY(-8px)' : 'translateY(0)'
          }}
          onMouseEnter={() => setHoveredItem('citation')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => openPDF('citation')}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #00D4AA, #26C6DA)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(0, 212, 170, 0.3)'
            }}>
              📊
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2C3E50', marginBottom: '0.5rem' }}>
                AI Citation Analysis
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Learn what makes content citation-worthy for AI systems through authority signals, fact-based content, and credible source presentation.
              </p>
            </div>
          </div>

          {/* Resource 3: Structured Data Mastery */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '2rem',
            boxShadow: hoveredItem === 'structured' ? '0 8px 30px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: hoveredItem === 'structured' ? 'translateY(-8px)' : 'translateY(0)'
          }}
          onMouseEnter={() => setHoveredItem('structured')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => openPDF('structured')}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #5DADE2, #3498DB)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(93, 173, 226, 0.3)'
            }}>
              🔍
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2C3E50', marginBottom: '0.5rem' }}>
                Structured Data Mastery
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Advanced schema markup specifically for AI comprehension including JSON-LD implementation, FAQ schema, and organization markup.
              </p>
            </div>
          </div>

          {/* Resource 4: AI Search Performance Metrics */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '2rem',
            boxShadow: hoveredItem === 'metrics' ? '0 8px 30px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: hoveredItem === 'metrics' ? 'translateY(-8px)' : 'translateY(0)'
          }}
          onMouseEnter={() => setHoveredItem('metrics')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => openPDF('metrics')}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #F1C40F, #F39C12)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(241, 196, 15, 0.3)'
            }}>
              ⚡
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2C3E50', marginBottom: '0.5rem' }}>
                AI Search Performance Metrics
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Measure and track your AI search visibility through citation tracking, AI mention monitoring, and entity recognition scores.
              </p>
            </div>
          </div>

          {/* Resource 5: Future-Proof SEO Strategy */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '2rem',
            boxShadow: hoveredItem === 'strategy' ? '0 8px 30px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: hoveredItem === 'strategy' ? 'translateY(-8px)' : 'translateY(0)'
          }}
          onMouseEnter={() => setHoveredItem('strategy')}
          onMouseLeave={() => setHoveredItem(null)}
          onClick={() => openPDF('strategy')}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              flexShrink: 0,
              boxShadow: '0 4px 15px rgba(155, 89, 182, 0.3)'
            }}>
              🚀
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', color: '#2C3E50', marginBottom: '0.5rem' }}>
                Future-Proof SEO Strategy
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Prepare your website for the post-Google search landscape through voice search optimization, conversational content, and AI-ready architecture.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResourcesPageMinimal;