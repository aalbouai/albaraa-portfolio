import { useState } from 'react';
import { FaProjectDiagram, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import ProjectManager from '../components/ProjectManager';
import EducationManager from '../components/EducationManager';
import ContactManager from '../components/ContactManager';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <h1>Admin Dashboard</h1>
          <p>Manage your portfolio content</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-tabs">
            <button
              className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <FaProjectDiagram /> Projects
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FaGraduationCap /> Education
            </button>
            <button
              className={`tab-button ${activeTab === 'contacts' ? 'active' : ''}`}
              onClick={() => setActiveTab('contacts')}
            >
              <FaEnvelope /> Contacts
            </button>
          </div>

          <div className="dashboard-panel">
            {activeTab === 'projects' && <ProjectManager />}
            {activeTab === 'education' && <EducationManager />}
            {activeTab === 'contacts' && <ContactManager />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

