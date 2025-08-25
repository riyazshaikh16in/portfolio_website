import React, { useState, useEffect, useRef } from 'react';
import { Award, Code, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Removed "Countries Served" as requested
  const highlights = [
    {
      icon: <Award size={28} />,
      number: "20+",
      label: "Years Experience",
      description: "Two decades of technical excellence"
    },
    {
      icon: <Code size={28} />,
      number: "50+",
      label: "Projects Delivered",
      description: "Successful global implementations"
    },
    {
      icon: <Users size={28} />,
      number: "15+",
      label: "Teams Led",
      description: "Multi-region team leadership"
    }
  ];

  const expertise = [
    {
      icon: <Target size={24} />,
      title: "Smart Meter Validation",
      description: "Comprehensive testing across firmware, hardware, metrology, and compliance standards."
    },
    {
      icon: <Code size={24} />,
      title: "Python Automation",
      description: "Advanced PyATS frameworks delivering scalable test automation solutions."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation Leadership",
      description: "Developed in-house tools including 3-Phase Simulator and Tamper Simulation Jig."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
    >
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            About Me
          </div>
          
          <h2 className="section-title mb-4">
            Technical Excellence
            <br />
            <span className="text-gradient">Delivered</span>
          </h2>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
          marginBottom: '4rem'
        }}>
          {/* Main Content */}
          <div className={`animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-body mb-4" style={{
              fontSize: '1.125rem',
              lineHeight: '1.8'
            }}>
              Seasoned expert with two decades of hands-on experience in Automation Testing, 
              Firmware, Hardware, EMI/EMC, Metrology, Reliability, Performance, and Tamper Testing—fully 
              focused on the Metering domain.
            </div>
            
            <div className="text-body mb-4" style={{
              fontSize: '1.125rem',
              lineHeight: '1.8'
            }}>
              Currently serving as <strong style={{ color: 'var(--accent-secondary)' }}>Technical Expert at Landis+Gyr</strong>, 
              where I lead Python-based test automation (PyATS), drive firmware validation teams, 
              and shape robust testing strategies for global projects.
            </div>

            <div className="text-body mb-6" style={{
              fontSize: '1.125rem',
              lineHeight: '1.8'
            }}>
              Known for innovation in automation and delivering reliable, high-performance solutions 
              that have transformed how teams approach quality assurance in the metering industry.
            </div>

            {/* Expertise Cards */}
            <div style={{
              display: 'grid',
              gap: '1rem'
            }}>
              {expertise.map((item, index) => (
                <div key={index} className="glass-card" style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{
                    color: 'var(--accent-secondary)',
                    flexShrink: 0,
                    marginTop: '0.25rem'
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="card-title" style={{
                      fontSize: '1.125rem',
                      marginBottom: '0.5rem'
                    }}>
                      {item.title}
                    </h3>
                    <p className="text-body" style={{ fontSize: '0.95rem' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats & Visual */}
          <div className={`animate-fade-in animate-delay-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-card" style={{
              padding: '3rem',
              textAlign: 'center',
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
                  radial-gradient(circle at 20% 20%, rgba(49, 130, 206, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(66, 153, 225, 0.1) 0%, transparent 50%)
                `,
                opacity: 0.6
              }}></div>
              
              <div className="label mb-4" style={{ position: 'relative', zIndex: 2 }}>
                Key Achievements
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '2rem',
                position: 'relative',
                zIndex: 2
              }}>
                {highlights.map((item, index) => (
                  <div key={index} style={{
                    textAlign: 'center'
                  }}>
                    <div style={{
                      marginBottom: '1rem',
                      color: 'var(--accent-secondary)'
                    }}>
                      {item.icon}
                    </div>
                    
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      {item.number}
                    </div>
                    
                    <div className="text-small" style={{
                      fontWeight: '600',
                      marginBottom: '0.25rem'
                    }}>
                      {item.label}
                    </div>
                    
                    <div className="text-small" style={{ opacity: 0.7 }}>
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Education & Certifications - Compact */}
        <div className={`grid grid-3 animate-fade-in animate-delay-3 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div className="label mb-2">
              Education
            </div>
            <div className="text-body mb-2" style={{ fontSize: '0.9rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Bachelor's Degree</strong><br />
              Electronics & Communications<br />
              <span style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem' }}>Rajasthan Technical University</span>
            </div>
            <div className="text-body" style={{ fontSize: '0.9rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Diploma</strong><br />
              Electronics & Telecommunications<br />
              <span style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem' }}>R.G.P.V. Bhopal</span>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div className="label mb-2">
              Certifications
            </div>
            <div className="text-body" style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
              • <strong>Executive PG</strong> in Cloud Computing & DevOps<br />
              • <strong>ISTQB Advanced</strong> - Test Analyst<br />
              • <strong>ISTQB Foundation</strong> Certification<br />
              • <strong>Certified Scrum Master</strong>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div className="label mb-2">
              Core Specializations
            </div>
            <div className="text-body" style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
              • <strong>Smart Meter Testing</strong> & Validation<br />
              • <strong>Python Automation</strong> (PyATS)<br />
              • <strong>EMI/EMC Compliance</strong> Testing<br />
              • <strong>Firmware & Hardware</strong> Validation
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .opacity-0 {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .opacity-100 {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-fade-in {
          transition: all 0.6s ease-out;
        }
        
        .animate-delay-1 {
          transition-delay: 0.1s;
        }
        
        .animate-delay-2 {
          transition-delay: 0.2s;
        }
        
        .animate-delay-3 {
          transition-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default About;