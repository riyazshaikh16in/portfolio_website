import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Zap, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: <Award size={24} />, value: "20+", label: "Years Experience" },
    { icon: <Code size={24} />, value: "50+", label: "Projects Delivered" },
    { icon: <Zap size={24} />, value: "15+", label: "Countries Served" }
  ];

  return (
    <section 
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Hero Content */}
          <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="label mb-3">
              Welcome to Excellence
            </div>
            
            <h1 className="hero-title mb-4">
              Automation
              <br />
              <span className="text-gradient">Specialist</span>
            </h1>
            
            <p className="text-body mb-4" style={{
              fontSize: '1.25rem',
              maxWidth: '600px',
              lineHeight: '1.7'
            }}>
              Two decades of expertise in Test Automation, Firmware Validation, 
              and Smart Meter Technologies. Transforming complex challenges into 
              innovative solutions across global markets.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                <Code size={20} />
                View Projects
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem'
            }}>
              {stats.map((stat, index) => (
                <div key={index} className={`animate-fade-in animate-delay-${index + 1}`}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{ color: 'var(--accent-secondary)' }}>
                      {stat.icon}
                    </div>
                    <span style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)'
                    }}>
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-small">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-card" style={{
              height: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)
                `,
                opacity: 0.6
              }}></div>
              
              <div className="label mb-4" style={{ zIndex: 2 }}>
                Technical Excellence
              </div>
              
              <div style={{
                width: '200px',
                height: '200px',
                background: 'var(--accent-gradient)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  20+
                </div>
              </div>
              
              <div className="text-body" style={{
                textAlign: 'center',
                maxWidth: '300px',
                zIndex: 2
              }}>
                Years of Innovation in Automation Testing & Smart Meter Technologies
              </div>
              
              {/* Floating Elements */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                background: 'rgba(139, 92, 246, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 3s ease-in-out infinite'
              }}>
                <Code size={24} color="var(--accent-secondary)" />
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                width: '80px',
                height: '60px',
                background: 'rgba(167, 139, 250, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 3s ease-in-out infinite 1.5s'
              }}>
                <Zap size={24} color="var(--accent-secondary)" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--bg-card)',
            backdropFilter: 'var(--blur-md)',
            border: '1px solid var(--border-glass)',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'bounce 2s infinite',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--bg-card-hover)';
            e.target.style.borderColor = 'var(--accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--bg-card)';
            e.target.style.borderColor = 'var(--border-glass)';
          }}
        >
          <ChevronDown size={24} color="var(--accent-secondary)" />
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .opacity-100 {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Hero;