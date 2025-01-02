import React, { useState, useEffect } from 'react';
import './TaskList.css';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulate fetching tasks from an API and setting up real-time updates
    const fetchTasks = () => {
      // Replace this with actual API call
      setTasks([
        { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2023-12-01' },
        { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2023-12-02' },
      ]);
    };
    
    fetchTasks();
    const intervalId = setInterval(fetchTasks, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="task-list-container">
      <header className="task-list-header">
        <img src="logo-url-here" alt="Logo" className="task-list-logo" />
      </header>
      <nav className="task-list-nav">
        <Link to="/home" className="task-list-tab">Home</Link>
        <Link to="/about" className="task-list-tab">About</Link>
        <Link to="/contact" className="task-list-tab">Contact</Link>
      </nav>
      <main className="task-list-main">
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <h2 className="task-title">{task.title}</h2>
              <p className="task-description">{task.description}</p>
              <p className="task-due-date">Due: {task.dueDate}</p>
            </div>
          ))}
        </div>
        <button className="task-action-button">Add/Update Task</button>
      </main>
      <aside className="task-list-aside">
        <Link to="/related1" className="task-list-link">Related Task 1</Link>
        <Link to="/related2" className="task-list-link">Related Task 2</Link>
      </aside>
      <footer className="task-list-footer">
        <p>© 2023 Your Company</p>
        <Link to="/terms" className="task-list-footer-link">Terms and Conditions</Link>
        <Link to="/privacy" className="task-list-footer-link">Privacy Policy</Link>
      </footer>
    </div>
  );
};

export default TaskList;
