import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(242, 242, 242, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-light)',
      zIndex: 1000,
      padding: '16px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div 
          className="header-logo"
          style={{ cursor: 'pointer' }}
          onClick={() => scrollToSection('hero')}
        >
          Technical Expert
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: window.innerWidth <= 768 ? 'none' : 'flex', gap: '32px' }}>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px'
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-light)',
            borderTop: 'none',
            padding: '24px'
          }}>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 0'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;