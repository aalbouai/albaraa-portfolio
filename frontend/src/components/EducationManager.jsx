import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import './Manager.css';

const EducationManager = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    grade: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { getAuthHeader } = useContext(AuthContext);

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

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const resetForm = () => {
    setFormData({
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      grade: ''
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (editingId) {
        await axios.put(`/api/education/${editingId}`, formData, getAuthHeader());
        setSuccess('Education record updated successfully');
      } else {
        await axios.post('/api/education', formData, getAuthHeader());
        setSuccess('Education record created successfully');
      }
      fetchEducation();
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (edu) => {
    setFormData({
      institution: edu.institution,
      degree: edu.degree,
      fieldOfStudy: edu.fieldOfStudy,
      startDate: edu.startDate.split('T')[0],
      endDate: edu.endDate ? edu.endDate.split('T')[0] : '',
      current: edu.current,
      description: edu.description || '',
      grade: edu.grade || ''
    });
    setEditingId(edu._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this education record?')) {
      try {
        await axios.delete(`/api/education/${id}`, getAuthHeader());
        setSuccess('Education record deleted successfully');
        fetchEducation();
      } catch (err) {
        setError('Failed to delete education record');
      }
    }
  };

  if (loading) {
    return <div className="loading"><div className="spinner"></div></div>;
  }

  return (
    <div className="manager">
      <div className="manager-header">
        <h2>Manage Education</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? <><FaTimes /> Cancel</> : <><FaPlus /> Add Education</>}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="manager-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Institution *</label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Degree/Qualification *</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Field of Study *</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className="form-control"
                required
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
            <div className="form-group">
              <label className="form-label">Grade/GPA</label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="current"
                  checked={formData.current}
                  onChange={handleChange}
                />
                <span>Currently studying here</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update Education' : 'Add Education'}
          </button>
        </form>
      )}

      <div className="manager-list">
        {education.length === 0 ? (
          <p className="no-data">No education records yet. Add your first one!</p>
        ) : (
          education.map((edu) => (
            <div key={edu._id} className="manager-item">
              <div className="item-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p>{edu.fieldOfStudy}</p>
                {edu.grade && <p className="grade-text">Grade: {edu.grade}</p>}
              </div>
              <div className="item-actions">
                <button className="btn-icon btn-edit" onClick={() => handleEdit(edu)}>
                  <FaEdit />
                </button>
                <button className="btn-icon btn-delete" onClick={() => handleDelete(edu._id)}>
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

export default EducationManager;

