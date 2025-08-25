import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Calendar, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "expert@techvalidation.com",
      link: "mailto:expert@techvalidation.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "India • Available for Global Projects",
      link: null
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/technical-expert"
    }
  ];

  const availability = [
    {
      service: "Consulting & Advisory",
      description: "Strategic guidance on test automation and validation frameworks"
    },
    {
      service: "Project Leadership",
      description: "Leading complex validation projects across multiple regions"
    },
    {
      service: "Team Training",
      description: "Upskilling teams on PyATS, automation, and testing best practices"
    },
    {
      service: "Technical Workshops",
      description: "Conducting workshops on smart meter testing and compliance"
    }
  ];

  return (
    <section id="contact" style={{
      padding: 'calc(var(--grid-unit) * 3) 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          Let's Connect
        </div>
        
        <div className="title-big" style={{ marginBottom: '48px' }}>
          Get In
          <br />
          <span style={{ color: 'var(--accent-primary)' }}>Touch</span>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <div>
            <div className="text-body" style={{
              marginBottom: '32px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Ready to discuss your next validation project or explore opportunities for collaboration? 
              I'm available for consulting, project leadership, and technical advisory roles.
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              marginBottom: '48px'
            }}>
              {contactInfo.map((info, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--color-background)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)'
                  }}>
                    {info.icon}
                  </div>
                  
                  <div>
                    <div className="label" style={{ marginBottom: '4px' }}>
                      {info.label}
                    </div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-body"
                        style={{
                          color: 'var(--text-primary)',
                          textDecoration: 'none'
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-body">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Services Available */}
            <div>
              <div className="label" style={{ marginBottom: '24px' }}>
                Services Available
              </div>
              
              {availability.map((service, index) => (
                <div key={index} className="card" style={{
                  padding: '24px',
                  marginBottom: '16px'
                }}>
                  <div className="text-body" style={{
                    fontWeight: '500',
                    marginBottom: '8px'
                  }}>
                    {service.service}
                  </div>
                  <div className="text-body" style={{
                    color: 'var(--text-secondary)',
                    fontSize: '14px'
                  }}>
                    {service.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card" style={{
            padding: '48px'
          }}>
            <div className="label" style={{ marginBottom: '24px' }}>
              Send Message
            </div>
            
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <div>
                <label className="text-body" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '0',
                    backgroundColor: 'var(--color-background)',
                    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                    fontSize: '16px',
                    transition: 'border-color 0.2s ease'
                  }}
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="text-body" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '0',
                    backgroundColor: 'var(--color-background)',
                    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                    fontSize: '16px',
                    transition: 'border-color 0.2s ease'
                  }}
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="text-body" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '0',
                    backgroundColor: 'var(--color-background)',
                    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                    fontSize: '16px',
                    transition: 'border-color 0.2s ease'
                  }}
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="text-body" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '0',
                    backgroundColor: 'var(--color-background)',
                    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                    fontSize: '16px',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-accent"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;