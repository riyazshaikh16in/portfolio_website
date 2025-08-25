import React from 'react';
import { Mail, Phone, Linkedin, Github, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:expert@techvalidation.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+919876543210", label: "Phone" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/technical-expert", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/technical-expert", label: "GitHub" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--text-primary)',
      color: 'var(--bg-white)',
      padding: 'calc(var(--grid-unit) * 2) 0 calc(var(--grid-unit) * 1) 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          {/* Brand Section */}
          <div>
            <div className="header-logo" style={{
              color: 'var(--bg-white)',
              marginBottom: '24px'
            }}>
              Technical Expert
            </div>
            
            <div className="text-body" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              Two decades of expertise in automation testing, firmware validation, 
              and smart meter technologies. Delivering innovation and excellence 
              across global projects.
            </div>
            
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'var(--bg-white)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--accent-primary)';
                    e.target.style.borderColor = 'var(--accent-primary)';
                    e.target.style.color = 'var(--accent-foreground)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.color = 'var(--bg-white)';
                  }}
                  title={link.label}
                >
                  {link.icon}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <div className="label" style={{
              color: 'var(--bg-white)',
              marginBottom: '24px'
            }}>
              Quick Links
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.7)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                    fontSize: '16px',
                    padding: '4px 0',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="label" style={{
              color: 'var(--bg-white)',
              marginBottom: '24px'
            }}>
              Contact Information
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div>
                <div className="text-body" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '4px'
                }}>
                  Email
                </div>
                <div className="text-body" style={{
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  expert@techvalidation.com
                </div>
              </div>
              
              <div>
                <div className="text-body" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '4px'
                }}>
                  Phone
                </div>
                <div className="text-body" style={{
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  +91 98765 43210
                </div>
              </div>
              
              <div>
                <div className="text-body" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '4px'
                }}>
                  Location
                </div>
                <div className="text-body" style={{
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  India • Global Projects
                </div>
              </div>
            </div>
          </div>
          
          {/* Availability */}
          <div>
            <div className="label" style={{
              color: 'var(--bg-white)',
              marginBottom: '24px'
            }}>
              Availability
            </div>
            
            <div style={{
              backgroundColor: 'rgba(56, 255, 98, 0.1)',
              border: '1px solid var(--accent-primary)',
              padding: '24px',
              marginBottom: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--accent-primary)',
                  borderRadius: '50%'
                }}></div>
                <span className="label-small" style={{
                  color: 'var(--accent-primary)'
                }}>
                  Available for Projects
                </span>
              </div>
              
              <div className="text-body" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '14px'
              }}>
                Open to consulting, leadership roles, and technical advisory positions
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div className="text-body" style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '14px'
          }}>
            © {currentYear} Technical Expert Portfolio. All rights reserved.
          </div>
          
          <div style={{
            display: 'flex',
            gap: '24px'
          }}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '14px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255, 255, 255, 0.5)';
              }}
            >
              Privacy Policy
            </button>
            
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                fontSize: '14px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255, 255, 255, 0.5)';
              }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;