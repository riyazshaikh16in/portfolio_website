import React from 'react';
import { Award, Code, Users, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award size={24} />,
      number: "20+",
      label: "Years Experience"
    },
    {
      icon: <Code size={24} />,
      number: "50+",
      label: "Projects Delivered"
    },
    {
      icon: <Users size={24} />,
      number: "3",
      label: "Teams Led"
    },
    {
      icon: <Globe size={24} />,
      number: "15+",
      label: "Countries Served"
    }
  ];

  return (
    <section id="about" style={{
      padding: 'calc(var(--grid-unit) * 3) 0',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <div className="label" style={{ marginBottom: '24px' }}>
          About Me
        </div>
        
        <div className="title-big" style={{ marginBottom: '48px' }}>
          Technical Excellence
          <br />
          <span style={{ color: 'var(--accent-primary)' }}>Delivered</span>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--grid-unit)',
          alignItems: 'start',
          marginBottom: '64px'
        }}>
          <div>
            <div className="text-body" style={{
              marginBottom: '32px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Seasoned expert with two decades of hands-on experience in Automation Testing, 
              Firmware, Hardware, EMI/EMC, Metrology, Reliability, Performance, and Tamper Testing—fully 
              focused on the Metering domain.
            </div>
            
            <div className="text-body" style={{
              marginBottom: '32px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Currently serving as Technical Expert at Landis+Gyr, where I lead Python-based test 
              automation (PyATS), drive firmware validation teams, and shape robust testing strategies 
              for global projects. Known for innovation in automation and delivering reliable, 
              high-performance solutions.
            </div>

            <div className="text-body" style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              My expertise spans across smart meter validation, compliance testing with global standards 
              (IEC, IS, CBIP, CISPR), and developing innovative testing frameworks that have transformed 
              how teams approach quality assurance in the metering industry.
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'var(--color-background)',
            padding: '48px',
            border: '1px solid var(--border-light)'
          }}>
            <div className="label" style={{ marginBottom: '32px' }}>
              Key Achievements
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px'
            }}>
              {highlights.map((item, index) => (
                <div key={index} style={{
                  textAlign: 'center'
                }}>
                  <div style={{
                    marginBottom: '16px',
                    color: 'var(--accent-primary)'
                  }}>
                    {item.icon}
                  </div>
                  
                  <div className="text-regular" style={{
                    marginBottom: '8px',
                    fontWeight: '700',
                    color: 'var(--text-primary)'
                  }}>
                    {item.number}
                  </div>
                  
                  <div className="label-small">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          <div className="card">
            <div className="label" style={{ marginBottom: '16px' }}>
              Education
            </div>
            <div className="text-body" style={{ marginBottom: '12px' }}>
              <strong>Bachelor's Degree</strong><br />
              Electronics & Communications<br />
              Rajasthan Technical University
            </div>
            <div className="text-body">
              <strong>Diploma</strong><br />
              Electronics & Telecommunications<br />
              R.G.P.V. Bhopal
            </div>
          </div>
          
          <div className="card">
            <div className="label" style={{ marginBottom: '16px' }}>
              Certifications
            </div>
            <div className="text-body" style={{ lineHeight: '1.8' }}>
              • Executive PG in Cloud Computing & DevOps<br />
              • ISTQB Advanced - Test Analyst<br />
              • ISTQB Foundation Certification<br />
              • Certified Scrum Master
            </div>
          </div>
          
          <div className="card">
            <div className="label" style={{ marginBottom: '16px' }}>
              Specializations
            </div>
            <div className="text-body" style={{ lineHeight: '1.8' }}>
              • Smart Meter Testing & Validation<br />
              • Python Automation (PyATS)<br />
              • EMI/EMC Compliance Testing<br />
              • Firmware & Hardware Validation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;