import React from 'react';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Landis+Gyr Ltd.",
      position: "Technical Expert - Test and Validation",
      period: "2015 - Present",
      location: "India",
      type: "Full-time",
      highlights: [
        "Automation Expert (2023–Present): Developed advanced Python-based automation frameworks (PyATS) for firmware validation, enhancing test accuracy and execution speed.",
        "India Validation Lead (2020–2023): Led validation for the Indian and APAC markets, managing end-to-end test cycles and reporting directly to the Delivery Head.",
        "Key Project Deliveries: Successfully handled major validation projects for Tata Power (TPDDL), DPDC (Bangladesh), APDCL (Assam), and other key utilities across India.",
        "Strategic Planning & Execution: Defined validation strategies, estimated resources, and ensured timely execution through requirement analysis, test planning, and stakeholder engagement."
      ],
      technologies: ["Python", "PyATS", "Firmware Validation", "Team Leadership", "Strategic Planning"]
    },
    {
      company: "Secure Meters Ltd.",
      position: "Executive - Test and Validation",
      period: "2006 - 2015",
      location: "India",
      type: "Full-time",
      highlights: [
        "Firmware & Compliance Specialist: Led smart meter validation with a focus on firmware, EMI/EMC compliance, and metrology, ensuring adherence to Indian and global standards (IEC, IS, CISPR, CBIP).",
        "Extensive EMI/EMC Testing: Executed RF emissions/immunity, ESD, surge, impulse, and power variation tests, ensuring product robustness against electrical disturbances.",
        "Metrology & Automation: Performed detailed metrology validation including CT-VT analysis, error correction, calibration, and automated test execution using in-house tools.",
        "Innovation Leadership: Developed specialized testing equipment and methodologies that became standard practice across validation teams."
      ],
      technologies: ["EMI/EMC Testing", "Metrology", "Firmware Testing", "IEC Standards", "CBIP Compliance"]
    },
    {
      company: "Scientech Technologies",
      position: "R&D Engineer",
      period: "2005 - 2006",
      location: "India",
      type: "Full-time",
      highlights: [
        "Research & Development: Engaged in research, development, and validation of instrumentation devices.",
        "Product Innovation: Contributed to innovative product developments and quality improvements.",
        "Technical Documentation: Created comprehensive technical documentation and testing procedures.",
        "Cross-functional Collaboration: Worked closely with design and manufacturing teams to ensure product excellence."
      ],
      technologies: ["Instrumentation", "Product Development", "Quality Assurance", "Technical Documentation"]
    },
    {
      company: "Arucom Electronics",
      position: "R&D Engineer",
      period: "2004 - 2005",
      location: "India",
      type: "Full-time",
      highlights: [
        "Electronics Development: Focused on electronic device development and testing methodologies.",
        "Quality Systems: Established quality control processes for electronic components and systems.",
        "Testing Protocols: Developed and implemented comprehensive testing protocols for electronic devices.",
        "Technical Analysis: Performed detailed technical analysis and failure mode investigations."
      ],
      technologies: ["Electronics", "Testing Protocols", "Quality Control", "Technical Analysis"]
    }
  ];

  return (
    <section id="experience" style={{
      padding: 'calc(var(--grid-unit) * 3) 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          Professional Experience
        </div>
        
        <div className="title-big" style={{ marginBottom: '48px' }}>
          Career
          <br />
          <span style={{ color: 'var(--accent-primary)' }}>Journey</span>
        </div>
        
        <div style={{
          position: 'relative'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: 'var(--accent-primary)',
            zIndex: 1
          }}></div>
          
          {experiences.map((exp, index) => (
            <div key={index} style={{
              position: 'relative',
              marginBottom: index === experiences.length - 1 ? '0' : '64px',
              paddingLeft: '80px'
            }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '14px',
                top: '24px',
                width: '20px',
                height: '20px',
                backgroundColor: 'var(--accent-primary)',
                borderRadius: '50%',
                zIndex: 2
              }}></div>
              
              <div className="card" style={{
                padding: '32px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '24px',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div>
                    <div className="text-regular" style={{
                      marginBottom: '8px',
                      fontWeight: '600'
                    }}>
                      {exp.position}
                    </div>
                    
                    <div className="text-body" style={{
                      color: 'var(--accent-primary)',
                      marginBottom: '8px',
                      fontWeight: '500'
                    }}>
                      {exp.company}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      gap: '24px',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <Calendar size={16} color="var(--text-secondary)" />
                        <span className="label-small">{exp.period}</span>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <MapPin size={16} color="var(--text-secondary)" />
                        <span className="label-small">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'var(--color-background)',
                    padding: '8px 16px',
                    borderRadius: '0'
                  }}>
                    <span className="label-small">{exp.type}</span>
                  </div>
                </div>
                
                <div style={{
                  marginBottom: '24px'
                }}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="text-body" style={{
                      marginBottom: '16px',
                      color: 'var(--text-secondary)',
                      paddingLeft: '16px',
                      position: 'relative',
                      lineHeight: '1.6'
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
                
                <div>
                  <div className="label" style={{ marginBottom: '12px' }}>
                    Key Technologies
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {exp.technologies.map((tech, tIndex) => (
                      <span key={tIndex} style={{
                        backgroundColor: 'var(--color-background)',
                        padding: '6px 12px',
                        borderRadius: '0',
                        fontSize: '12px',
                        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
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
    </section>
  );
};

export default Experience;