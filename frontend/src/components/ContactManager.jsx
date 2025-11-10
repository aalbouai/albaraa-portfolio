import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { FaTrash, FaEnvelope } from 'react-icons/fa';
import './Manager.css';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { getAuthHeader } = useContext(AuthContext);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data } = await axios.get('/api/contacts', getAuthHeader());
      setContacts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load contacts');
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`/api/contacts/${id}`, { status }, getAuthHeader());
      setSuccess('Contact status updated');
      fetchContacts();
    } catch (err) {
      setError('Failed to update contact status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`/api/contacts/${id}`, getAuthHeader());
        setSuccess('Contact deleted successfully');
        fetchContacts();
      } catch (err) {
        setError('Failed to delete contact');
      }
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading"><div className="spinner"></div></div>;
  }

  return (
    <div className="manager">
      <div className="manager-header">
        <h2>Manage Contacts</h2>
        <p className="manager-subtitle">View and manage contact form submissions</p>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <div className="manager-list">
        {contacts.length === 0 ? (
          <p className="no-data">No contact submissions yet.</p>
        ) : (
          contacts.map((contact) => (
            <div key={contact._id} className="manager-item contact-item">
              <div className="item-content">
                <div className="contact-header">
                  <h3>{contact.name}</h3>
                  <span className={`status-badge status-${contact.status}`}>
                    {contact.status}
                  </span>
                </div>
                <p className="contact-email">
                  <FaEnvelope /> {contact.email}
                </p>
                <p className="contact-subject"><strong>Subject:</strong> {contact.subject}</p>
                <p className="contact-message">{contact.message}</p>
                <p className="contact-date">Received: {formatDate(contact.createdAt)}</p>
                
                <div className="contact-actions">
                  <select
                    value={contact.status}
                    onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                    className="status-select"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn-icon btn-delete" onClick={() => handleDelete(contact._id)}>
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

export default ContactManager;

