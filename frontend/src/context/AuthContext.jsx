import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
    setLoading(false);
  }, []);

  const signin = async (email, password) => {
    try {
      const { data } = await axios.post('/api/auth/signin', { email, password });
      setUser(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Sign in failed' 
      };
    }
  };

  const signup = async (username, email, password) => {
    try {
      const { data } = await axios.post('/api/auth/signup', { username, email, password });
      setUser(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      return { success: true, data };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Sign up failed' 
      };
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const getAuthHeader = () => {
    if (user && user.token) {
      return {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
    }
    return {};
  };

  const value = {
    user,
    loading,
    signin,
    signup,
    signout,
    isAdmin,
    getAuthHeader
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

