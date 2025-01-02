import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import AddTask from './components/AddTask/AddTask.js';
import TaskList from './components/TaskList/TaskList.js';
import CompleteTask from './components/CompleteTask/CompleteTask.js';


// Authentication Context
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

// Global Error Context
const ErrorContext = createContext();

const useError = () => useContext(ErrorContext);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token with backend
      verifyToken(token).then(valid => {
        if (valid) {
          setIsAuthenticated(true);
        } else {
          handleLogout();
        }
      });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    navigate('/tasks');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const verifyToken = async (token) => {
    try {
      // Assume a backend endpoint to verify token
      const response = await fetch('/api/verify-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      return data.valid;
    } catch (err) {
      setError('Failed to verify token.');
      return false;
    }
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const PublicRoute = ({ children }) => {
    return !isAuthenticated ? children : <Navigate to="/tasks" />;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, handleLogout }}>
      <ErrorContext.Provider value={{ error, setError }}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <nav role="navigation" style={{ padding: '10px', background: '#f8f9fa' }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            {isAuthenticated ? (
              <>
                <Link to="/tasks" style={{ marginRight: '10px' }}>Task List</Link>
                <Link to="/add-task" style={{ marginRight: '10px' }}>Add Task</Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </nav>
          <main style={{ flex: '1' }}>
            <Routes>
           
              <Route path="/tasks" element={<ProtectedRoute><TaskList /></ProtectedRoute>} />
              <Route path="/add-task" element={<ProtectedRoute><AddTask /></ProtectedRoute>} />
              <Route path="/complete-task" element={<ProtectedRoute><CompleteTask /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <footer style={{ textAlign: 'center', padding: '10px', background: '#f8f9fa', position: 'fixed', width: '100%', bottom: '0' }}>
            &copy; 2024 helmi App. All rights reserved.
          </footer>
        </div>
      </ErrorContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
