import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { AuthContext } from '../../context/AuthContext';

// Mock AuthContext
const mockAuthContext = {
  user: null,
  signout: vi.fn(),
  isAdmin: vi.fn(() => false)
};

const mockAuthContextWithUser = {
  user: { username: 'testuser', role: 'user' },
  signout: vi.fn(),
  isAdmin: vi.fn(() => false)
};

const mockAuthContextWithAdmin = {
  user: { username: 'admin', role: 'admin' },
  signout: vi.fn(),
  isAdmin: vi.fn(() => true)
};

describe('Navbar Component', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContext}>
          <Navbar />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('shows Sign In and Sign Up when user is not logged in', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContext}>
          <Navbar />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('shows username and Sign Out when user is logged in', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContextWithUser}>
          <Navbar />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('testuser')).toBeInTheDocument();
    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  it('shows Dashboard link when admin is logged in', () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={mockAuthContextWithAdmin}>
          <Navbar />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});

