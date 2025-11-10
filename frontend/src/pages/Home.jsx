import { Link } from 'react-router-dom';
import { FaCode, FaGraduationCap, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Albaraa</span>
            </h1>
            <h2 className="hero-subtitle">Web Application Developer</h2>
            <p className="hero-description">
              Passionate about creating modern, responsive, and user-friendly web applications.
              Specializing in full-stack development with expertise in React, Node.js, and MongoDB.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Web Development</h3>
              <p>
                Building responsive and dynamic web applications using modern technologies
                like React, Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaGraduationCap />
              </div>
              <h3>Continuous Learning</h3>
              <p>
                Currently studying Web Application Development at Centennial College,
                constantly expanding my skills and knowledge.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaEnvelope />
              </div>
              <h3>Let's Connect</h3>
              <p>
                Always open to new opportunities and collaborations. Feel free to reach
                out and let's create something amazing together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start a Project?</h2>
            <p>Let's work together to bring your ideas to life</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

