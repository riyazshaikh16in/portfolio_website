import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Building, Zap, Award } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      company: "Landis+Gyr Ltd.",
      position: "Technical Expert - Test and Validation",
      period: "2015 - Present",
      duration: "9 Years",
      location: "India",
      type: "Full-time",
      icon: <Building size={24} />,
      companyColor: "rgba(139, 92, 246, 0.2)",
      highlights: [
        {
          title: "Automation Expert (2023–Present)",
          description: "Developed advanced Python-based automation frameworks (PyATS) for firmware validation, enhancing test accuracy and execution speed by 60%."
        },
        {
          title: "India Validation Lead (2020–2023)", 
          description: "Led validation for the Indian and APAC markets, managing end-to-end test cycles and reporting directly to the Delivery Head."
        },
        {
          title: "Key Project Deliveries",
          description: "Successfully delivered major validation projects for Tata Power (TPDDL), DPDC (Bangladesh), APDCL (Assam), and other key utilities."
        },
        {
          title: "Strategic Planning & Execution",
          description: "Defined validation strategies, estimated resources, and ensured timely execution through comprehensive stakeholder engagement."
        }
      ],
      technologies: ["Python", "PyATS", "Firmware Validation", "Team Leadership", "Strategic Planning", "APAC Markets"],
      achievements: ["60% faster test execution", "99.5% test accuracy", "15+ major projects", "Multi-region leadership"]
    },
    {
      company: "Secure Meters Ltd.",
      position: "Executive - Test and Validation",
      period: "2006 - 2015",
      duration: "9 Years",
      location: "India",
      type: "Full-time",
      icon: <Zap size={24} />,
      companyColor: "rgba(167, 139, 250, 0.2)",
      highlights: [
        {
          title: "Firmware & Compliance Specialist",
          description: "Led smart meter validation focusing on firmware, EMI/EMC compliance, and metrology, ensuring adherence to global standards."
        },
        {
          title: "Extensive EMI/EMC Testing",
          description: "Executed comprehensive RF emissions/immunity, ESD, surge, impulse, and power variation tests for product robustness."
        },
        {
          title: "Metrology & Automation",
          description: "Performed detailed metrology validation including CT-VT analysis, error correction, and automated test execution."
        },
        {
          title: "Innovation Leadership",
          description: "Developed specialized testing equipment and methodologies that became standard practice across validation teams."
        }
      ],
      technologies: ["EMI/EMC Testing", "Metrology", "Firmware Testing", "IEC Standards", "CBIP Compliance", "RF Testing"],
      achievements: ["Industry-standard tools", "Global compliance", "Automated testing", "Team methodology standards"]
    },
    {
      company: "Scientech Technologies",
      position: "R&D Engineer",
      period: "2005 - 2006",
      duration: "1 Year",
      location: "India",
      type: "Full-time",
      icon: <Award size={24} />,
      companyColor: "rgba(139, 92, 246, 0.15)",
      highlights: [
        {
          title: "Research & Development",
          description: "Engaged in cutting-edge research and development of instrumentation devices and testing methodologies."
        },
        {
          title: "Product Innovation",
          description: "Contributed to innovative product developments and established quality improvement processes."
        },
        {
          title: "Technical Documentation",
          description: "Created comprehensive technical documentation and standardized testing procedures."
        }
      ],
      technologies: ["Instrumentation", "Product Development", "Quality Assurance", "Technical Documentation", "R&D"],
      achievements: ["Product innovation", "Quality processes", "Documentation standards", "Research contributions"]
    },
    {
      company: "Arucom Electronics",
      position: "R&D Engineer",
      period: "2004 - 2005",
      duration: "1 Year",
      location: "India",
      type: "Full-time",
      icon: <Users size={24} />,
      companyColor: "rgba(167, 139, 250, 0.15)",
      highlights: [
        {
          title: "Electronics Development",
          description: "Focused on electronic device development and comprehensive testing methodology implementation."
        },
        {
          title: "Quality Systems",
          description: "Established robust quality control processes for electronic components and integrated systems."
        },
        {
          title: "Technical Analysis",
          description: "Performed detailed technical analysis and comprehensive failure mode investigations."
        }
      ],
      technologies: ["Electronics", "Testing Protocols", "Quality Control", "Technical Analysis", "Failure Analysis"],
      achievements: ["Quality systems", "Testing protocols", "Technical analysis", "Process improvements"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="section"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
    >
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            Professional Experience
          </div>
          
          <h2 className="section-title mb-4">
            Career
            <br />
            <span className="text-gradient">Journey</span>
          </h2>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item animate-fade-in animate-delay-${index + 1} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="timeline-dot" style={{
                background: `linear-gradient(135deg, ${exp.companyColor.replace('0.2', '0.8')}, var(--accent-primary))`
              }}></div>
              
              <div className="glass-card" style={{
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  background: exp.companyColor,
                  borderRadius: '50%',
                  transform: 'translate(50px, -50px)',
                  opacity: 0.3
                }}></div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        padding: '0.75rem',
                        background: exp.companyColor,
                        borderRadius: '12px',
                        color: 'var(--accent-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {exp.icon}
                      </div>
                      
                      <div>
                        <h3 className="card-title" style={{
                          fontSize: '1.375rem',
                          marginBottom: '0.25rem'
                        }}>
                          {exp.position}
                        </h3>
                        
                        <div style={{
                          fontSize: '1.125rem',
                          color: 'var(--accent-secondary)',
                          fontWeight: '600',
                          marginBottom: '0.5rem'
                        }}>
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      gap: '2rem',
                      flexWrap: 'wrap',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Calendar size={16} color="var(--text-secondary)" />
                        <span className="text-small" style={{ fontWeight: '500' }}>{exp.period}</span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <MapPin size={16} color="var(--text-secondary)" />
                        <span className="text-small" style={{ fontWeight: '500' }}>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    alignItems: 'flex-end'
                  }}>
                    <div style={{
                      background: 'var(--accent-gradient)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      {exp.duration}
                    </div>
                    
                    <div style={{
                      background: exp.companyColor,
                      padding: '0.375rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}>
                      {exp.type}
                    </div>
                  </div>
                </div>
                
                {/* Highlights */}
                <div style={{
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div className="label mb-3">
                    Key Contributions
                  </div>
                  
                  <div style={{
                    display: 'grid',
                    gap: '1rem'
                  }}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} style={{
                        padding: '1.25rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                      }}>
                        <div className="text-body" style={{
                          fontWeight: '600',
                          marginBottom: '0.5rem',
                          color: 'var(--text-primary)'
                        }}>
                          {highlight.title}
                        </div>
                        <div className="text-body" style={{
                          fontSize: '0.95rem',
                          lineHeight: '1.6'
                        }}>
                          {highlight.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div style={{
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div className="label mb-3">
                    Key Achievements
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '0.75rem'
                  }}>
                    {exp.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} style={{
                        padding: '0.75rem',
                        background: exp.companyColor,
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)'
                      }}>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="label mb-3">
                    Technologies & Skills
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {exp.technologies.map((tech, tIndex) => (
                      <span key={tIndex} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                        fontWeight: '500',
                        color: 'var(--text-secondary)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        
        .animate-delay-4 {
          transition-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default Experience;