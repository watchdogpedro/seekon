import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResourcesPageMinimal from './pages/ResourcesPageMinimal';
import KeySciencePage from './pages/KeySciencePage';
import ServicesPage from './pages/ServicesPage';
import AuditToolPage from './pages/AuditToolPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import EmailAdmin from './components/EmailAdmin';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Space-Tech Background Elements */}
        <div className="tech-grid"></div>
        <div className="orbital-ring orbital-ring-1"></div>
        <div className="orbital-ring orbital-ring-2"></div>
        <div className="geo-shape geo-triangle"></div>
        <div className="geo-shape geo-diamond"></div>
        <div className="rocket-trail"></div>
        <div className="space-particles"></div>
        
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPageMinimal />} />
          <Route path="/key-science" element={<KeySciencePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/audit-tool" element={<AuditToolPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/emails" element={<EmailAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;