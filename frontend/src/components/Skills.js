import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Code2, Shield, Users, Wrench, Globe, Zap, Target, Layers, Settings } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Cpu size={32} />,
      title: "Smart Meter Testing",
      color: "rgba(139, 92, 246, 0.2)",
      skills: [
        "Full-spectrum validation across firmware, hardware, metrology",
        "EMI/EMC compliance testing and certification",
        "Tamper detection and reliability testing",
        "Performance optimization and validation"
      ]
    },
    {
      icon: <Code2 size={32} />,
      title: "Automation Expert",
      color: "rgba(167, 139, 250, 0.2)",
      skills: [
        "Advanced Python (PyATS) frameworks development",
        "Scalable test automation architecture design",
        "Custom testing tool development and integration",
        "CI/CD pipeline integration and optimization"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance & Standards",
      color: "rgba(139, 92, 246, 0.2)",
      skills: [
        "Global standards expertise (IEC, IS, CBIP, CISPR)",
        "BIS certification processes and compliance",
        "Regulatory validation and quality assurance",
        "International testing protocol implementation"
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Leadership & Strategy",
      color: "rgba(167, 139, 250, 0.2)",
      skills: [
        "Multi-region team leadership and coordination",
        "Strategic testing planning and roadmap development",
        "Stakeholder alignment and project management",
        "Resource estimation and capacity planning"
      ]
    },
    {
      icon: <Wrench size={32} />,
      title: "Innovation & Tools",
      color: "rgba(139, 92, 246, 0.2)",
      skills: [
        "3-Phase Simulator development and implementation",
        "Tamper Simulation Jig creation and deployment",
        "In-house testing solution architecture",
        "Lab infrastructure management and optimization"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Project Delivery",
      color: "rgba(167, 139, 250, 0.2)",
      skills: [
        "India, APAC & EMEA project delivery excellence",
        "High-impact smart meter project leadership",
        "End-to-end validation cycle management",
        "Cross-functional team collaboration"
      ]
    }
  ];

  const technicalSkills = [
    { name: "Python Programming", level: 95, category: "Programming" },
    { name: "PyATS Framework", level: 90, category: "Automation" },
    { name: "Test Automation", level: 95, category: "Testing" },
    { name: "Firmware Validation", level: 90, category: "Hardware" },
    { name: "EMI/EMC Testing", level: 85, category: "Compliance" },
    { name: "Smart Meter Technologies", level: 95, category: "Domain" },
    { name: "Metrology Standards", level: 85, category: "Standards" },
    { name: "Hardware Testing", level: 80, category: "Hardware" },
    { name: "Project Management", level: 85, category: "Leadership" },
    { name: "Team Leadership", level: 90, category: "Leadership" }
  ];

  const tools = [
    { name: "Python", icon: "🐍" },
    { name: "PyATS", icon: "⚡" },
    { name: "Git", icon: "📚" },
    { name: "Jenkins", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
    { name: "Jira", icon: "📋" },
    { name: "Confluence", icon: "📖" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section"
    >
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            Skills & Expertise
          </div>
          
          <h2 className="section-title mb-4">
            Technical
            <br />
            <span className="text-gradient">Mastery</span>
          </h2>
        </div>
        
        {/* Skill Categories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass-card animate-fade-in animate-delay-${Math.min(index, 3)} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                padding: '2rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: category.color,
                borderRadius: '50%',
                transform: 'translate(30px, -30px)',
                opacity: 0.3
              }}></div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  padding: '1rem',
                  background: category.color,
                  borderRadius: '12px',
                  color: 'var(--accent-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                
                <h3 className="card-title" style={{
                  fontSize: '1.25rem',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 2
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-body" style={{
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.5rem',
                      width: '6px',
                      height: '6px',
                      background: 'var(--accent-gradient)',
                      borderRadius: '50%'
                    }}></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technical Proficiency */}
        <div className={`glass-card animate-fade-in animate-delay-3 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          padding: '3rem',
          marginBottom: '3rem'
        }}>
          <div className="label mb-4">
            Technical Proficiency
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {technicalSkills.map((skill, index) => (
              <div key={index} style={{
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}>
                  <div>
                    <span className="text-body" style={{ 
                      fontWeight: '600',
                      color: 'var(--text-primary)'
                    }}>
                      {skill.name}
                    </span>
                    <div className="text-small" style={{
                      color: 'var(--accent-secondary)',
                      fontSize: '0.75rem'
                    }}>
                      {skill.category}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--accent-secondary)',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: animateSkills ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className={`animate-fade-in animate-delay-3 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-4">
            Tools & Technologies
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem'
          }}>
            {tools.map((tool, index) => (
              <div key={index} className="glass-card" style={{
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.75rem'
                }}>
                  {tool.icon}
                </div>
                <div className="text-body" style={{
                  fontWeight: '600',
                  fontSize: '0.875rem'
                }}>
                  {tool.name}
                </div>
              </div>
            ))}
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

export default Skills;