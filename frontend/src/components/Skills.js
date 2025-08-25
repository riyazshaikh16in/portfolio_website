import React from 'react';
import { Cpu, Code2, Shield, Users, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cpu size={32} />,
      title: "Smart Meter Testing",
      skills: [
        "Full-spectrum validation across firmware, hardware, metrology",
        "EMI/EMC compliance testing",
        "Tamper and reliability testing",
        "Performance optimization"
      ]
    },
    {
      icon: <Code2 size={32} />,
      title: "Automation Expert",
      skills: [
        "Advanced Python (PyATS) frameworks",
        "Scalable test automation solutions",
        "Custom testing tool development",
        "CI/CD integration"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance & Standards",
      skills: [
        "Global standards (IEC, IS, CBIP, CISPR)",
        "BIS certification processes",
        "Regulatory compliance validation",
        "Quality assurance protocols"
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Leadership & Strategy",
      skills: [
        "Multi-region team leadership",
        "Strategic testing planning",
        "Stakeholder alignment",
        "Resource estimation & management"
      ]
    },
    {
      icon: <Wrench size={32} />,
      title: "Innovation & Tools",
      skills: [
        "3-Phase Simulator development",
        "Tamper Simulation Jig creation",
        "In-house testing solutions",
        "Lab management & vendor relations"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Project Delivery",
      skills: [
        "India, APAC & EMEA project delivery",
        "High-impact smart meter projects",
        "End-to-end validation cycles",
        "Cross-functional collaboration"
      ]
    }
  ];

  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "PyATS Framework", level: 90 },
    { name: "Test Automation", level: 95 },
    { name: "Firmware Validation", level: 90 },
    { name: "EMI/EMC Testing", level: 85 },
    { name: "Smart Meter Technologies", level: 95 },
    { name: "Metrology", level: 85 },
    { name: "Hardware Testing", level: 80 },
    { name: "Project Management", level: 85 },
    { name: "Team Leadership", level: 90 }
  ];

  return (
    <section id="skills" style={{
      padding: 'calc(var(--grid-unit) * 3) 0',
      backgroundColor: 'var(--color-background)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          Skills & Expertise
        </div>
        
        <div className="title-big" style={{ marginBottom: '48px' }}>
          Technical
          <br />
          <span style={{ color: 'var(--accent-primary)' }}>Mastery</span>
        </div>
        
        {/* Skill Categories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {skillCategories.map((category, index) => (
            <div key={index} className="card" style={{
              padding: '32px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                color: 'var(--accent-primary)',
                marginBottom: '24px'
              }}>
                {category.icon}
              </div>
              
              <div className="text-regular" style={{
                marginBottom: '24px',
                fontWeight: '600'
              }}>
                {category.title}
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-body" style={{
                    color: 'var(--text-secondary)',
                    paddingLeft: '16px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'var(--accent-primary)'
                    }}>•</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technical Proficiency */}
        <div style={{
          backgroundColor: 'var(--bg-white)',
          padding: '48px',
          border: '1px solid var(--border-light)'
        }}>
          <div className="label" style={{ marginBottom: '32px' }}>
            Technical Proficiency
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {technicalSkills.map((skill, index) => (
              <div key={index} style={{
                marginBottom: '24px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <span className="text-body" style={{ fontWeight: '500' }}>
                    {skill.name}
                  </span>
                  <span className="label-small">
                    {skill.level}%
                  </span>
                </div>
                
                <div style={{
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'var(--color-background)',
                  position: 'relative'
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    backgroundColor: 'var(--accent-primary)',
                    transition: 'width 1s ease-in-out'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;