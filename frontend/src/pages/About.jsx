import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript } from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
    { name: 'Express', icon: <SiExpress />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 }
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Learn more about my journey, skills, and passion for web development
          </p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>My Story</h2>
              <p>
                Hello! I'm Albaraa, a passionate web application developer currently studying
                at Centennial College. My journey into web development started with a curiosity
                about how websites work, and it has evolved into a deep passion for creating
                innovative and user-friendly web applications.
              </p>
              <p>
                I specialize in full-stack development, with expertise in modern technologies
                like React, Node.js, Express, and MongoDB. I love the challenge of turning
                complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or learning about the latest trends in web development.
                I believe in continuous learning and always strive to improve my skills.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <h3>Education</h3>
                <p>Web Application Development</p>
                <p className="highlight-detail">Centennial College</p>
              </div>

              <div className="highlight-card">
                <h3>Focus Areas</h3>
                <ul>
                  <li>Full-Stack Development</li>
                  <li>RESTful API Design</li>
                  <li>Database Management</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className="highlight-card">
                <h3>Interests</h3>
                <ul>
                  <li>Web Technologies</li>
                  <li>UI/UX Design</li>
                  <li>Cloud Computing</li>
                  <li>Open Source</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

