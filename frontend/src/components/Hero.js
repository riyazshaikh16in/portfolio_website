import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Zap, Award, ArrowRight, Play, Sparkles, Users } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      Award: <Award size={28} />,
      Code: <Code size={28} />,
      Users: <Users size={28} />,
      Zap: <Zap size={28} />
    };
    return icons[iconName] || <Award size={28} />;
  };

  return (
    <section 
      id="hero"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(49, 130, 206, 0.1) 0%, transparent 50%)`,
        transition: 'background 0.3s ease',
        pointerEvents: 'none'
      }}></div>

      {/* Floating Particles */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              backgroundColor: 'rgba(49, 130, 206, 0.3)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
          gap: window.innerWidth > 768 ? '4rem' : '2rem',
          alignItems: 'center'
        }}>
          {/* Enhanced Hero Content */}
          <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="label mb-3" style={{
              background: 'var(--accent-gradient)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              display: 'inline-block',
              fontWeight: '600'
            }}>
              <Sparkles size={16} style={{ marginRight: '0.5rem', display: 'inline' }} />
              {personalInfo.welcomeLabel}
            </div>
            
            <h1 className="hero-title mb-4">
              {personalInfo.title.split(' ')[0]}
              <br />
              <span className="text-gradient">{personalInfo.title.split(' ')[1]}</span>
            </h1>
            
            <p className="text-body mb-4" style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              maxWidth: '650px',
              lineHeight: '1.8',
              fontWeight: '400'
            }}>
              {personalInfo.description}
            </p>
            
            {/* Enhanced Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '4rem'
            }}>
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                <Play size={20} />
                View Projects
                <ArrowRight size={20} />
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Code size={20} />
                Get In Touch
              </button>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`stat-card animate-fade-in animate-delay-${index + 2}`}
                >
                  <div style={{
                    color: 'var(--accent-primary)',
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {getIcon(stat.icon)}
                  </div>
                  
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {stat.value}
                  </div>
                  
                  <div className="text-small" style={{
                    fontWeight: '600',
                    marginBottom: '0.25rem',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {stat.label}
                  </div>
                  
                  <div className="text-small" style={{ 
                    opacity: 0.8,
                    fontSize: '0.75rem',
                    color: 'var(--accent-secondary)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Hero Visual */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-card" style={{
              height: '550px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '2px solid var(--border-glass)'
            }}>
              {/* Enhanced Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  radial-gradient(circle at 30% 30%, rgba(49, 130, 206, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 70% 70%, rgba(66, 153, 225, 0.1) 0%, transparent 50%),
                  linear-gradient(135deg, rgba(49, 130, 206, 0.05) 0%, transparent 100%)
                `,
                opacity: 0.8
              }}></div>
              
              {/* Professional Photo - Crystal Clear */}
              <div style={{
                width: '240px',
                height: '240px',
                borderRadius: '24px',
                overflow: 'hidden',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 2,
                border: '3px solid var(--accent-primary)',
                boxShadow: '0 20px 60px rgba(49, 130, 206, 0.3)',
                transition: 'all 0.3s ease'
              }}
              className="photo-container"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_automation-expert-3/artifacts/et09lpdp_1656259899873.jpeg"
                  alt="Technical Expert"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              
              <div className="text-body" style={{
                textAlign: 'center',
                maxWidth: '350px',
                zIndex: 2,
                fontWeight: '500',
                fontSize: '1.1rem',
                color: 'var(--text-primary)'
              }}>
                Leading Innovation in Smart Meter Technologies & Test Automation
              </div>
              
              {/* Enhanced Floating Elements */}
              <div style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                width: '70px',
                height: '70px',
                background: 'rgba(49, 130, 206, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 4s ease-in-out infinite',
                backdropFilter: 'blur(10px)'
              }}>
                <Code size={28} color="var(--accent-primary)" />
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                width: '90px',
                height: '70px',
                background: 'rgba(66, 153, 225, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 4s ease-in-out infinite 2s',
                backdropFilter: 'blur(10px)'
              }}>
                <Zap size={28} color="var(--accent-secondary)" />
              </div>
              
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '20px',
                width: '60px',
                height: '60px',
                background: 'rgba(99, 179, 237, 0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'float 3s ease-in-out infinite 1s'
              }}>
                <Award size={24} color="var(--accent-light)" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--bg-card)',
            backdropFilter: 'var(--blur-md)',
            border: '2px solid var(--border-glass)',
            borderRadius: '50%',
            width: '70px',
            height: '70px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'bounceEnhanced 3s infinite',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--accent-gradient)';
            e.target.style.borderColor = 'var(--accent-primary)';
            e.target.style.transform = 'translateX(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--bg-card)';
            e.target.style.borderColor = 'var(--border-glass)';
            e.target.style.transform = 'translateX(-50%) scale(1)';
          }}
        >
          <ChevronDown size={28} color="var(--accent-primary)" />
        </button>
      </div>
      
      <style jsx>{`
        .photo-container:hover img {
          transform: scale(1.05);
        }
        
        .photo-container:hover {
          box-shadow: 0 25px 80px rgba(49, 130, 206, 0.4);
          transform: translateY(-5px);
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