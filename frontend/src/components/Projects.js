import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Users, Target, Code, Zap, Shield, Globe, Cpu, Wrench } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
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

  const projects = [
    {
      title: "PyATS Automation Framework",
      description: "Advanced Python-based test automation framework for firmware validation, significantly improving test accuracy and execution speed for smart meter projects globally.",
      category: "automation",
      categoryLabel: "Automation Framework",
      icon: <Code size={28} />,
      color: "rgba(139, 92, 246, 0.2)",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Python", "PyATS", "Firmware Testing", "CI/CD", "Docker", "Jenkins"],
      highlights: [
        "Reduced test execution time by 60%",
        "Improved test accuracy to 99.5%",
        "Scalable architecture for multiple products",
        "Integrated with CI/CD pipelines"
      ],
      metrics: {
        duration: "2023 - Present",
        team: "5 Engineers",
        impact: "Global Implementation",
        scale: "500K+ Tests"
      },
      status: "Active Development",
      featured: true
    },
    {
      title: "Tata Power (TPDDL) Validation Project",
      description: "Comprehensive smart meter validation project for Tata Power Delhi Distribution Limited, covering full-spectrum testing and compliance validation across Delhi region.",
      category: "industrial",
      categoryLabel: "Industrial Project",
      icon: <Zap size={28} />,
      color: "rgba(167, 139, 250, 0.2)",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      technologies: ["Smart Meters", "Metrology", "EMI/EMC", "Compliance Testing", "BIS Certification"],
      highlights: [
        "Complete end-to-end validation cycle",
        "BIS certification compliance achieved",
        "Multi-phase testing approach implementation",
        "Successful deployment across Delhi region"
      ],
      metrics: {
        duration: "2022 - 2023",
        team: "12 Engineers",
        impact: "Regional Deployment",
        scale: "500K+ Meters"
      },
      status: "Successfully Delivered",
      featured: true
    },
    {
      title: "3-Phase Simulator Development",
      description: "In-house developed 3-phase power simulator for accurate testing of smart meters under various power conditions and scenarios, now adopted as lab standard.",
      category: "innovation",
      categoryLabel: "Hardware Innovation",
      icon: <Cpu size={28} />,
      color: "rgba(139, 92, 246, 0.2)",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      technologies: ["Hardware Design", "Power Electronics", "Metrology", "Calibration", "Embedded Systems"],
      highlights: [
        "Custom hardware solution development",
        "Precise power condition simulation",
        "Cost-effective testing solution",
        "Adopted across multiple validation labs"
      ],
      metrics: {
        duration: "2020 - 2021",
        team: "3 Engineers",
        impact: "Lab Standard Tool",
        scale: "15+ Labs"
      },
      status: "Production Ready",
      featured: false
    },
    {
      title: "DPDC Bangladesh Smart Meter Project",
      description: "Led validation efforts for Dhaka Power Distribution Company's smart meter deployment, ensuring compliance with international standards and regional requirements.",
      category: "international",
      categoryLabel: "International Project",
      icon: <Globe size={28} />,
      color: "rgba(167, 139, 250, 0.2)",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      technologies: ["International Standards", "Cross-border Compliance", "Project Management", "Remote Coordination"],
      highlights: [
        "International standard compliance achieved",
        "Cross-cultural team management",
        "Remote validation coordination",
        "Successful regional deployment"
      ],
      metrics: {
        duration: "2021 - 2022",
        team: "8 Engineers",
        impact: "Regional Deployment",
        scale: "250K+ Meters"
      },
      status: "Successfully Delivered",
      featured: false
    },
    {
      title: "Tamper Simulation Jig",
      description: "Innovative tamper testing solution for comprehensive security validation of smart meters against various tampering attempts and security threats.",
      category: "innovation",
      categoryLabel: "Security Testing",
      icon: <Shield size={28} />,
      color: "rgba(139, 92, 246, 0.2)",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Security Testing", "Hardware Design", "Tamper Detection", "Validation Tools", "Embedded Security"],
      highlights: [
        "Comprehensive tamper scenarios coverage",
        "Automated testing capabilities",
        "Enhanced security validation",
        "Industry-standard testing tool"
      ],
      metrics: {
        duration: "2019 - 2020",
        team: "4 Engineers",
        impact: "Security Standard",
        scale: "Industry Wide"
      },
      status: "Industry Adopted",
      featured: false
    },
    {
      title: "APDCL Assam Validation Initiative",
      description: "Complete validation solution for Assam Power Distribution Company Limited, focusing on region-specific requirements and local standards compliance.",
      category: "industrial",
      categoryLabel: "Regional Project",
      icon: <Target size={28} />,
      color: "rgba(167, 139, 250, 0.2)",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      technologies: ["Regional Compliance", "Custom Validation", "Local Standards", "Project Management"],
      highlights: [
        "Region-specific customization",
        "Local standard adaptation",
        "Comprehensive stakeholder engagement",
        "Successful state-wide rollout"
      ],
      metrics: {
        duration: "2020 - 2021",
        team: "10 Engineers",
        impact: "State-wide Deployment",
        scale: "300K+ Meters"
      },
      status: "Successfully Delivered",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'automation', label: 'Automation', count: projects.filter(p => p.category === 'automation').length },
    { id: 'industrial', label: 'Industrial', count: projects.filter(p => p.category === 'industrial').length },
    { id: 'innovation', label: 'Innovation', count: projects.filter(p => p.category === 'innovation').length },
    { id: 'international', label: 'International', count: projects.filter(p => p.category === 'international').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="section"
    >
      <div className="container">
        <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="label mb-3">
            Featured Projects
          </div>
          
          <h2 className="section-title mb-4">
            Project
            <br />
            <span className="text-gradient">Portfolio</span>
          </h2>
        </div>
        
        {/* Filter Tabs */}
        <div className={`animate-fade-in animate-delay-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              style={{
                background: filter === category.id ? 'var(--accent-gradient)' : 'var(--bg-card)',
                backdropFilter: 'var(--blur-md)',
                border: '1px solid var(--border-glass)',
                borderRadius: '12px',
                padding: '0.75rem 1.25rem',
                color: filter === category.id ? 'white' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '0.875rem'
              }}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-card animate-fade-in animate-delay-${Math.min(index + 2, 4)} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                padding: '0',
                transition: 'all 0.3s ease',
                height: 'fit-content',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--accent-gradient)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'white',
                  zIndex: 3,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Featured
                </div>
              )}
              
              {/* Project Image */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${project.color}, rgba(139, 92, 246, 0.1)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignment: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(1px)'
                }}></div>
                
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  {project.icon}
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  background: project.color,
                  backdropFilter: 'blur(10px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  zIndex: 2
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {project.categoryLabel}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <h3 className="card-title" style={{
                    fontSize: '1.25rem',
                    marginBottom: '0'
                  }}>
                    {project.title}
                  </h3>
                  
                  <button style={{
                    background: 'var(--bg-card)',
                    backdropFilter: 'var(--blur-md)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '8px',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease'
                  }}>
                    <ExternalLink size={16} />
                  </button>
                </div>
                
                <p className="text-body" style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.7',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>
                
                {/* Highlights */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="label mb-2">
                    Key Highlights
                  </div>
                  <div style={{
                    display: 'grid',
                    gap: '0.5rem'
                  }}>
                    {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                      <div key={hIndex} className="text-body" style={{
                        fontSize: '0.85rem',
                        paddingLeft: '1rem',
                        position: 'relative',
                        color: 'var(--text-secondary)'
                      }}>
                        <div style={{
                          position: 'absolute',
                          left: '0',
                          top: '0.5rem',
                          width: '4px',
                          height: '4px',
                          background: 'var(--accent-primary)',
                          borderRadius: '50%'
                        }}></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="label mb-2">
                    Technologies
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.technologies.slice(0, 4).map((tech, tIndex) => (
                      <span key={tIndex} style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span style={{
                        fontSize: '0.7rem',
                        color: 'var(--accent-secondary)',
                        alignSelf: 'center'
                      }}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  marginBottom: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '8px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <Calendar size={14} color="var(--text-muted)" style={{ marginBottom: '0.5rem' }} />
                    <div className="text-small">{project.metrics.duration}</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Users size={14} color="var(--text-muted)" style={{ marginBottom: '0.5rem' }} />
                    <div className="text-small">{project.metrics.team}</div>
                  </div>
                </div>
                
                {/* Status */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                    fontWeight: '500',
                    color: project.status.includes('Active') ? 'var(--accent-secondary)' : 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {project.status}
                  </span>
                  
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                  }}>
                    {project.metrics.scale}
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

export default Projects;