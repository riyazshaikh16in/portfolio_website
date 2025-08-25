import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Award, GraduationCap, Briefcase, Code, Target } from 'lucide-react';

const Portfolio = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const contactInfo = [
    { icon: <Phone size={16} />, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: <Mail size={16} />, text: "expert@techvalidation.com", href: "mailto:expert@techvalidation.com" },
    { icon: <Linkedin size={16} />, text: "linkedin.com/in/technical-expert", href: "https://linkedin.com/in/technical-expert" },
    { icon: <MapPin size={16} />, text: "India • Global Projects", href: null }
  ];

  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Electronics & Communications",
      institution: "Rajasthan Technical University",
      year: "2004"
    },
    {
      degree: "Diploma",
      field: "Electronics & Telecommunications", 
      institution: "R.G.P.V. Bhopal",
      year: "2002"
    }
  ];

  const certifications = [
    {
      title: "Executive PG in Cloud Computing & DevOps",
      year: "2023"
    },
    {
      title: "ISTQB Advanced - Test Analyst",
      year: "2022"
    },
    {
      title: "ISTQB Foundation Certification",
      year: "2021"
    },
    {
      title: "Certified Scrum Master",
      year: "2020"
    }
  ];

  const workExperience = [
    {
      company: "Landis+Gyr Ltd.",
      position: "Technical Expert - Test and Validation",
      duration: "2015 - Present",
      achievements: [
        "Developed advanced Python-based automation frameworks (PyATS)",
        "Led validation for Indian and APAC markets",
        "Delivered major projects for Tata Power, DPDC Bangladesh, APDCL Assam",
        "Enhanced test accuracy to 99.5% and reduced execution time by 60%"
      ]
    },
    {
      company: "Secure Meters Ltd.",
      position: "Executive - Test and Validation",
      duration: "2006 - 2015",
      achievements: [
        "Led smart meter validation with EMI/EMC compliance focus",
        "Executed comprehensive RF emissions/immunity testing",
        "Performed detailed metrology validation and calibration",
        "Developed specialized testing equipment and methodologies"
      ]
    },
    {
      company: "Scientech Technologies",
      position: "R&D Engineer",
      duration: "2005 - 2006",
      achievements: [
        "Research and development of instrumentation devices",
        "Product innovation and quality improvements",
        "Technical documentation and testing procedures"
      ]
    },
    {
      company: "Arucom Electronics",
      position: "R&D Engineer", 
      duration: "2004 - 2005",
      achievements: [
        "Electronic device development and testing",
        "Quality control processes establishment",
        "Technical analysis and failure investigations"
      ]
    }
  ];

  const skills = [
    { name: "Python Programming", level: 95 },
    { name: "PyATS Framework", level: 90 },
    { name: "Test Automation", level: 95 },
    { name: "Smart Meter Technologies", level: 95 },
    { name: "EMI/EMC Testing", level: 85 },
    { name: "Firmware Validation", level: 90 },
    { name: "Project Management", level: 85 },
    { name: "Team Leadership", level: 90 }
  ];

  return (
    <div className="portfolio-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Profile Photo */}
        <div className="profile-photo">
          <img 
            src="https://customer-assets.emergentagent.com/job_automation-expert-3/artifacts/et09lpdp_1656259899873.jpeg"
            alt="Technical Expert"
          />
        </div>

        {/* Hero Information */}
        <div className="text-center mb-4">
          <h1 className="hero-name">Technical Expert</h1>
          <h2 className="hero-title">Automation Specialist</h2>
          <p className="text-body mb-3">
            Two decades of expertise in Test Automation, Firmware Validation, 
            and Smart Meter Technologies across global markets.
          </p>
        </div>

        {/* Contact Section */}
        <div 
          className={`sidebar-card ${expandedCard === 'contact' ? 'expanded' : ''}`}
          onClick={() => toggleCard('contact')}
        >
          <div className="card-header">
            <div className="card-icon">
              <Mail size={20} />
            </div>
            <h3 className="section-title">Contact</h3>
          </div>
          <div className="card-content">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="text-small">
                  {item.href ? (
                    <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div 
          className={`sidebar-card ${expandedCard === 'education' ? 'expanded' : ''}`}
          onClick={() => toggleCard('education')}
        >
          <div className="card-header">
            <div className="card-icon">
              <GraduationCap size={20} />
            </div>
            <h3 className="section-title">Education</h3>
          </div>
          <div className="card-content">
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="text-body" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                  {edu.degree}
                </div>
                <div className="text-small" style={{ color: 'var(--accent-primary)' }}>
                  {edu.field}
                </div>
                <div className="text-small">
                  {edu.institution} • {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div 
          className={`sidebar-card ${expandedCard === 'certifications' ? 'expanded' : ''}`}
          onClick={() => toggleCard('certifications')}
        >
          <div className="card-header">
            <div className="card-icon">
              <Award size={20} />
            </div>
            <h3 className="section-title">Awards</h3>
          </div>
          <div className="card-content">
            {certifications.map((cert, index) => (
              <div key={index} className="mb-2">
                <div className="text-body" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                  {cert.title}
                </div>
                <div className="date-range">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Work Experience Section */}
        <div 
          className={`content-card ${expandedCard === 'experience' ? 'expanded' : ''}`}
          onClick={() => toggleCard('experience')}
        >
          <div className="card-header">
            <div className="card-icon">
              <Briefcase size={20} />
            </div>
            <h3 className="section-title-dark">Work Experience</h3>
          </div>
          <div className="card-content">
            {workExperience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div className="company-name">{job.company}</div>
                  <div className="position-title">{job.position}</div>
                  <div className="date-range">{job.duration}</div>
                </div>
                <ul style={{ paddingLeft: '1rem' }}>
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-body mb-1">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div 
          className={`content-card ${expandedCard === 'skills' ? 'expanded' : ''}`}
          onClick={() => toggleCard('skills')}
        >
          <div className="card-header">
            <div className="card-icon">
              <Code size={20} />
            </div>
            <h3 className="section-title-dark">Skills</h3>
          </div>
          <div className="card-content">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects Preview */}
        <div 
          className={`content-card ${expandedCard === 'projects' ? 'expanded' : ''}`}
          onClick={() => toggleCard('projects')}
        >
          <div className="card-header">
            <div className="card-icon">
              <Target size={20} />
            </div>
            <h3 className="section-title-dark">Key Projects</h3>
          </div>
          <div className="card-content">
            <div className="experience-item">
              <div className="experience-header">
                <div className="company-name">PyATS Automation Framework</div>
                <div className="position-title">Lead Developer</div>
                <div className="date-range">2023 - Present</div>
              </div>
              <p className="text-body mb-2">
                Advanced Python-based test automation framework for firmware validation, 
                significantly improving test accuracy and execution speed for smart meter projects globally.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="company-name">Tata Power (TPDDL) Validation</div>
                <div className="position-title">Project Lead</div>
                <div className="date-range">2022 - 2023</div>
              </div>
              <p className="text-body mb-2">
                Comprehensive smart meter validation project covering full-spectrum testing 
                and compliance validation across Delhi region.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="company-name">3-Phase Simulator Development</div>
                <div className="position-title">Innovation Lead</div>
                <div className="date-range">2020 - 2021</div>
              </div>
              <p className="text-body">
                In-house developed 3-phase power simulator for accurate testing of smart meters 
                under various power conditions, now adopted as lab standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;