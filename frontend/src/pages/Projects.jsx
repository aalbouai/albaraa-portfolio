import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get('/api/projects');
      setProjects(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load projects');
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            Explore my portfolio of web development projects
          </p>
        </div>
      </section>

      <section className="projects-content section">
        <div className="container">
          {error && <div className="error-message">{error}</div>}
          
          {projects.length === 0 ? (
            <div className="no-projects">
              <p>No projects available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project._id} className="project-card">
                  {project.imageUrl && (
                    <div className="project-image">
                      <img src={project.imageUrl} alt={project.title} />
                    </div>
                  )}
                  
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-date">
                      {formatDate(project.startDate)}
                      {project.endDate && ` - ${formatDate(project.endDate)}`}
                      {project.current && ' - Present'}
                    </p>
                    <p className="project-description">{project.description}</p>
                    
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="project-technologies">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    )}
                    
                    <div className="project-links">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {project.projectUrl && (
                        <a 
                          href={project.projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

