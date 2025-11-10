import { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await axios.post('/api/contacts', formData);
      setSuccess('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out through any of these channels:</p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>Toronto, Ontario, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                {success && <div className="success-message">{success}</div>}
                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    className="form-control"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

