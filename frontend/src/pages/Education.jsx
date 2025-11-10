import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const { data } = await axios.get('/api/education');
      setEducation(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load education records');
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
    <div className="education-page">
      <section className="education-hero">
        <div className="container">
          <h1 className="section-title">Education</h1>
          <p className="section-subtitle">
            My academic journey and qualifications
          </p>
        </div>
      </section>

      <section className="education-content section">
        <div className="container">
          {error && <div className="error-message">{error}</div>}
          
          {education.length === 0 ? (
            <div className="no-education">
              <p>No education records available yet.</p>
            </div>
          ) : (
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={edu._id} className="education-item">
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  
                  <div className="education-card">
                    <div className="education-header">
                      <h3>{edu.degree}</h3>
                      <span className="education-date">
                        <FaCalendar />
                        {formatDate(edu.startDate)}
                        {edu.endDate && ` - ${formatDate(edu.endDate)}`}
                        {edu.current && ' - Present'}
                      </span>
                    </div>
                    
                    <h4>{edu.institution}</h4>
                    <p className="field-of-study">{edu.fieldOfStudy}</p>
                    
                    {edu.grade && (
                      <p className="grade">Grade: {edu.grade}</p>
                    )}
                    
                    {edu.description && (
                      <p className="education-description">{edu.description}</p>
                    )}
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

export default Education;

