import React, { useState, useEffect, useRef } from 'react';

const KeySciencePage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const containerRef = useRef(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Click outside to close expanded card
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpandedCard(null);
      }
    };

    if (expandedCard !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCard]);

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
      background: `
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 25%),
        radial-gradient(circle at 80% 10%, rgba(255,255,255,0.6) 0%, transparent 30%),
        radial-gradient(circle at 30% 60%, rgba(255,255,255,0.7) 0%, transparent 35%),
        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.5) 0%, transparent 25%),
        radial-gradient(circle at 90% 50%, rgba(255,255,255,0.6) 0%, transparent 30%),
        radial-gradient(circle at 10% 80%, rgba(255,255,255,0.4) 0%, transparent 20%),
        linear-gradient(135deg, #87CEEB 0%, #4682B4 50%, #1E90FF 100%)
      `,
      minHeight: '100vh',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
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
        
        .floating-clouds {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 50;
        }
        
        .cloud {
          position: absolute;
          background: rgba(255,255,255,0.6);
          border-radius: 50px;
          opacity: 0.8;
        }
        
        .cloud:before,
        .cloud:after {
          content: '';
          position: absolute;
          background: rgba(255,255,255,0.6);
          border-radius: 50px;
        }
        
        .cloud1 {
          width: 80px;
          height: 40px;
          top: 10%;
          left: -10%;
          animation: float-right 25s infinite linear;
        }
        
        .cloud1:before {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 10px;
        }
        
        .cloud1:after {
          width: 60px;
          height: 35px;
          top: -15px;
          right: 10px;
        }
        
        .cloud2 {
          width: 100px;
          height: 50px;
          top: 20%;
          left: -15%;
          animation: float-right 35s infinite linear;
          animation-delay: -5s;
        }
        
        .cloud2:before {
          width: 60px;
          height: 60px;
          top: -30px;
          left: 15px;
        }
        
        .cloud2:after {
          width: 70px;
          height: 40px;
          top: -20px;
          right: 15px;
        }
        
        .cloud3 {
          width: 120px;
          height: 60px;
          top: 5%;
          left: -20%;
          animation: float-right 45s infinite linear;
          animation-delay: -15s;
        }
        
        .cloud3:before {
          width: 70px;
          height: 70px;
          top: -35px;
          left: 20px;
        }
        
        .cloud3:after {
          width: 80px;
          height: 45px;
          top: -25px;
          right: 20px;
        }
        
        .cloud4 {
          width: 90px;
          height: 45px;
          top: 40%;
          left: -12%;
          animation: float-right 30s infinite linear;
          animation-delay: -8s;
        }
        
        .cloud4:before {
          width: 55px;
          height: 55px;
          top: -28px;
          left: 12px;
        }
        
        .cloud4:after {
          width: 65px;
          height: 35px;
          top: -18px;
          right: 12px;
        }
        
        .cloud5 {
          width: 110px;
          height: 55px;
          top: 60%;
          left: -18%;
          animation: float-right 40s infinite linear;
          animation-delay: -12s;
        }
        
        .cloud5:before {
          width: 65px;
          height: 65px;
          top: -32px;
          left: 18px;
        }
        
        .cloud5:after {
          width: 75px;
          height: 42px;
          top: -22px;
          right: 18px;
        }
        
        .cloud6 {
          width: 75px;
          height: 38px;
          top: 75%;
          left: -8%;
          animation: float-right 28s infinite linear;
          animation-delay: -20s;
        }
        
        .cloud6:before {
          width: 48px;
          height: 48px;
          top: -24px;
          left: 8px;
        }
        
        .cloud6:after {
          width: 58px;
          height: 32px;
          top: -14px;
          right: 8px;
        }
        
        .cloud7 {
          width: 95px;
          height: 48px;
          top: 30%;
          left: -15%;
          animation: float-right 38s infinite linear;
          animation-delay: -25s;
        }
        
        .cloud7:before {
          width: 58px;
          height: 58px;
          top: -29px;
          left: 15px;
        }
        
        .cloud7:after {
          width: 68px;
          height: 38px;
          top: -19px;
          right: 15px;
        }
        
        .cloud8 {
          width: 85px;
          height: 42px;
          top: 85%;
          left: -10%;
          animation: float-right 32s infinite linear;
          animation-delay: -30s;
        }
        
        .cloud8:before {
          width: 52px;
          height: 52px;
          top: -26px;
          left: 10px;
        }
        
        .cloud8:after {
          width: 62px;
          height: 36px;
          top: -16px;
          right: 10px;
        }
        
        .cloud9 {
          width: 100px;
          height: 50px;
          top: 15%;
          left: -14%;
          animation: float-right 35s infinite linear;
          animation-delay: -35s;
        }
        
        .cloud9:before {
          width: 60px;
          height: 60px;
          top: -30px;
          left: 14px;
        }
        
        .cloud9:after {
          width: 70px;
          height: 40px;
          top: -20px;
          right: 14px;
        }
        
        .cloud10 {
          width: 80px;
          height: 40px;
          top: 25%;
          left: -9%;
          animation: float-right 29s infinite linear;
          animation-delay: -40s;
        }
        
        .cloud10:before {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 9px;
        }
        
        .cloud10:after {
          width: 60px;
          height: 35px;
          top: -15px;
          right: 9px;
        }
        
        .cloud11 {
          width: 105px;
          height: 52px;
          top: 35%;
          left: -16%;
          animation: float-right 42s infinite linear;
          animation-delay: -45s;
        }
        
        .cloud11:before {
          width: 63px;
          height: 63px;
          top: -31px;
          left: 16px;
        }
        
        .cloud11:after {
          width: 73px;
          height: 42px;
          top: -21px;
          right: 16px;
        }
        
        .cloud12 {
          width: 88px;
          height: 44px;
          top: 45%;
          left: -11%;
          animation: float-right 33s infinite linear;
          animation-delay: -50s;
        }
        
        .cloud12:before {
          width: 53px;
          height: 53px;
          top: -26px;
          left: 11px;
        }
        
        .cloud12:after {
          width: 63px;
          height: 37px;
          top: -17px;
          right: 11px;
        }
        
        .cloud13 {
          width: 92px;
          height: 46px;
          top: 55%;
          left: -13%;
          animation: float-right 36s infinite linear;
          animation-delay: -55s;
        }
        
        .cloud13:before {
          width: 56px;
          height: 56px;
          top: -28px;
          left: 13px;
        }
        
        .cloud13:after {
          width: 66px;
          height: 39px;
          top: -19px;
          right: 13px;
        }
        
        .cloud14 {
          width: 78px;
          height: 39px;
          top: 65%;
          left: -8%;
          animation: float-right 27s infinite linear;
          animation-delay: -60s;
        }
        
        .cloud14:before {
          width: 47px;
          height: 47px;
          top: -23px;
          left: 8px;
        }
        
        .cloud14:after {
          width: 57px;
          height: 33px;
          top: -13px;
          right: 8px;
        }
        
        .cloud15 {
          width: 96px;
          height: 48px;
          top: 80%;
          left: -12%;
          animation: float-right 39s infinite linear;
          animation-delay: -65s;
        }
        
        .cloud15:before {
          width: 58px;
          height: 58px;
          top: -29px;
          left: 12px;
        }
        
        .cloud15:after {
          width: 68px;
          height: 41px;
          top: -19px;
          right: 12px;
        }
        
        .cloud16 {
          width: 84px;
          height: 42px;
          top: 90%;
          left: -10%;
          animation: float-right 31s infinite linear;
          animation-delay: -70s;
        }
        
        .cloud16:before {
          width: 51px;
          height: 51px;
          top: -25px;
          left: 10px;
        }
        
        .cloud16:after {
          width: 61px;
          height: 36px;
          top: -16px;
          right: 10px;
        }
        
        .cloud17 {
          width: 102px;
          height: 51px;
          top: 95%;
          left: -15%;
          animation: float-right 41s infinite linear;
          animation-delay: -75s;
        }
        
        .cloud17:before {
          width: 61px;
          height: 61px;
          top: -30px;
          left: 15px;
        }
        
        .cloud17:after {
          width: 71px;
          height: 43px;
          top: -21px;
          right: 15px;
        }
        
        .cloud18 {
          width: 87px;
          height: 43px;
          top: 12%;
          left: -11%;
          animation: float-right 34s infinite linear;
          animation-delay: -10s;
        }
        
        .cloud18:before {
          width: 52px;
          height: 52px;
          top: -26px;
          left: 11px;
        }
        
        .cloud18:after {
          width: 62px;
          height: 37px;
          top: -17px;
          right: 11px;
        }
        
        .cloud19 {
          width: 93px;
          height: 47px;
          top: 22%;
          left: -13%;
          animation: float-right 37s infinite linear;
          animation-delay: -18s;
        }
        
        .cloud19:before {
          width: 56px;
          height: 56px;
          top: -28px;
          left: 13px;
        }
        
        .cloud19:after {
          width: 66px;
          height: 40px;
          top: -18px;
          right: 13px;
        }
        
        .cloud20 {
          width: 110px;
          height: 55px;
          top: 32%;
          left: -17%;
          animation: float-right 43s infinite linear;
          animation-delay: -22s;
        }
        
        .cloud20:before {
          width: 66px;
          height: 66px;
          top: -33px;
          left: 17px;
        }
        
        .cloud20:after {
          width: 76px;
          height: 47px;
          top: -23px;
          right: 17px;
        }
        
        .cloud21 {
          width: 79px;
          height: 39px;
          top: 42%;
          left: -9%;
          animation: float-right 26s infinite linear;
          animation-delay: -28s;
        }
        
        .cloud21:before {
          width: 47px;
          height: 47px;
          top: -23px;
          left: 9px;
        }
        
        .cloud21:after {
          width: 57px;
          height: 33px;
          top: -13px;
          right: 9px;
        }
        
        .cloud22 {
          width: 98px;
          height: 49px;
          top: 52%;
          left: -14%;
          animation: float-right 40s infinite linear;
          animation-delay: -35s;
        }
        
        .cloud22:before {
          width: 59px;
          height: 59px;
          top: -29px;
          left: 14px;
        }
        
        .cloud22:after {
          width: 69px;
          height: 42px;
          top: -19px;
          right: 14px;
        }
        
        .cloud23 {
          width: 86px;
          height: 43px;
          top: 62%;
          left: -10%;
          animation: float-right 33s infinite linear;
          animation-delay: -42s;
        }
        
        .cloud23:before {
          width: 52px;
          height: 52px;
          top: -26px;
          left: 10px;
        }
        
        .cloud23:after {
          width: 62px;
          height: 37px;
          top: -17px;
          right: 10px;
        }
        
        .cloud24 {
          width: 104px;
          height: 52px;
          top: 72%;
          left: -16%;
          animation: float-right 41s infinite linear;
          animation-delay: -48s;
        }
        
        .cloud24:before {
          width: 62px;
          height: 62px;
          top: -31px;
          left: 16px;
        }
        
        .cloud24:after {
          width: 72px;
          height: 44px;
          top: -21px;
          right: 16px;
        }
        
        .cloud25 {
          width: 82px;
          height: 41px;
          top: 82%;
          left: -9%;
          animation: float-right 30s infinite linear;
          animation-delay: -55s;
        }
        
        .cloud25:before {
          width: 49px;
          height: 49px;
          top: -24px;
          left: 9px;
        }
        
        .cloud25:after {
          width: 59px;
          height: 35px;
          top: -15px;
          right: 9px;
        }
        
        .cloud26 {
          width: 91px;
          height: 46px;
          top: 92%;
          left: -12%;
          animation: float-right 36s infinite linear;
          animation-delay: -62s;
        }
        
        .cloud26:before {
          width: 55px;
          height: 55px;
          top: -27px;
          left: 12px;
        }
        
        .cloud26:after {
          width: 65px;
          height: 39px;
          top: -17px;
          right: 12px;
        }
        
        .cloud27 {
          width: 75px;
          height: 37px;
          top: 8%;
          left: -8%;
          animation: float-right 27s infinite linear;
          animation-delay: -68s;
        }
        
        .cloud27:before {
          width: 45px;
          height: 45px;
          top: -22px;
          left: 8px;
        }
        
        .cloud27:after {
          width: 55px;
          height: 31px;
          top: -12px;
          right: 8px;
        }
        
        .cloud28 {
          width: 107px;
          height: 54px;
          top: 18%;
          left: -17%;
          animation: float-right 44s infinite linear;
          animation-delay: -75s;
        }
        
        .cloud28:before {
          width: 64px;
          height: 64px;
          top: -32px;
          left: 17px;
        }
        
        .cloud28:after {
          width: 74px;
          height: 46px;
          top: -22px;
          right: 17px;
        }
        
        .cloud29 {
          width: 89px;
          height: 44px;
          top: 28%;
          left: -11%;
          animation: float-right 35s infinite linear;
          animation-delay: -82s;
        }
        
        .cloud29:before {
          width: 53px;
          height: 53px;
          top: -26px;
          left: 11px;
        }
        
        .cloud29:after {
          width: 63px;
          height: 38px;
          top: -16px;
          right: 11px;
        }
        
        .cloud30 {
          width: 95px;
          height: 48px;
          top: 38%;
          left: -14%;
          animation: float-right 38s infinite linear;
          animation-delay: -88s;
        }
        
        .cloud30:before {
          width: 57px;
          height: 57px;
          top: -28px;
          left: 14px;
        }
        
        .cloud30:after {
          width: 67px;
          height: 41px;
          top: -18px;
          right: 14px;
        }
        
        .cloud31 {
          width: 77px;
          height: 38px;
          top: 48%;
          left: -8%;
          animation: float-right 28s infinite linear;
          animation-delay: -95s;
        }
        
        .cloud31:before {
          width: 46px;
          height: 46px;
          top: -23px;
          left: 8px;
        }
        
        .cloud31:after {
          width: 56px;
          height: 32px;
          top: -13px;
          right: 8px;
        }
        
        .cloud32 {
          width: 101px;
          height: 50px;
          top: 58%;
          left: -15%;
          animation: float-right 42s infinite linear;
          animation-delay: -102s;
        }
        
        .cloud32:before {
          width: 60px;
          height: 60px;
          top: -30px;
          left: 15px;
        }
        
        .cloud32:after {
          width: 70px;
          height: 43px;
          top: -20px;
          right: 15px;
        }
        
        .cloud33 {
          width: 83px;
          height: 42px;
          top: 68%;
          left: -10%;
          animation: float-right 31s infinite linear;
          animation-delay: -108s;
        }
        
        .cloud33:before {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 10px;
        }
        
        .cloud33:after {
          width: 60px;
          height: 36px;
          top: -16px;
          right: 10px;
        }
        
        .cloud34 {
          width: 97px;
          height: 49px;
          top: 78%;
          left: -13%;
          animation: float-right 39s infinite linear;
          animation-delay: -115s;
        }
        
        .cloud34:before {
          width: 58px;
          height: 58px;
          top: -29px;
          left: 13px;
        }
        
        .cloud34:after {
          width: 68px;
          height: 42px;
          top: -19px;
          right: 13px;
        }
        
        .cloud35 {
          width: 81px;
          height: 40px;
          top: 88%;
          left: -9%;
          animation: float-right 29s infinite linear;
          animation-delay: -122s;
        }
        
        .cloud35:before {
          width: 48px;
          height: 48px;
          top: -24px;
          left: 9px;
        }
        
        .cloud35:after {
          width: 58px;
          height: 34px;
          top: -14px;
          right: 9px;
        }
        
        @keyframes float-right {
          0% { transform: translateX(-120px); }
          100% { transform: translateX(calc(100vw + 120px)); }
        }
      `}</style>
      
      {/* Animated Floating Clouds */}
      <div className="floating-clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud3"></div>
        <div className="cloud cloud5"></div>
        <div className="cloud cloud8"></div>
        <div className="cloud cloud11"></div>
        <div className="cloud cloud15"></div>
        <div className="cloud cloud20"></div>
        <div className="cloud cloud25"></div>
        <div className="cloud cloud30"></div>
        <div className="cloud cloud35"></div>
      </div>
      <section style={{ padding: '4rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem', 
              color: '#FFD700'
            }}>
              The <span style={{color: '#FF0000'}}>Key Science</span>
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
            <div 
              ref={containerRef}
              style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.2rem',
                position: 'relative',
                zIndex: 10,
                overflow: 'visible'
              }}>
              {keyPoints.map((point, index) => {
                // Use the same cyan color scheme for all boxes (from "How People Really Talk to AI")
                const colorScheme = { bg: '#06b6d4', accent: '#0891b2' };
                
                const isExpanded = expandedCard === index;
                
                return (
                  <div 
                    key={index} 
                    className="professional-card"
                    onClick={() => toggleCard(index)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(5px)',
                      borderRadius: '16px',
                      boxShadow: isExpanded 
                        ? `0 25px 80px ${colorScheme.bg}70, 0 0 0 1px rgba(255,255,255,0.1)` 
                        : '0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.1)',
                      border: `3px solid ${colorScheme.bg}`,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      transform: isExpanded ? 'scale(1.5)' : 'scale(1)',
                      zIndex: isExpanded ? 100 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.transform = 'translateY(-8px) scale(1)';
                        e.currentTarget.style.boxShadow = `0 16px 48px ${colorScheme.bg}50, 0 0 0 1px rgba(255,255,255,0.2)`;
                        e.currentTarget.querySelector('.card-content').style.background = `rgba(255, 255, 255, 0.99)`;
                        e.currentTarget.querySelector('.card-header').style.background = `${colorScheme.accent}CC`;
                        e.currentTarget.querySelector('.card-description').style.opacity = '1';
                        e.currentTarget.querySelector('.card-description').style.maxHeight = '200px';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.1)';
                        e.currentTarget.querySelector('.card-content').style.background = 'rgba(255, 255, 255, 0.98)';
                        e.currentTarget.querySelector('.card-header').style.background = `${colorScheme.bg}CC`;
                        e.currentTarget.querySelector('.card-description').style.opacity = '0.7';
                        e.currentTarget.querySelector('.card-description').style.maxHeight = '60px';
                      }
                    }}
                  >
                    <div 
                      className="card-header"
                      style={{
                        background: `${colorScheme.bg}CC`,
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        zIndex: 60
                      }}
                    >
                      <div style={{ 
                        fontSize: '2rem',
                        flexShrink: 0,
                        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))'
                      }}>
                        {point.icon}
                      </div>
                      
                      <div>
                        <h3 style={{ 
                          fontSize: '1.1rem', 
                          fontWeight: '700',
                          margin: 0,
                          lineHeight: '1.2',
                          color: '#1e3a8a'
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
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.98)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <p 
                        className="card-description"
                        style={{ 
                          lineHeight: '1.6',
                          color: '#4b5563',
                          margin: 0,
                          fontSize: isExpanded ? '1rem' : '0.9rem',
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
              Put this key science into action with our comprehensive audit tool. 
              See exactly how AI-ready your website is right now.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeySciencePage;