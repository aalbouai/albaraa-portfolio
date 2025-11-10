import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import './Manager.css';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    projectUrl: '',
    githubUrl: '',
    startDate: '',
    endDate: '',
    current: false,
    featured: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { getAuthHeader } = useContext(AuthContext);

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

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      technologies: '',
      imageUrl: '',
      projectUrl: '',
      githubUrl: '',
      startDate: '',
      endDate: '',
      current: false,
      featured: false
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t)
    };

    try {
      if (editingId) {
        await axios.put(`/api/projects/${editingId}`, projectData, getAuthHeader());
        setSuccess('Project updated successfully');
      } else {
        await axios.post('/api/projects', projectData, getAuthHeader());
        setSuccess('Project created successfully');
      }
      fetchProjects();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(', '),
      imageUrl: project.imageUrl || '',
      projectUrl: project.projectUrl || '',
      githubUrl: project.githubUrl || '',
      startDate: project.startDate.split('T')[0],
      endDate: project.endDate ? project.endDate.split('T')[0] : '',
      current: project.current,
      featured: project.featured
    });
    setEditingId(project._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`/api/projects/${id}`, getAuthHeader());
        setSuccess('Project deleted successfully');
        fetchProjects();
      } catch (err) {
        setError('Failed to delete project');
      }
    }
  };

  if (loading) {
    return <div className="loading"><div className="spinner"></div></div>;
  }

  return (
    <div className="manager">
      <div className="manager-header">
        <h2>Manage Projects</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? <><FaTimes /> Cancel</> : <><FaPlus /> Add Project</>}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="manager-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Technologies (comma-separated)</label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className="form-control"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Project URL</label>
              <input
                type="url"
                name="projectUrl"
                value={formData.projectUrl}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">GitHub URL</label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Start Date *</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="form-control"
                disabled={formData.current}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="current"
                  checked={formData.current}
                  onChange={handleChange}
                />
                <span>Currently working on this</span>
              </label>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                />
                <span>Featured project</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update Project' : 'Create Project'}
          </button>
        </form>
      )}

      <div className="manager-list">
        {projects.length === 0 ? (
          <p className="no-data">No projects yet. Create your first one!</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="manager-item">
              <div className="item-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="item-actions">
                <button className="btn-icon btn-edit" onClick={() => handleEdit(project)}>
                  <FaEdit />
                </button>
                <button className="btn-icon btn-delete" onClick={() => handleDelete(project._id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectManager;

