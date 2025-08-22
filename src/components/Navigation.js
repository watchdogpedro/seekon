import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ to, children, isSpecial = false }) => {
    const isActive = location.pathname === to;
    
    return (
      <Link 
        to={to} 
        style={{
          textDecoration: 'none',
          fontWeight: isSpecial ? '700' : '500',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          transition: 'all 0.3s ease',
          position: 'relative',
          background: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
          color: isActive ? 'white' : (isSpecial ? '#FF6B6B' : '#333')
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.target.style.color = 'white';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.target.style.background = 'transparent';
            e.target.style.color = isSpecial ? '#FF6B6B' : '#333';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }
        }}
      >
        {children}
      </Link>
    );
  };

  const MobileNavLink = ({ to, children, isSpecial = false }) => {
    const isActive = location.pathname === to;
    
    return (
      <Link 
        to={to} 
        onClick={closeMobileMenu}
        style={{
          textDecoration: 'none',
          fontWeight: isSpecial ? '700' : '500',
          padding: '1rem',
          borderBottom: '1px solid #eee',
          borderRadius: '10px',
          margin: '0.25rem 0',
          transition: 'all 0.3s ease',
          background: isActive ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
          color: isActive ? 'white' : (isSpecial ? '#FF6B6B' : '#333'),
          display: 'block'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.target.style.color = 'white';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.target.style.background = 'transparent';
            e.target.style.color = isSpecial ? '#FF6B6B' : '#333';
          }
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav style={{
      background: 'rgba(255,255,255,0.95)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#667eea',
          textDecoration: 'none'
        }} onClick={closeMobileMenu}>
          SeekON.AI
        </Link>
        
        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '1rem'
        }} className="desktop-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/key-science">Key Science</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/audit-tool" isSpecial>🔍 Free Audit</NavLink>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#333'
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div style={{
        display: isMobileMenuOpen ? 'block' : 'none',
        background: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginTop: '1rem'
      }} className="mobile-nav">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem'
        }}>
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/about">About</MobileNavLink>
          <MobileNavLink to="/key-science">Key Science</MobileNavLink>
          <MobileNavLink to="/services">Services</MobileNavLink>
          <MobileNavLink to="/audit-tool" isSpecial>🔍 Free Audit</MobileNavLink>
          <MobileNavLink to="/case-studies">Case Studies</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;