import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signout, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignout = () => {
    signout();
    navigate('/');
    setIsOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            Albaraa's Portfolio
          </Link>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="navbar-link" onClick={closeMenu}>About</Link>
            <Link to="/projects" className="navbar-link" onClick={closeMenu}>Projects</Link>
            <Link to="/education" className="navbar-link" onClick={closeMenu}>Education</Link>
            <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
            
            {user ? (
              <>
                {isAdmin() && (
                  <Link to="/dashboard" className="navbar-link" onClick={closeMenu}>
                    Dashboard
                  </Link>
                )}
                <div className="navbar-user">
                  <span className="user-name">
                    <FaUser /> {user.username}
                  </span>
                  <button onClick={handleSignout} className="btn-signout">
                    <FaSignOutAlt /> Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="navbar-auth">
                <Link to="/signin" className="navbar-link" onClick={closeMenu}>Sign In</Link>
                <Link to="/signup" className="btn btn-primary" onClick={closeMenu}>Sign Up</Link>
              </div>
            )}
          </div>

          <button className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

