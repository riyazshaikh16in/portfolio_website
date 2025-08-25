import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--grid-unit)',
          alignItems: 'center'
        }}>
          <div>
            <div className="label" style={{ marginBottom: '24px' }}>
              Technical Expert
            </div>
            
            <h1 className="hero-title" style={{
              marginBottom: '32px',
              background: `linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Automation
              <br />
              Specialist
            </h1>
            
            <div className="text-big" style={{
              marginBottom: '48px',
              color: 'var(--text-secondary)',
              maxWidth: '600px'
            }}>
              Two decades of expertise in Test Automation, Firmware Validation, and Smart Meter Technologies
            </div>
            
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              <button 
                className="btn-accent"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '400px',
              height: '400px',
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div className="label" style={{
                position: 'absolute',
                top: '24px',
                left: '24px'
              }}>
                20+ Years
              </div>
              
              <div style={{
                width: '200px',
                height: '200px',
                backgroundColor: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <div className="text-regular" style={{
                  color: 'var(--accent-foreground)',
                  textAlign: 'center',
                  fontWeight: '700'
                }}>
                  EXPERT
                </div>
              </div>
              
              <div className="label-small" style={{
                textAlign: 'center',
                maxWidth: '300px'
              }}>
                Python • PyATS • Firmware Validation
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            animation: 'bounce 2s infinite'
          }}
        >
          <ChevronDown size={32} color="var(--text-primary)" />
        </button>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;