import React from 'react';
import { ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PyATS Automation Framework",
      description: "Advanced Python-based test automation framework for firmware validation, significantly improving test accuracy and execution speed for smart meter projects.",
      category: "Automation Framework",
      technologies: ["Python", "PyATS", "Firmware Testing", "CI/CD"],
      highlights: [
        "Reduced test execution time by 60%",
        "Improved test accuracy to 99.5%",
        "Scalable architecture for multiple products",
        "Integrated with CI/CD pipelines"
      ],
      metrics: {
        duration: "2023 - Present",
        team: "5 Engineers",
        impact: "Global Implementation"
      },
      status: "Active Development"
    },
    {
      title: "Tata Power (TPDDL) Validation Project",
      description: "Comprehensive smart meter validation project for Tata Power Delhi Distribution Limited, covering full-spectrum testing and compliance validation.",
      category: "Industrial Project",
      technologies: ["Smart Meters", "Metrology", "EMI/EMC", "Compliance Testing"],
      highlights: [
        "Complete end-to-end validation cycle",
        "BIS certification compliance",
        "Multi-phase testing approach",
        "Successful deployment across Delhi region"
      ],
      metrics: {
        duration: "2022 - 2023",
        team: "12 Engineers",
        impact: "500K+ Meters"
      },
      status: "Successfully Delivered"
    },
    {
      title: "3-Phase Simulator Development",
      description: "In-house developed 3-phase power simulator for accurate testing of smart meters under various power conditions and scenarios.",
      category: "Hardware Innovation",
      technologies: ["Hardware Design", "Power Electronics", "Metrology", "Calibration"],
      highlights: [
        "Custom hardware solution",
        "Precise power condition simulation",
        "Cost-effective testing solution",
        "Adopted across multiple validation labs"
      ],
      metrics: {
        duration: "2020 - 2021",
        team: "3 Engineers",
        impact: "Lab Standard Tool"
      },
      status: "Production Ready"
    },
    {
      title: "DPDC Bangladesh Smart Meter Project",
      description: "Led validation efforts for Dhaka Power Distribution Company's smart meter deployment, ensuring compliance with international standards.",
      category: "International Project",
      technologies: ["International Standards", "Cross-border Compliance", "Project Management"],
      highlights: [
        "International standard compliance",
        "Cross-cultural team management",
        "Remote validation coordination",
        "Successful regional deployment"
      ],
      metrics: {
        duration: "2021 - 2022",
        team: "8 Engineers",
        impact: "Regional Deployment"
      },
      status: "Successfully Delivered"
    },
    {
      title: "Tamper Simulation Jig",
      description: "Innovative tamper testing solution for comprehensive security validation of smart meters against various tampering attempts.",
      category: "Security Testing",
      technologies: ["Security Testing", "Hardware Design", "Tamper Detection", "Validation Tools"],
      highlights: [
        "Comprehensive tamper scenarios",
        "Automated testing capabilities",
        "Enhanced security validation",
        "Industry-standard testing tool"
      ],
      metrics: {
        duration: "2019 - 2020",
        team: "4 Engineers",
        impact: "Security Standard"
      },
      status: "Industry Adopted"
    },
    {
      title: "APDCL Assam Validation Initiative",
      description: "Complete validation solution for Assam Power Distribution Company Limited, focusing on region-specific requirements and standards.",
      category: "Regional Project",
      technologies: ["Regional Compliance", "Custom Validation", "Local Standards"],
      highlights: [
        "Region-specific customization",
        "Local standard adaptation",
        "Stakeholder engagement",
        "Successful state-wide rollout"
      ],
      metrics: {
        duration: "2020 - 2021",
        team: "10 Engineers",
        impact: "State-wide Deployment"
      },
      status: "Successfully Delivered"
    }
  ];

  return (
    <section id="projects" style={{
      padding: 'calc(var(--grid-unit) * 3) 0',
      backgroundColor: 'var(--color-background)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          Featured Projects
        </div>
        
        <div className="title-big" style={{ marginBottom: '48px' }}>
          Project
          <br />
          <span style={{ color: 'var(--accent-primary)' }}>Portfolio</span>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="card" style={{
              padding: '32px',
              transition: 'all 0.3s ease',
              height: 'fit-content'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}>
                <div style={{
                  backgroundColor: 'var(--accent-primary)',
                  padding: '6px 12px',
                  borderRadius: '0'
                }}>
                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--accent-foreground)',
                    fontWeight: '500'
                  }}>
                    {project.category}
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <ExternalLink size={16} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                </div>
              </div>
              
              <div className="text-regular" style={{
                marginBottom: '16px',
                fontWeight: '600'
              }}>
                {project.title}
              </div>
              
              <div className="text-body" style={{
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                {project.description}
              </div>
              
              <div style={{
                marginBottom: '24px'
              }}>
                <div className="label" style={{ marginBottom: '12px' }}>
                  Key Highlights
                </div>
                {project.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="text-body" style={{
                    marginBottom: '8px',
                    color: 'var(--text-secondary)',
                    paddingLeft: '16px',
                    position: 'relative',
                    fontSize: '14px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'var(--accent-primary)'
                    }}>•</span>
                    {highlight}
                  </div>
                ))}
              </div>
              
              <div style={{
                marginBottom: '24px'
              }}>
                <div className="label" style={{ marginBottom: '12px' }}>
                  Technologies
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {project.technologies.map((tech, tIndex) => (
                    <span key={tIndex} style={{
                      backgroundColor: 'var(--color-background)',
                      padding: '4px 8px',
                      borderRadius: '0',
                      fontSize: '10px',
                      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginBottom: '16px',
                padding: '16px',
                backgroundColor: 'var(--color-background)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Calendar size={16} color="var(--text-secondary)" style={{ marginBottom: '8px' }} />
                  <div className="label-small">{project.metrics.duration}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Users size={16} color="var(--text-secondary)" style={{ marginBottom: '8px' }} />
                  <div className="label-small">{project.metrics.team}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Target size={16} color="var(--text-secondary)" style={{ marginBottom: '8px' }} />
                  <div className="label-small">{project.metrics.impact}</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '10px',
                  fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: project.status === 'Active Development' ? 'var(--accent-primary)' : 'var(--text-secondary)'
                }}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;